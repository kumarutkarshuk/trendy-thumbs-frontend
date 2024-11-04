import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function PoweredBy() {
  const words = [
    {
      text: "Powered",
      className: "text-white text-lg md:text-5xl",
    },
    {
      text: "by",
      className: "text-white text-lg md:text-5xl",
    },
    {
      text: "Google Vision.",
      className: "text-[#2761D9] text-lg md:text-5xl",
    },
  ];
  return(
    <div className="flex justify-center md:pb-10 pb-4">
        <TypewriterEffectSmooth words={words} cursorClassName="text-[#2761D9] h-6"/>
    </div>
  )
}
