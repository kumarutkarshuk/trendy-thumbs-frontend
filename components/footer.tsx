import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import { portfolioUrl } from "@/lib/consts";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-end md:mr-12 mr-6 items-center gap-4 mt-20">
        <p className="text-xs md:text-base">
          Developed by
        </p>
        <Link 
        target="_blank"
        rel="noopener noreferrer"
        href={portfolioUrl}
        >
          <RainbowButton className="md:text-base text-xs px-4">Utkarsh Kumar</RainbowButton>
        </Link>
      </div>
    </footer>
  );
}
