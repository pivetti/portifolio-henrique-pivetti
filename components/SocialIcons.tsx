import { SiGithub, SiLinkedin, SiInstagram, SiDiscord } from "react-icons/si";
import { Mail } from "lucide-react";
import Bee from "@/components/icons/bee.svg";

export function SocialIcons() {
  const baseStyle = `
    w-14 h-14 flex items-center justify-center
    border border-zinc-800 bg-zinc-900/50
    rounded-xl hover:border-blue-500
    hover:text-blue-400 hover:-translate-y-1
    transition-all duration-300
  `;

  return (
    <div className="flex gap-6 mt-10 flex-wrap">

      <a
        href="https://github.com/pivetti"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiGithub size={22} />
      </a>

      <a
        href="https://linkedin.com/in/henriquepivetti"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiLinkedin size={22} />
      </a>

      <a href="#contato" className={baseStyle}>
        <Mail size={22} />
      </a>

      <a
        href="https://instagram.com/_pivetti"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiInstagram size={22} />
      </a>

      <a
        href="https://discord.com/users/SEU_ID_NUMERICO"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiDiscord size={22} />
      </a>

    </div>
  );
}
