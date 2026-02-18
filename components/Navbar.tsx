"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-zinc-950 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-6">

        {/* Nome */}
        <h1 className="font-bold text-white text-sm sm:text-base md:text-lg whitespace-nowrap">
          Henrique Belgrovicz Pivetti
        </h1>

        {/* Menu Desktop */}
        <div className="hidden md:flex ml-auto gap-6 text-zinc-400 text-sm">  
          <a href="#inicio" className="hover:text-white transition">Início</a>
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
          <a href="#projetos" className="hover:text-white transition">Projetos</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
        </div>

        {/* Direita */}
        <div className="flex items-center gap-4">

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 flex flex-col items-center gap-6 py-6 text-zinc-400 text-sm">
          <a href="#inicio" onClick={() => setOpen(false)} className="hover:text-white">Início</a>
          <a href="#sobre" onClick={() => setOpen(false)} className="hover:text-white">Sobre</a>
          <a href="#projetos" onClick={() => setOpen(false)} className="hover:text-white">Projetos</a>
          <a href="#skills" onClick={() => setOpen(false)} className="hover:text-white">Skills</a>
          <a href="#contato" onClick={() => setOpen(false)} className="hover:text-white">Contato</a>
        </div>
      )}
    </nav>
  );
}