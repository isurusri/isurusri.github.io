'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-md mx-auto"
            >
                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mb-8"
                >
                    <h1 className="text-9xl font-bold text-primary-accent">404</h1>
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-bold text-primary-light mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-primary-light/70 text-lg">
                        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 bg-primary-accent hover:bg-primary-accent/90 text-primary-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <Home size={20} />
                        <span>Go Home</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center space-x-2 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-primary-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        <ArrowLeft size={20} />
                        <span>Go Back</span>
                    </button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-12"
                >
                    <div className="w-24 h-1 bg-primary-accent mx-auto rounded-full" />
                </motion.div>
            </motion.div>
        </div>
    );
}
