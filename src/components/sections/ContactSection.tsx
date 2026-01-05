'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, Loader2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Form schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'anmolmalviya4328@gmail.com', href: 'mailto:anmolmalviya4328@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/anmol0706', href: 'https://github.com/anmol0706' },
    { icon: MapPin, label: 'Location', value: 'India', href: null },
];

const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/anmol0706' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/anmol-malviya27/' },

    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/anmol_20_7_/?hl=en' },
];

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form data:', data);
        setIsSubmitting(false);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="relative py-24 sm:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
                <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Let&apos;s Work
                        <span className="gradient-text"> Together</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                        >
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="flex items-center gap-4 p-4 rounded-xl glass border border-border hover:border-primary/50 transition-all group"
                                                >
                                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                        <item.icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-4 p-4 rounded-xl glass border border-border">
                                                    <div className="p-3 rounded-lg bg-primary/10">
                                                        <item.icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                                        <p className="font-medium text-foreground">{item.value}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 rounded-xl glass border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="lg:col-span-3"
                        >
                            <div className="p-6 sm:p-8 rounded-2xl glass border border-border">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-foreground">
                                                Your Name
                                            </Label>
                                            <Input
                                                id="name"
                                                {...register('name')}
                                                placeholder="John Doe"
                                                className="bg-muted/50 border-border focus:border-primary/50 rounded-xl h-12"
                                            />
                                            {errors.name && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-destructive"
                                                >
                                                    {errors.name.message}
                                                </motion.p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-foreground">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                {...register('email')}
                                                placeholder="john@example.com"
                                                className="bg-muted/50 border-border focus:border-primary/50 rounded-xl h-12"
                                            />
                                            {errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-destructive"
                                                >
                                                    {errors.email.message}
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-foreground">
                                            Subject
                                        </Label>
                                        <Input
                                            id="subject"
                                            {...register('subject')}
                                            placeholder="Project Inquiry"
                                            className="bg-muted/50 border-border focus:border-primary/50 rounded-xl h-12"
                                        />
                                        {errors.subject && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-sm text-destructive"
                                            >
                                                {errors.subject.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-foreground">
                                            Your Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            {...register('message')}
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            className="bg-muted/50 border-border focus:border-primary/50 rounded-xl resize-none"
                                        />
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-sm text-destructive"
                                            >
                                                {errors.message.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting || isSubmitted}
                                            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : isSubmitted ? (
                                                <>
                                                    <CheckCircle className="w-5 h-5 mr-2" />
                                                    Message Sent!
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
