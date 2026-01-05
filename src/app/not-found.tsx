'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 animated-gradient opacity-50" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px]" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-lg mx-auto"
                >
                    {/* 404 Text */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                        className="mb-8"
                    >
                        <span className="text-[150px] sm:text-[200px] font-bold gradient-text leading-none">
                            404
                        </span>
                    </motion.div>

                    {/* Message */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                    >
                        Page Not Found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-muted-foreground text-lg mb-8"
                    >
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl glow-primary"
                        >
                            <Link href="/">
                                <Home className="w-4 h-4 mr-2" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.history.back()}
                            className="rounded-xl border-primary/50 hover:bg-primary/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
