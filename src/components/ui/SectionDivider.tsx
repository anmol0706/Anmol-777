'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
    variant?: 'wave' | 'gradient' | 'dots';
}

export function SectionDivider({ variant = 'gradient' }: SectionDividerProps) {
    if (variant === 'wave') {
        return (
            <div className="relative h-24 overflow-hidden">
                <svg
                    className="absolute bottom-0 w-full h-24 text-muted/20"
                    viewBox="0 0 1440 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        d="M0 24.9999C240 74.9999 480 74.9999 720 24.9999C960 -25.0001 1200 -25.0001 1440 24.9999V74H0V24.9999Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className="flex justify-center items-center py-12 gap-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-2 h-2 rounded-full bg-primary/50"
                    />
                ))}
            </div>
        );
    }

    // Default gradient divider
    return (
        <div className="relative py-8">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-px w-full max-w-xl mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
        </div>
    );
}
