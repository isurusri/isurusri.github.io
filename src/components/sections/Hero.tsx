'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const scrollToNext = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-dark" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large circular orb */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-20 w-32 h-32 bg-primary-accent/20 rounded-full blur-xl"
                />

                {/* Medium circular orb */}
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-20 w-40 h-40 bg-primary-light/10 rounded-full blur-xl"
                />

                {/* Square orb */}
                <motion.div
                    animate={{
                        x: [0, 150, -80, 0],
                        y: [0, -80, 150, 0],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary-medium/25 rounded-lg blur-lg"
                />

                {/* Triangle-like shape */}
                <motion.div
                    animate={{
                        x: [0, -120, 60, 0],
                        y: [0, 120, -60, 0],
                        rotate: [0, 120, 240, 360],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary-accent/15 transform rotate-45 blur-lg"
                />

                {/* Small circular orb */}
                <motion.div
                    animate={{
                        x: [0, 200, -100, 0],
                        y: [0, -200, 100, 0],
                        scale: [1, 1.5, 0.8, 1],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/2 w-16 h-16 bg-primary-light/20 rounded-full blur-md"
                />

                {/* Diamond shape */}
                <motion.div
                    animate={{
                        x: [0, 80, -160, 0],
                        y: [0, -160, 80, 0],
                        rotate: [0, 45, 90, 135, 180],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/3 w-18 h-18 bg-primary-medium/20 transform rotate-45 blur-lg"
                />

                {/* Hexagon-like shape */}
                <motion.div
                    animate={{
                        x: [0, -150, 75, 0],
                        y: [0, 75, -150, 0],
                        rotate: [0, 60, 120, 180, 240, 300, 360],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/4 w-22 h-22 bg-primary-accent/10 rounded-lg blur-xl"
                />

                {/* Oval shape */}
                <motion.div
                    animate={{
                        x: [0, 120, -60, 0],
                        y: [0, -60, 120, 0],
                        scaleX: [1, 1.3, 0.7, 1],
                        scaleY: [1, 0.7, 1.3, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/2 right-1/5 w-28 h-16 bg-primary-light/15 rounded-full blur-lg"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-primary-accent text-lg md:text-xl font-medium"
                    >
                        Hello, I&apos;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-light"
                    >
                        <span className="block">Isuru Abeykoon</span>
                        <span className="block text-primary-accent">Developer</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg md:text-xl text-primary-light/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        I build scalable, intelligent, and reliable software systems that transform complex challenges into impactful, real-world solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary-accent hover:bg-primary-accent/90 text-primary-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-primary-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                        >
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-2 h-2 bg-green-500 rounded-full"
                            />
                            <span>Get In Touch</span>
                        </motion.button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="flex justify-center space-x-6 pt-8"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/isurusri', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/isuru-abeykoon-sri1996/', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:isuru.srimal258@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-primary-light hover:text-primary-accent transition-colors duration-300"
                                aria-label={label}
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-light hover:text-primary-accent transition-colors duration-300"
                aria-label="Scroll to next section"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;
