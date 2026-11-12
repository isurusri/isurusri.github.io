const links = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    return (
        <header className="fixed top-0 inset-x-0 z-40 bg-paper/85 backdrop-blur border-b border-rule">
            <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <a href="#home" className="font-display text-lg tracking-tight">
                    Isuru Abeykoon
                </a>
                <ul className="flex items-center gap-6 sm:gap-8">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="label link hover:text-accent">
                                {l.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
