'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Layout,
    Server,
    Wrench,
    Cpu,
    Layers,
    Smartphone,
    Database,
    Cloud,
    Code2,
    CheckCircle2
} from 'lucide-react';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiVercel,
    SiGithub,
    SiDocker,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiFigma,
    SiAmazonwebservices,
    SiPrisma,
    SiSupabase,
    SiRedis
} from 'react-icons/si';
import LogoLoop from '@/components/ui/LogoLoop';

// Tech stack data with categories and icons
const skillCategories = [
    {
        title: 'Frontend Architecture',
        icon: Layout,
        color: 'primary',
        accent: 'oklch(0.7 0.25 265)',
        skills: [
            { name: 'React / Next.js', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 92 },
            { name: 'Framer Motion', level: 85 },
            { name: 'GSAP Animation', level: 80 },
            { name: 'Responsive UI', level: 95 },
        ]
    },
    {
        title: 'Backend Systems',
        icon: Server,
        color: 'secondary',
        accent: 'oklch(0.65 0.2 340)',
        skills: [
            { name: 'Node.js / Express', level: 90 },
            { name: 'MongoDB / Mongoose', level: 88 },
            { name: 'REST & GraphQL', level: 85 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'Socket.io', level: 75 },
            { name: 'Authentication (JWT)', level: 88 },
        ]
    },
    {
        title: 'DevOps & Tools',
        icon: Wrench,
        color: 'accent',
        accent: 'oklch(0.55 0.3 175)',
        skills: [
            { name: 'Git & Version Control', level: 95 },
            { name: 'Docker / Containers', level: 75 },
            { name: 'AWS / Cloud Deployment', level: 70 },
            { name: 'Vercel / Netlify', level: 90 },
            { name: 'Performance Auditing', level: 80 },
            { name: 'Figma to Code', level: 85 },
        ]
    }
];



interface SkillCardProps {
    name: string;
    level: number;
    accent: string;
    index: number;
    isInView: boolean;
}

function SkillCard({ name, level, accent, index, isInView }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent }} />
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{name}</span>
                </div>
                <span className="text-[10px] font-black tracking-widest text-muted-foreground/50 group-hover:text-foreground/80 transition-colors uppercase">
                    {level}%
                </span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: accent }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                </motion.div>
            </div>
            {/* Hover Glow */}
            <div
                className="absolute inset-x-0 -bottom-1 h-px opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"
                style={{ backgroundColor: accent }}
            />
        </motion.div>
    );
}

