"use client";

import React, { useEffect, ReactNode, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  identifier: string | number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const container = document.querySelector<HTMLDivElement>(
      `.glow-container-${identifier}`
    );
    const cards = document.querySelectorAll<HTMLElement>(
      `.glow-card-${identifier}`
    );

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const update = (event?: PointerEvent) => {
      const x = event?.clientX ?? 0;
      const y = event?.clientY ?? 0;

      cards.forEach((card) => {
        const bounds = card.getBoundingClientRect();

        const insideX =
          x > bounds.left - CONFIG.proximity &&
          x < bounds.left + bounds.width + CONFIG.proximity;
        const insideY =
          y > bounds.top - CONFIG.proximity &&
          y < bounds.top + bounds.height + CONFIG.proximity;

        card.style.setProperty("--active", insideX && insideY ? "1" : `${CONFIG.opacity}`);

        const centerX = bounds.left + bounds.width * 0.5;
        const centerY = bounds.top + bounds.height * 0.5;

        let angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI;
        if (angle < 0) angle += 360;

        card.style.setProperty("--start", `${angle + 90}`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => update(e);

    // initialize styles & listeners
    if (container) {
      container.style.setProperty("--gap", CONFIG.gap.toString());
      container.style.setProperty("--blur", CONFIG.blur.toString());
      container.style.setProperty("--spread", CONFIG.spread.toString());
      container.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    }
    document.body.addEventListener("pointermove", handlePointerMove);
    update(); // initial call

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [identifier, isClient]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows" />
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
