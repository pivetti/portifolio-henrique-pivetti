type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
}: Project) {
  return (
    <div className="
      bg-zinc-900 border border-zinc-800
      rounded-xl p-6 flex flex-col justify-between
      transition-all duration-300 ease-out
      hover:border-zinc-600
      hover:-translate-y-1
      hover:shadow-lg hover:shadow-black/30
    ">
      
      <div>
        <h3 className="text-xl font-semibold mb-3 text-white">
          {title}
        </h3>

        <p className="text-zinc-400 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                text-xs bg-zinc-800 px-3 py-1
                rounded-full text-zinc-300
                transition hover:bg-zinc-700
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white text-black text-sm font-medium
          py-2 rounded-lg text-center
          transition-all duration-200 ease-out
          hover:bg-zinc-200
          hover:-translate-y-1
          hover:shadow-lg hover:shadow-white/20
          active:scale-95 active:translate-y-0.5
        "
      >
        Ver no GitHub
      </a>
    </div>
  );
}
