'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
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

    const contactInfo = [
        { label: 'Email', value: 'isuru.srimal258@gmail.com', href: 'mailto:isuru.srimal258@gmail.com' },
        { label: 'Location', value: 'Leicester, UK', href: 'https://www.google.com/maps/place/Leicester,+UK' },
        { label: 'GitHub', value: 'github.com/isurusri', href: 'https://github.com/isurusri' },
        { label: 'LinkedIn', value: 'isuru-abeykoon-sri1996', href: 'https://www.linkedin.com/in/isuru-abeykoon-sri1996/' },
        { label: 'Instagram', value: '@isuru_abeykoon', href: 'https://instagram.com/isuru_abeykoon/' },
    ];

    const field =
        'w-full bg-transparent border-0 border-b border-rule py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors';

    return (
        <section id="contact" className="py-20 md:py-28 border-t border-rule">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-x-8 gap-y-12">
                <Reveal className="md:col-span-3">
                    <p className="label">03 — Contact</p>
                </Reveal>

                <div className="md:col-span-9 space-y-20">
                    <Reveal>
                        <h2 className="font-display font-light text-5xl md:text-7xl tracking-tight leading-[1]">
                            Have a project in mind?
                            <br />
                            <em className="italic text-accent">Let&apos;s talk.</em>
                        </h2>
                    </Reveal>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <Reveal>
                            <dl className="border-t border-rule">
                                {contactInfo.map((c) => (
                                    <div key={c.label} className="py-4 border-b border-rule">
                                        <dt className="label">{c.label}</dt>
                                        <dd>
                                            <a href={c.href} className="link break-all">{c.value}</a>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>

                        <Reveal delay={0.1}>
                            {submitStatus === 'success' && (
                                <p role="status" className="mb-6 border-l-2 border-accent pl-4">
                                    {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID === 'your_service_id'
                                        ? 'Opening your email client with the message ready to send.'
                                        : "Message sent — I'll get back to you soon."}
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p role="alert" className="mb-6 border-l-2 border-accent pl-4">
                                    Failed to send message. {errorMessage}
                                </p>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="label">Name</label>
                                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className={field} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="label">Email</label>
                                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className={field} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="label">Subject</label>
                                    <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} className={field} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="label">Message</label>
                                    <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleInputChange} className={`${field} resize-none`} />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-ink text-paper px-8 py-3 label !text-paper hover:bg-accent transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending…' : 'Send message →'}
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