export function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    return (
        <section
            id="skills"
            ref={ref}
            className="relative py-24 sm:py-32 overflow-hidden bg-background"
        >
            {/* Premium Background Layering */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(2,6,23,0.8)_100%)] opacity-40" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
            </div>

            {/* Extended Toolkit Tab - Full Width - Moved to Top */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="relative z-10 w-full mb-24"
            >
                <div className="container mx-auto px-4 mb-10 text-center">
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full glass border border-white/5 shadow-2xl shadow-black/20">
                        <Layers className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-lg font-bold text-foreground tracking-tight">Extended Technical Toolkit</span>
                        <Layers className="w-5 h-5 text-secondary animate-pulse" />
                    </div>
                </div>

                <div className="w-full mask-linear-fade bg-white/[0.02] border-y border-white/[0.05] py-12 backdrop-blur-[2px]">
                    <LogoLoop
                        speed={40}
                        gap={60}
                        logoHeight={45}
                        pauseOnHover={true}
                        logos={[
                            { Icon: SiReact, name: "React" },
                            { Icon: SiNextdotjs, name: "Next.js" },
                            { Icon: SiTypescript, name: "TypeScript" },
                            { Icon: SiTailwindcss, name: "Tailwind CSS" },
                            { Icon: SiVercel, name: "Vercel" },
                            { Icon: SiGithub, name: "GitHub" },
                            { Icon: SiDocker, name: "Docker" },
                            { Icon: SiNodedotjs, name: "Node.js" },
                            { Icon: SiMongodb, name: "MongoDB" },
                            { Icon: SiPostgresql, name: "PostgreSQL" },
                            { Icon: SiFigma, name: "Figma" },
                            { Icon: SiAmazonwebservices, name: "AWS" },
                            { Icon: SiPrisma, name: "Prisma" },
                            { Icon: SiSupabase, name: "Supabase" },
                            { Icon: SiRedis, name: "Redis" }
                        ].map((skill, index) => ({
                            node: (
                                <div
                                    key={skill.name}
                                    className="group/logo flex flex-col items-center justify-center gap-3 cursor-pointer"
                                >
                                    <div className="p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover/logo:ring-primary/50 group-hover/logo:bg-primary/5 transition-all duration-300">
                                        <skill.Icon
                                            className="w-8 h-8 text-muted-foreground/60 transition-all duration-300 group-hover/logo:text-foreground group-hover/logo:scale-110"
                                            style={{
                                                filter: `drop-shadow(0 0 0px ${index % 3 === 0 ? 'oklch(0.7 0.25 265)' : index % 3 === 1 ? 'oklch(0.65 0.2 340)' : 'oklch(0.55 0.3 175)'})`
                                            }}
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/40 group-hover/logo:text-primary transition-colors opacity-0 group-hover/logo:opacity-100 transform translate-y-2 group-hover/logo:translate-y-0 duration-300 absolute -bottom-6">
                                        {skill.name}
                                    </span>
                                </div>
                            )
                        }))}
                    />
                </div>
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20 mb-6 mx-auto">
                        <Cpu className="w-4 h-4" />
                        Technical Proficiency
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight">
                        Powering <span className="gradient-text">Experiences.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        A comprehensive toolkit of modern technologies I use to architect and build high-performance digital products.
                    </p>
                </motion.div>

                {/* Main Skills Dashboard */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ delay: categoryIndex * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                onMouseEnter={() => setActiveCategory(categoryIndex)}
                                onMouseLeave={() => setActiveCategory(null)}
                                className={`relative group p-8 rounded-[2.5rem] glass border border-white/5 hover:border-white/20 transition-all duration-700 ${activeCategory !== null && activeCategory !== categoryIndex ? 'opacity-40 blur-[2px] scale-[0.98]' : 'scale-100'
                                    }`}
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-4 rounded-3xl bg-white/5 group-hover:bg-white/10 transition-colors relative">
                                        <category.icon className="w-8 h-8" style={{ color: category.accent }} />
                                        <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-3xl" style={{ backgroundColor: category.accent }} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-foreground tracking-tight line-clamp-1">
                                            {category.title}
                                        </h3>
                                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">Core Competencies</p>
                                    </div>
                                </div>

                                {/* Skills Interactive List */}
                                <div className="grid gap-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillCard
                                            key={skill.name}
                                            name={skill.name}
                                            level={skill.level}
                                            accent={category.accent}
                                            index={categoryIndex * 6 + skillIndex}
                                            isInView={isInView}
                                        />
                                    ))}
                                </div>

                                {/* Background Glow */}
                                <div
                                    className="absolute -inset-[2px] rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 -z-10"
                                    style={{ backgroundColor: category.accent }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Extended Toolkit Tab - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="relative z-10 w-full mt-24"
            >
                <div className="container mx-auto px-4 mb-10 text-center">
                    <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full glass border border-white/5 shadow-2xl shadow-black/20">
                        <Layers className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-lg font-bold text-foreground tracking-tight">Extended Technical Toolkit</span>
                        <Layers className="w-5 h-5 text-secondary animate-pulse" />
                    </div>
                </div>

                <div className="w-full mask-linear-fade bg-white/[0.02] border-y border-white/[0.05] py-12 backdrop-blur-[2px]">
                    <LogoLoop
                        speed={40}
                        gap={60}
                        logoHeight={45}
                        pauseOnHover={true}
                        logos={[
                            { Icon: SiReact, name: "React" },
                            { Icon: SiNextdotjs, name: "Next.js" },
                            { Icon: SiTypescript, name: "TypeScript" },
                            { Icon: SiTailwindcss, name: "Tailwind CSS" },
                            { Icon: SiVercel, name: "Vercel" },
                            { Icon: SiGithub, name: "GitHub" },
                            { Icon: SiDocker, name: "Docker" },
                            { Icon: SiNodedotjs, name: "Node.js" },
                            { Icon: SiMongodb, name: "MongoDB" },
                            { Icon: SiPostgresql, name: "PostgreSQL" },
                            { Icon: SiFigma, name: "Figma" },
                            { Icon: SiAmazonwebservices, name: "AWS" },
                            { Icon: SiPrisma, name: "Prisma" },
                            { Icon: SiSupabase, name: "Supabase" },
                            { Icon: SiRedis, name: "Redis" }
                        ].map((skill, index) => ({
                            node: (
                                <div
                                    key={skill.name}
                                    className="group/logo flex flex-col items-center justify-center gap-3 cursor-pointer"
                                >
                                    <div className="p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover/logo:ring-primary/50 group-hover/logo:bg-primary/5 transition-all duration-300">
                                        <skill.Icon
                                            className="w-8 h-8 text-muted-foreground/60 transition-all duration-300 group-hover/logo:text-foreground group-hover/logo:scale-110"
                                            style={{
                                                filter: `drop-shadow(0 0 0px ${index % 3 === 0 ? 'oklch(0.7 0.25 265)' : index % 3 === 1 ? 'oklch(0.65 0.2 340)' : 'oklch(0.55 0.3 175)'})`
                                            }}
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/40 group-hover/logo:text-primary transition-colors opacity-0 group-hover/logo:opacity-100 transform translate-y-2 group-hover/logo:translate-y-0 duration-300 absolute -bottom-6">
                                        {skill.name}
                                    </span>
                                </div>
                            )
                        }))}
                    />
                </div>
            </motion.div>
        </section >
    );
}
