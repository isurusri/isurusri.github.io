const links = [
    { label: 'GitHub', href: 'https://github.com/isurusri' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/isuru-abeykoon-sri1996/' },
    { label: 'Email', href: 'mailto:isuru.srimal258@gmail.com' },
];

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-end pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <p className="label rise" style={{ animationDelay: '.1s' }}>
                    Software Engineer — Backend, Cloud &amp; AI
                </p>
                <h1
                    className="rise font-display font-light tracking-tight leading-[0.95] mt-8 text-[clamp(3.5rem,11vw,9.5rem)]"
                    style={{ animationDelay: '.25s' }}
                >
                    Isuru
                    <br />
                    <em className="italic text-accent">Abeykoon</em>
                </h1>

                <div className="mt-16 pt-8 border-t border-rule grid md:grid-cols-12 gap-8">
                    <p
                        className="rise md:col-span-6 font-display text-xl md:text-2xl leading-snug"
                        style={{ animationDelay: '.5s' }}
                    >
                        I build scalable, intelligent and reliable software systems that turn complex
                        problems into dependable, real-world solutions.
                    </p>
                    <ul
                        className="rise md:col-start-10 md:col-span-3 space-y-2"
                        style={{ animationDelay: '.65s' }}
                    >
                        {links.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} className="link">
                                    {l.label} <span aria-hidden>↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
