'use client';

import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Mail, ArrowUp, Instagram } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
    navigation: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Certificates', href: '#certificates' },
        { label: 'Contact', href: '#contact' },
    ],
    social: [
        { icon: Github, href: 'https://github.com/anmol0706', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/anmol-malviya27/', label: 'LinkedIn' },

        { icon: Instagram, href: 'https://www.instagram.com/anmol_20_7_/?hl=en', label: 'Instagram' },
        { icon: Mail, href: 'mailto:anmolmalviya4328@gmail.com', label: 'Email' },
    ],
};

export function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 overflow-hidden border-t border-border bg-background/50 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <Link href="#home" className="flex items-center gap-2 group">
                        <Code2 className="w-6 h-6 text-primary" />
                        <span className="text-lg font-bold gradient-text">Anmol Malviya</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6">
                        {footerLinks.navigation.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Socials & Actions */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-full border border-border">
                            {footerLinks.social.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full hover:bg-background hover:text-primary text-muted-foreground transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                        <motion.button
                            onClick={handleScrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>

                {/* Minimal Bottom Line */}
                <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {currentYear} Anmol Malviya. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
