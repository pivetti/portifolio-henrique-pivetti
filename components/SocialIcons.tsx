import { SiGithub, SiLinkedin, SiInstagram, SiDiscord } from "react-icons/si";
import { Mail } from "lucide-react";


export function SocialIcons() {
  const baseStyle = `
    w-12 h-12 md:w-14 md:h-14
    flex items-center justify-center
    border border-zinc-800 bg-zinc-900/50
    rounded-xl
    transition-all duration-200 ease-out
    hover:border-blue-500
    hover:text-blue-400
    hover:-translate-y-1.5
    hover:scale-105
    hover:shadow-lg hover:shadow-blue-500/20
    active:scale-95
    active:translate-y-0.5
  `;


  return (
    <div className="flex justify-center md:justify-start gap-4 md:gap-6 mt-10 flex-wrap">

      <a
        href="https://github.com/pivetti"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiGithub size={20} />
      </a>

      <a
        href="https://linkedin.com/in/henriquepivetti"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiLinkedin size={20} />
      </a>

      <a href="#contato" className={baseStyle}>
        <Mail size={20} />
      </a>

      <a
        href="https://instagram.com/_pivetti"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiInstagram size={20} />
      </a>

      <a
        href="https://discord.com/users/SEU_ID_NUMERICO"
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <SiDiscord size={20} />
      </a>

    </div>
  );
}
