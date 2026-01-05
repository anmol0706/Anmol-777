'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <div className="relative">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center gap-6"
                        >
                            {/* Logo Circle */}
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className="w-16 h-16 rounded-full border-2 border-primary/30"
                                    style={{
                                        borderTopColor: 'oklch(0.7 0.25 265)',
                                        borderRightColor: 'oklch(0.65 0.2 340)',
                                    }}
                                />
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <span className="text-2xl font-bold gradient-text">AM</span>
                                </motion.div>
                            </div>

                            {/* Loading Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-1"
                            >
                                <span className="text-sm text-muted-foreground">Loading</span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-sm text-muted-foreground"
                                >
                                    ...
                                </motion.span>
                            </motion.div>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute -inset-20 bg-primary/5 rounded-full blur-3xl -z-10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
