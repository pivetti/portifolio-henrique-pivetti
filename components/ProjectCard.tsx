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
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-600 transition">
      
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
              className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={github}
        target="_blank"
        className="bg-white text-black text-sm font-medium py-2 rounded-lg text-center hover:opacity-90 transition"
      >
        Ver no GitHub
      </a>
    </div>
  );
}
