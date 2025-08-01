"use client";
import Lottie from "lottie-react";
import catAnimation from "@/public/animations/cat.json";

export default function AnimatedCat() {
  return (
    <div className="w-14 h-14">
      <Lottie animationData={catAnimation} loop autoplay />
    </div>
  );
}
