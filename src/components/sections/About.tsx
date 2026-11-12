import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

const disciplines = [
    { name: 'Backend', detail: 'Java, Spring Boot, Python' },
    { name: 'Frontend', detail: 'React, Next.js, TypeScript' },
    { name: 'AI', detail: 'AI agents, machine learning' },
    { name: 'Performance', detail: 'Optimisation & best practice' },
];

const stack = ['Java', 'Spring Boot', 'Python', 'AI Agents', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Next.js', 'Node.js', 'Git'];

export default function About() {
    return (
        <section id="about" className="py-28 border-t border-rule">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-x-8 gap-y-12">
                <Reveal className="md:col-span-3">
                    <p className="label">01 — About</p>
                </Reveal>

                <div className="md:col-span-9 space-y-16">
                    <Reveal>
                        <div className="grid lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2 space-y-6 font-display text-xl md:text-2xl leading-snug">
                                <p>
                                    I&apos;m a software engineer focused on building scalable, reliable and
                                    AI-powered systems that solve real problems.
                                </p>
                                <p className="text-muted">
                                    Over five years I&apos;ve worked across ERP, logistics and enterprise
                                    platforms — designing microservices, cloud-native architectures and
                                    automation workflows that help businesses run smarter and faster.
                                </p>
                                <p className="text-muted">
                                    I care about clean, thoughtful code that creates meaningful impact.
                                    Outside of work I&apos;m usually exploring new technology and AI systems.
                                </p>
                            </div>
                            <div className="relative aspect-square w-full max-w-[16rem] mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-full border border-rule grayscale contrast-105">
                                <Image
                                    src="/images/profile/profile-pic.jpeg"
                                    alt="Portrait of Isuru Abeykoon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <dl className="border-t border-rule">
                            {disciplines.map((d) => (
                                <div
                                    key={d.name}
                                    className="grid sm:grid-cols-3 gap-1 sm:gap-8 py-4 border-b border-rule"
                                >
                                    <dt className="font-display text-xl">{d.name}</dt>
                                    <dd className="sm:col-span-2 text-muted">{d.detail}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>

                    <Reveal>
                        <p className="label mb-4">Tools</p>
                        <p className="text-muted leading-loose">
                            {stack.map((s, i) => (
                                <span key={s}>
                                    <span className="text-ink">{s}</span>
                                    {i < stack.length - 1 && <span className="mx-3 text-rule">/</span>}
                                </span>
                            ))}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
