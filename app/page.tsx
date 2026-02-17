import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { SocialIcons } from "@/components/SocialIcons";


export default function Home() {
  return (
    <main className="pt-24">

      {/* INÍCIO */}
      <section id="inicio" className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Henrique Belgrovicz Pivetti
        </h1>

        <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
          Desenvolvedor Back-end
        </p>
        <SocialIcons />
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
      >
        <h2 className="text-4xl font-bold mb-8">Sobre</h2>

        <div className="space-y-6 text-zinc-400 text-lg max-w-3xl leading-relaxed">
          <p>
            Sou um desenvolvedor back-end com experiência em Java no
            desenvolvimento de aplicações desktop com persistência de dados
            utilizando JDBC e SQL. No momento, dedico meus estudos ao desenvolvimento web 
            com Spring Boot, buscando o domínio na construção de APIs RESTful e soluções preparadas 
            para alta escalabilidade.
            Cursando Sistemas de Informação no IFPR (Instituto
            Federal do Paraná) – Campus Palmas, pelo 5º período, busco constantemente evolução
            técnica além da grade curricular. Faço parte de um projeto de
            pesquisa em Big Data e Analytics e participante ativo do Clube de
            Programação, onde desenvolvo raciocínio lógico e habilidades em
            resolução de problemas voltadas para maratonas de programação.
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800">
        <h2 className="text-4xl font-bold mb-12">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
      >
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-zinc-400">

          {/* Linguagens */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Linguagens de Programação
            </h3>
            <ul className="space-y-2">
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Desenvolvimento Web */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Desenvolvimento Web
            </h3>
            <ul className="space-y-2">
              <li>Spring Boot</li>
              <li>APIs REST</li>
            </ul>
          </div>

          {/* Desenvolvimento Desktop */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Desenvolvimento Desktop
            </h3>
            <ul className="space-y-2">
              <li>Java Swing</li>
              <li>Aplicações com persistência via JDBC</li>
            </ul>
          </div>

          {/* Banco de dados */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Banco de Dados
            </h3>
            <ul className="space-y-2">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Modelagem de Dados (BrModelo)</li>
            </ul>
          </div>

          {/* Estruturas */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Estruturas de Dados e Algoritmos
            </h3>
            <ul className="space-y-2">
              <li>Listas, Filas, Pilhas</li>
              <li>Árvores, Grafos, Tries</li>
              <li>Algoritmos de ordenação e busca</li>
            </ul>
          </div>

          {/* Paradigmas */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Paradigmas e Arquitetura
            </h3>
            <ul className="space-y-2">
              <li>Programação Orientada a Objetos (POO)</li>
              <li>MVC (Model-View-Controller)</li>
            </ul>
          </div>

          {/* Versionamento */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Versionamento e Colaboração
            </h3>
            <ul className="space-y-2">
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Ferramentas
            </h3>
            <ul className="space-y-2">
              <li>Docker</li>
              <li>Postman</li>
              <li>VSCode</li>
              <li>NetBeans</li>
              <li>Microsoft Office</li>
            </ul>
          </div>

          {/* Idiomas */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Idiomas
            </h3>
            <ul className="space-y-2">
              <li>Português: Nativo</li>
              <li>Inglês: Leitura e Interpretação Técnica</li>
            </ul>
          </div>

        </div>
      </section>


      {/* CONTATO */}
      <section id="contato" className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Título */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Entre em contato
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Estou disponível para novos projetos, colaborações e oportunidades.
            Se você tem uma proposta, ideia ou precisa de ajuda técnica, entre em contato.
          </p>
        </div>


          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORMULÁRIO */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Envie sua mensagem
              </h3>
              <ContactForm />
            </div>

            {/* INFORMAÇÕES DE CONTATO */}
            <div className="space-y-8">

              <div className="flex gap-4 items-start bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Email</p>
                  <p className="text-white">henriquepivettidev@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  💬
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">WhatsApp</p>
                  <p className="text-white">(46) 99989-2777</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Localização</p>
                  <p className="text-white">Clevelândia, Paraná - Brasil</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <p className="text-sm text-zinc-500 mb-2">
                  Horário de resposta
                </p>
                <p className="text-white">
                  Todos os dias - 07h às 01h
                </p>
                <p className="text-zinc-500 text-sm mt-2">
                  Tempo de resposta em até 1 hora.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


    </main>
  );
}