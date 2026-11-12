export default function Footer() {
    return (
        <footer className="border-t border-rule">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-2 justify-between">
                <p className="label">© {new Date().getFullYear()} Isuru Abeykoon</p>
                <p className="label">Leicester, United Kingdom</p>
            </div>
        </footer>
    );
}
