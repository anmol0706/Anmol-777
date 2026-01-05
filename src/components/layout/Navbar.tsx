'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/anmol0706', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/anmol-malviya', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:anmol0706@gmail.com', label: 'Email' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-3 glass'
                    : 'py-5 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#home" className="flex items-center gap-2 group">
                                <div className="relative">
                                    <Code2 className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-xl font-bold gradient-text hidden sm:inline">
                                    DevPortfolio
                                </span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.replace('#', '')
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.href.replace('#', '') && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social Links & CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Button
                                    onClick={() => handleNavClick('#contact')}
                                    className="bg-primary hover:bg-primary/80 text-primary-foreground glow-primary"
                                >
                                    Let&apos;s Talk
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-background/80 backdrop-blur-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass border-l border-border p-6 pt-24"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`px-4 py-3 text-left text-lg font-medium rounded-lg transition-all ${activeSection === item.href.replace('#', '')
                                            ? 'text-primary bg-primary/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                            }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <div className="flex items-center gap-4 justify-center">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                                <Button
                                    onClick={() => handleNavClick('#contact')}
                                    className="w-full mt-6 bg-primary hover:bg-primary/80"
                                >
                                    Let&apos;s Talk
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
