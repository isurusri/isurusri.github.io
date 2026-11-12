import Reveal from '@/components/ui/Reveal';

type Project = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
};

const projects: Project[] = [
    {
        title: 'Resume Management AI',
        description:
            'A privacy-focused, AI-powered document question-answering system that runs entirely on your local machine. Built with Ollama, LangChain, ChromaDB and Streamlit for secure, offline document analysis.',
        tech: ['LLM', 'RAG', 'Vector DB', 'Streamlit'],
        github: 'https://github.com/isurusri/Resume-Management-AI',
    },
    {
        title: 'Spring Boot Microservices with Docker',
        description:
            'A sample project demonstrating how to build a Spring Boot microservice backed by a MySQL database running in a Docker container.',
        tech: ['Java', 'Spring Boot', 'Docker', 'MySQL'],
        github: 'https://github.com/isurusri/Spring-Boot-Microservices-',
    },
    {
        title: 'Monopoly Tracker',
        description: 'A responsive Monopoly tracker with real-time updates and detailed analytics.',
        tech: ['React', 'TypeScript', 'Vite'],
        github: 'https://github.com/isurusri/monopolytracker',
        live: 'https://www.sricode.com/monopolytracker/',
    },
    {
        title: 'Portfolio Website',
        description: 'This site — a static, responsive portfolio built with Next.js and Tailwind CSS.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        github: 'https://github.com/isurusri/isurusri.github.io',
        live: 'https://www.sricode.com',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-28 border-t border-rule">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-x-8 gap-y-12">
                <Reveal className="md:col-span-3">
                    <p className="label">02 — Selected work</p>
                </Reveal>

                <div className="md:col-span-9">
                    <ol className="border-t border-rule">
                        {projects.map((p, i) => (
                            <li key={p.title}>
                                <Reveal>
                                    <article className="group grid sm:grid-cols-[3rem_1fr] gap-x-4 py-10 border-b border-rule">
                                        <span className="label pt-2">{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-2 group-hover:text-accent">
                                                {p.title}
                                            </h3>
                                            <p className="mt-4 text-muted max-w-2xl">{p.description}</p>
                                            <p className="label mt-5">{p.tech.join('  ·  ')}</p>
                                            <p className="mt-5 flex gap-6">
                                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="link">
                                                    Source ↗
                                                </a>
                                                {p.live && (
                                                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="link">
                                                        Live ↗
                                                    </a>
                                                )}
                                            </p>
                                        </div>
                                    </article>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                    <Reveal className="mt-10">
                        <a href="https://github.com/isurusri" target="_blank" rel="noopener noreferrer" className="link font-display text-xl">
                            All projects on GitHub ↗
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
