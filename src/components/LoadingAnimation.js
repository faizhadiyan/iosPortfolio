'use client';

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse">
      <div className="w-2 h-2 bg-[#0071E3] rounded-full"></div>
      <div className="w-2 h-2 bg-[#0071E3] rounded-full animation-delay-200"></div>
      <div className="w-2 h-2 bg-[#0071E3] rounded-full animation-delay-400"></div>
    </div>
  );
}
