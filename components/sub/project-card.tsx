"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  iframeLink?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  iframeLink,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="block relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-2xl transition-shadow"
    >
      {/* Preview area */}
      {iframeLink ? (
        <div className="w-full h-48">
          <iframe
            src={iframeLink}
            className="w-full h-full object-cover"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={title}
          width={500}
          height={800}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-4 bg-[#030014]">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
