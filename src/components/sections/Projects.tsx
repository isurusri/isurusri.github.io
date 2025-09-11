'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: 'Resume Management AI',
            description: 'A privacy-focused, AI-powered document question-answering system that runs entirely on your local machine. Built with Ollama, LangChain, ChromaDB, and Streamlit for secure, offline document analysis.',
            image: '/images/projects/resume-ai.svg',
            technologies: ['LLM', 'RAG framework', 'Vector DB', 'Streamlit'],
            github: 'https://github.com/isurusri/Resume-Management-AI',
            live: '#',
            featured: true,
        },
        {
            title: 'Spring Boot Microservices with Docker',
            description: 'This is a sample project to demonstrate how to create a Spring Boot Microservice with a MySQL database instance running in a Docker container.',
            image: '/images/projects/spring-microservices.svg',
            technologies: ['Java', 'Spring Boot', 'Docker', 'MySQL'],
            github: 'https://github.com/isurusri/Spring-Boot-Microservices-',
            live: '#',
            featured: true,
        },
        {
            title: 'Monopoly Tracker',
            description: 'A responsive Monopoly tracker with real-time updates and detailed analytics.',
            image: '/images/projects/monopoly-tracker.svg',
            technologies: ['React', 'TypeScript', 'Vite'],
            github: 'https://github.com/isurusri/monopolytracker',
            live: 'https://www.sricode.com/monopolytracker/',
            featured: false,
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
            image: '/images/projects/portfolio-website.svg',
            technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
            github: 'https://github.com/isurusri/isurusri.github.io',
            live: 'https://www.sricode.com',
            featured: false,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
        },
    };

    const projectVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
        },
    };

    return (
        <section id="projects" className="min-h-screen py-20 bg-primary-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1 bg-primary-accent mx-auto rounded-full" />
                        <p className="text-primary-light/60 mt-6 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
                        </p>
                    </motion.div>

                    {/* Featured Projects */}
                    <div className="space-y-20">
                        {projects.filter(project => project.featured).map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={projectVariants}
                                whileHover={{ y: -5 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                    }`}
                            >
                                {/* Project Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                >
                                    <div className="relative overflow-hidden rounded-xl bg-primary-medium/50">
                                        <div className="aspect-video relative">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-primary-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="flex space-x-4">
                                                <motion.a
                                                    href={project.github}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-primary-dark/80 rounded-full text-primary-light hover:text-primary-accent transition-colors duration-300"
                                                >
                                                    <Github size={20} />
                                                </motion.a>
                                                <motion.a
                                                    href={project.live}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-primary-dark/80 rounded-full text-primary-light hover:text-primary-accent transition-colors duration-300"
                                                >
                                                    <ExternalLink size={20} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Project Content */}
                                <motion.div
                                    className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                                >
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-primary-light mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-primary-light/80 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary-accent/20 text-primary-accent text-sm rounded-full border border-primary-accent/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 text-primary-accent hover:text-primary-light transition-colors duration-300"
                                        >
                                            <Github size={18} />
                                            <span>Code</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 text-primary-accent hover:text-primary-light transition-colors duration-300"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects Grid */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <h3 className="text-2xl font-bold text-primary-light text-center">
                            Other Projects
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.filter(project => !project.featured).map((project) => (
                                <motion.div
                                    key={project.title}
                                    whileHover={{ y: -5 }}
                                    className="bg-primary-medium/30 p-6 rounded-xl border border-primary-medium/50 hover:border-primary-accent/50 transition-all duration-300 group"
                                >
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-xl font-semibold text-primary-light group-hover:text-primary-accent transition-colors duration-300">
                                                {project.title}
                                            </h4>
                                            <div className="flex space-x-2">
                                                <motion.a
                                                    href={project.github}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-primary-light/60 hover:text-primary-accent transition-colors duration-300"
                                                >
                                                    <Github size={18} />
                                                </motion.a>
                                                <motion.a
                                                    href={project.live}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-primary-light/60 hover:text-primary-accent transition-colors duration-300"
                                                >
                                                    <ExternalLink size={18} />
                                                </motion.a>
                                            </div>
                                        </div>
                                        <p className="text-primary-light/70 text-sm">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-primary-accent/20 text-primary-accent text-xs rounded border border-primary-accent/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* View More Button */}
                    <motion.div variants={itemVariants} className="text-center">
                        <motion.a
                            href="https://github.com/isurusri"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 bg-primary-accent hover:bg-primary-accent/90 text-primary-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span>View All Projects</span>
                            <ArrowRight size={18} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
