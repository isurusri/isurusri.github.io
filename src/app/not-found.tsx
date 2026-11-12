import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full pt-24">
                <p className="label">Error 404</p>
                <h1 className="font-display font-light tracking-tight leading-[0.95] mt-6 text-[clamp(3.5rem,11vw,8rem)]">
                    Page <em className="italic text-accent">not found</em>
                </h1>
                <p className="mt-8 text-muted max-w-md">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="link font-display text-xl mt-8 inline-block">
                    ← Back home
                </Link>
            </div>
        </div>
    );
}
