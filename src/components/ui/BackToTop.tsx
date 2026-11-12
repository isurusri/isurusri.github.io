'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            type="button"
            aria-label="Back to top"
            tabIndex={visible ? 0 : -1}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed z-40 right-5 bottom-5 sm:right-8 sm:bottom-8 w-12 h-12 flex items-center justify-center rounded-full border border-rule bg-paper/90 backdrop-blur text-ink hover:bg-accent hover:text-paper hover:border-accent transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 20V4M5 11l7-7 7 7" />
            </svg>
        </button>
    );
}
