"use client";

export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuitPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#00f0ff" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="2" fill="#00f0ff">
              <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0s" repeatCount="indefinite" />
            </circle>
            <circle cx="30" cy="30" r="2" fill="#00f0ff">
              <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="30" cy="30" r="2" fill="#00f0ff">
              <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>
    </div>
  );
}
