'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        // Clear error message when user starts typing
        if (submitStatus === 'error') {
            setSubmitStatus('idle');
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // EmailJS configuration - you'll need to replace these with your actual values
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

            // Check if EmailJS is properly configured
            if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
                // Fallback to mailto if EmailJS is not configured
                const subject = encodeURIComponent(formData.subject);
                const body = encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                );
                window.open(`mailto:isuru.srimal258@gmail.com?subject=${subject}&body=${body}`);
                
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                return;
            }

            // Send email using EmailJS
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Isuru Abeykoon',
                },
                publicKey
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                throw new Error(`EmailJS returned status: ${result.status}`);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Check for Gmail API errors and provide fallback
            let errorMsg = 'Failed to send message. Please try again or contact me directly.';
            let shouldFallback = false;
            
            if (error instanceof Error) {
                errorMsg = error.message;
                // Check for Gmail API specific errors
                if (error.message.includes('Gmail_API') || error.message.includes('Invalid grant')) {
                    shouldFallback = true;
                    errorMsg = 'Email service temporarily unavailable. Opening your email client instead...';
                }
            } else if (typeof error === 'string') {
                errorMsg = error;
                if (error.includes('Gmail_API') || error.includes('Invalid grant')) {
                    shouldFallback = true;
                    errorMsg = 'Email service temporarily unavailable. Opening your email client instead...';
                }
            } else if (error && typeof error === 'object') {
                // Handle EmailJS specific errors
                if ('text' in error && typeof error.text === 'string') {
                    errorMsg = `EmailJS Error: ${error.text}`;
                    if (error.text.includes('Gmail_API') || error.text.includes('Invalid grant')) {
                        shouldFallback = true;
                        errorMsg = 'Email service temporarily unavailable. Opening your email client instead...';
                    }
                } else if ('status' in error) {
                    errorMsg = `EmailJS Error: Status ${error.status}`;
                }
            }
            
            // If Gmail API error, automatically fallback to mailto
            if (shouldFallback) {
                const subject = encodeURIComponent(formData.subject);
                const body = encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                );
                window.open(`mailto:isuru.srimal258@gmail.com?subject=${subject}&body=${body}`);
                
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                return;
            }
            
            setSubmitStatus('error');
            setErrorMessage(errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

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

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'isuru.srimal258@gmail.com',
            href: 'mailto:isuru.srimal258@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+44 786 876 9521',
            href: 'tel:+447868769521',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Leicester, UK',
            href: 'https://www.google.com/maps/place/Leicester,+UK/@52.6346011,-1.1315921,12z/data=!3m1!4b1!4m6!3m5!1s0x4877c656e41426e5:0x62253d0c615c3550!8m2!3d52.6346011!4d-1.1315921!16s%2Fg%2F11h7z281w2?entry=ttu&g_ep=EgoyMDI1MDkxMS4wIKXMDSoASAFQAw%3D%3D',
        },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/isurusri', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/isuru-abeykoon-sri1996/', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com/isuru_abeykoon/', label: 'Instagram' },
    ];

    return (
        <section id="contact" className="min-h-screen py-20 bg-primary-medium/30">
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
                            Get In Touch
                        </h2>
                        <div className="w-24 h-1 bg-primary-accent mx-auto rounded-full" />
                        <p className="text-primary-light/60 mt-6 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                            Let&apos;s create something amazing together.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-primary-light mb-6">
                                    Let&apos;s Connect
                                </h3>
                                <p className="text-primary-light/80 leading-relaxed mb-8">
                                    I&apos;m always interested in new opportunities and exciting projects.
                                    Whether you have a question or just want to say hi, I&apos;ll try my best
                                    to get back to you!
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="flex items-center space-x-4 p-4 bg-primary-dark/50 rounded-lg hover:bg-primary-dark/70 transition-all duration-300 group"
                                    >
                                        <div className="p-3 bg-primary-accent/20 rounded-lg group-hover:bg-primary-accent/30 transition-colors duration-300">
                                            <info.icon className="w-5 h-5 text-primary-accent" />
                                        </div>
                                        <div>
                                            <p className="text-primary-light/60 text-sm">{info.label}</p>
                                            <p className="text-primary-light font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="pt-8">
                                <h4 className="text-lg font-semibold text-primary-light mb-4">
                                    Follow Me
                                </h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-primary-dark/50 rounded-lg text-primary-light hover:text-primary-accent transition-colors duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <div>
                                        <p className="text-green-500 font-medium">
                                            {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === 'your_service_id' 
                                                ? 'Opening your email client...' 
                                                : 'Message sent successfully! I\'ll get back to you soon.'
                                            }
                                        </p>
                                        {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === 'your_service_id' && (
                                            <p className="text-green-400 text-sm mt-1">
                                                Your default email app should open with the message ready to send.
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                    <div>
                                        <p className="text-red-500 font-medium">Failed to send message</p>
                                        <p className="text-red-400 text-sm mt-1">{errorMessage}</p>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-primary-light mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-medium/50 rounded-lg text-primary-light placeholder-primary-light/40 focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary-light mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-medium/50 rounded-lg text-primary-light placeholder-primary-light/40 focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-primary-light mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-medium/50 rounded-lg text-primary-light placeholder-primary-light/40 focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary-light mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-medium/50 rounded-lg text-primary-light placeholder-primary-light/40 focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
                                        isSubmitting
                                            ? 'bg-primary-accent/50 text-primary-dark/50 cursor-not-allowed'
                                            : 'bg-primary-accent hover:bg-primary-accent/90 text-primary-dark hover:shadow-xl'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;