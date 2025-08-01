"use client";
import Lottie from "lottie-react";
import homeAnimation from "@/animations/Home_Animation.json";

export default function AnimatedHome() {
  return (
    <div className="w-12 h-12">
      <Lottie animationData={homeAnimation} loop autoplay />
    </div>
  );
}
