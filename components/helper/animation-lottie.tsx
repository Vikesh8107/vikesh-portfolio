"use client";

import React, { CSSProperties } from "react";
import Lottie from "lottie-react";

interface AnimationLottieProps {
  /** The JSON data for the Lottie animation */
  animationPath: any;
  /** Width of the animation (e.g. "100%", "200px", 300) */
  width?: string | number;
  /** Whether to loop the animation */
  loop?: boolean;
  /** Whether to autoplay on mount */
  autoplay?: boolean;
  /** Additional styling */
  style?: CSSProperties;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width = "95%",
  loop = true,
  autoplay = true,
  style,
}) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData: animationPath,
    style: {
      width,
      ...style,
    } as CSSProperties,
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
