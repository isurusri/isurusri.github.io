'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/isurusri', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/isuru-abeykoon-sri1996/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:isuru.srimal258@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-primary-dark border-t border-primary-medium/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-light">Isuru Abeykoon</h3>
                        <p className="text-primary-light/60 text-sm max-w-md">
                            Turning complex systems into elegant solutions.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-primary-light/60 hover:text-primary-accent transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Back to Top */}
                    <div className="flex justify-end">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-primary-accent/20 hover:bg-primary-accent/30 text-primary-accent rounded-full transition-all duration-300"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

