'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Zap, Heart, Coffee, Globe, Terminal, Sparkles, User, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/data/portfolio';

const highlights = [
    {
        icon: Code2,
        label: 'Clean Code',
        description: 'Architecting robust, maintainable systems with focus on scalability.',
        color: 'text-primary'
    },
    {
        icon: Palette,
        label: 'UI/UX Design',
        description: 'Pixel-perfect implementations with smooth, intuitive user flows.',
        color: 'text-secondary'
    },
    {
        icon: Zap,
        label: 'Performance',
        description: 'Optimizing for Core Web Vitals and lightning-fast interactions.',
        color: 'text-teal-400'
    },
    {
        icon: Heart,
        label: 'Continuous Learning',
        description: 'Constant exploration of emerging tech and industry best practices.',
        color: 'text-pink-400'
    },
];

const stats = [
    { value: '15+', label: 'Live Projects' },
    { value: '25+', label: 'Public Repos' },
    { value: '400+', label: 'Commits' },
    { value: '100%', label: 'Commitment' },
];

export function AboutSection() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-24 sm:py-32 md:py-48 overflow-hidden bg-background/50"
        >
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, oklch(0.7 0.25 265) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.7 0.25 265) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* Large Decorative Text */}
            <motion.div
                style={{ y, rotate, opacity: 0.03 }}
                className="absolute top-20 left-0 text-[15rem] font-black pointer-events-none select-none whitespace-nowrap hidden lg:block"
            >
                CRAFTING EXPERIENCE
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    {/* Header with Modern Hierarchy */}
                    <div className="mb-24 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div variants={itemVariants} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 w-fit">
                            <User className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Profile Insights</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Merging <span className="gradient-text italic">Vision</span> <br />
                            with Technical <span className="gradient-text italic">Acumen</span>.
                        </motion.h2>
                    </div>

                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
                        {/* Interactive Bio & Visual Piece */}
                        <div className="space-y-12">
                            <motion.div variants={itemVariants} className="relative group">
                                {/* Visual Decoration */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Profile Badge - Now above the image for better visibility */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-6 p-5 rounded-2xl glass border border-white/10 shadow-xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Anmol Malviya</p>
                                            <p className="text-base font-semibold text-white/90 leading-none">Software Engineer</p>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-primary/20">
                                            <Terminal className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-2 shadow-2xl">
                                    <div className="aspect-[16/10] sm:aspect-video relative rounded-2xl overflow-hidden bg-white/5">
                                        <Image
                                            src={siteConfig.aboutImageUrl}
                                            alt={`${siteConfig.name} Portfolio`}
                                            fill
                                            className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                            sizes="(max-width: 768px) 100vw, 800px"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40" />
                                    </div>
                                </div>

                            </motion.div>

                            {/* Narrative Sections as Cards - Side by Side on larger screens */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
                                <motion.div
                                    variants={itemVariants}
                                    className="relative group rounded-3xl overflow-hidden glass border border-white/10 p-8 shadow-2xl hover:border-primary/30 transition-all duration-500"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                                <Lightbulb className="w-6 h-6 text-primary" />
                                            </div>
                                            <h4 className="text-xl font-bold text-foreground tracking-tight">The Philosophy</h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                            I build software that bridges the gap between <span className="text-foreground font-medium">complex logic</span> and <span className="text-foreground font-medium">human experience</span>. Every pixel and every line of code is intentional.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="relative group rounded-3xl overflow-hidden glass border border-white/10 p-8 shadow-2xl hover:border-secondary/30 transition-all duration-500"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                                                <Sparkles className="w-6 h-6 text-secondary" />
                                            </div>
                                            <h4 className="text-xl font-bold text-foreground tracking-tight">The Expertise</h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                            Specializing in the <span className="text-foreground">MERN stack</span>, I architect high-performance systems integrated with <span className="text-foreground">AI (Gemini)</span> and <span className="text-foreground">WebRTC</span> for real-time intelligence.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Experience Highlights & Feature Cards */}
                        <div className="space-y-12">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        variants={itemVariants}
                                        whileHover={{ y: -10 }}
                                        className="group p-8 rounded-[2rem] glass border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/5 bg-white/[0.01]"
                                    >
                                        <div className={`mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors duration-500`}>
                                            <item.icon className={`w-8 h-8 ${item.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{item.label}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Modern Statistics Grid */}
                            <motion.div variants={itemVariants} className="relative p-10 rounded-[3rem] glass border border-white/10 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    {stats.map((stat, index) => (
                                        <div key={stat.label} className="text-left">
                                            <div className="text-3xl lg:text-4xl font-black gradient-text mb-1 tracking-tighter">
                                                {stat.value}
                                            </div>
                                            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Status Bar */}
                            <motion.div variants={itemVariants} className="flex items-center gap-6">
                                <div className="flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available for Innovation</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
