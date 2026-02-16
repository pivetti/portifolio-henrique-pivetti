export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-zinc-950 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-white">
          Henrique Belgrovicz Pivetti
        </h1>

        <div className="flex gap-6 text-zinc-400 text-sm">
          <a href="#inicio" className="hover:text-white transition">
            Início
          </a>
          <a href="#sobre" className="hover:text-white transition">
            Sobre
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projetos" className="hover:text-white transition">
            Projetos
          </a>
          <a href="#contato" className="hover:text-white transition">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
