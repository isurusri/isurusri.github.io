'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import Image from 'next/image';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { name: 'Backend', icon: Code, description: 'Java, Spring Boot, Python' },
        { name: 'Frontend', icon: Palette, description: 'React, Next.js, TypeScript' },
        { name: 'AI', icon: Zap, description: 'AI Agents, Machine Learning' },
        { name: 'Performance', icon: Users, description: 'Optimization & Best Practices' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id="about" className="min-h-screen py-20 bg-primary-medium/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-16 flex flex-col justify-center min-h-screen"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-primary-accent mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                            <p className="text-lg text-primary-light/80 leading-relaxed">
                                Hi, I&apos;m Isuru Abeykoon - a software engineer passionate about building scalable, reliable, and AI-powered systems that solve real-world problems.
                                Over the past 5+ years, I&apos;ve worked across ERP, logistics, and enterprise platforms, designing microservices, cloud-native architectures,
                                and automation workflows that make businesses run smarter and faster.
                            </p>

                            <p className="text-lg text-primary-light/80 leading-relaxed">
                                What drives me is simple: writing clean, thoughtful code that empowers people and creates meaningful impact.
                                When I&apos;m not coding, you&apos;ll find me experimenting with new tech, learning about AI systems, or brainstorming ways technology can transform everyday life.
                            </p>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-4">
                                    {['Java', 'Spring Boot', 'Python', 'AI', 'AI Agents', 'AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Next.js', 'Node.js',].map((tech) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ delay: 0.5 }}
                                            className="bg-primary-accent/20 text-primary-accent px-4 py-2 rounded-full text-sm font-medium border border-primary-accent/30"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>

                        {/* Profile Picture */}
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary-accent/30 shadow-2xl"
                                >
                                    <Image
                                        src="/images/profile/profile-pic.jpeg"
                                        alt="Isuru Abeykoon Profile Picture"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                {/* Decorative elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-2 -right-2 w-6 h-6 border-2 border-primary-accent rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-primary-accent/60 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-primary-dark/50 p-6 rounded-xl border border-primary-medium/50 hover:border-primary-accent/50 transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-primary-accent/20 rounded-lg group-hover:bg-primary-accent/30 transition-colors duration-300">
                                        <skill.icon className="w-6 h-6 text-primary-accent" />
                                    </div>
                                    <h3 className="font-semibold text-primary-light text-sm">
                                        {skill.name}
                                    </h3>
                                    <p className="text-xs text-primary-light/60">
                                        {skill.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 md:pt-16">
                        {[
                            { number: '50+', label: 'Projects Completed' },
                            { number: '5+', label: 'Years Experience' },
                            { number: '100%', label: 'Client Satisfaction' },
                            { number: '24/7', label: 'Available' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary-accent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-primary-light/60 text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
