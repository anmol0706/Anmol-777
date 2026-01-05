'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { projectsData as projects } from '@/data/portfolio';

const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
];

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group"
        >
            <div className="relative h-full rounded-2xl glass border border-border overflow-hidden hover:border-primary/50 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
                        </div>
                    )}

                    {/* Overlay on hover */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all"
                    >
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-3 left-3">
                            <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs bg-muted/50 border-border hover:border-primary/50 transition-colors"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState('all');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section
            id="projects"
            ref={ref}
            className="relative py-24 sm:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                        My Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Featured
                        <span className="gradient-text"> Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my best work across different technologies and domains
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.value
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                                }`}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-xl border-primary/50 hover:bg-primary/10"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        View All on GitHub
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
