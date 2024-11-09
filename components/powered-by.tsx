import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function PoweredBy({
  lastAnalyzedDate
}:{
  lastAnalyzedDate: string
}) {
  const words = [
    {
      text: "Powered",
      className: "text-gray-200 text-xl md:text-5xl",
    },
    {
      text: "by",
      className: "text-gray-200 text-xl md:text-5xl",
    },
    {
      text: "Google Vision AI",
      className: "text-[#2761D9] text-xl md:text-5xl",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div>
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="text-[#2761D9] h-6"
        />
      </div>
      <div className="flex justify-center md:mb-12 mb-10">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-900 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] md:px-6 px-4 font-medium text-slate-400 transition-colors text-xs md:text-base">
          <div className="flex gap-2">
            <p>Last Analysis:</p>
            <span className="text-[#2761D9]">{lastAnalyzedDate}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
