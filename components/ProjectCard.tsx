type Props = {
    title: string;
    description: string;
    href: string;
    variant: "it" | "cyber" | "cloud" | "dev";
    tech?: string[];
  };
  
export default function ProjectCard({ title, description, href, variant, tech }: Props) {
  const styles = {
    it: "border-blue-600 hover:shadow-blue-500/20",
    cyber: "border-red-500 hover:shadow-red-500/20",
    cloud: "border-blue-400 hover:shadow-blue-400/20",
    dev: "border-green-400 hover:shadow-green-500/20",
  };

  return (
    <a
      href={href}
      className={`p-6 rounded-xl border transition hover:scale-[1.02] ${styles[variant]}`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>

      {tech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-neutral-800 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}