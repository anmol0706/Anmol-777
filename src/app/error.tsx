'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 animated-gradient opacity-30" />
            <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-destructive/10 rounded-full blur-[120px]" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-lg mx-auto"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="p-6 rounded-full bg-destructive/10 border border-destructive/20">
                            <AlertTriangle className="w-16 h-16 text-destructive" />
                        </div>
                    </motion.div>

                    {/* Message */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                    >
                        Something went wrong!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-muted-foreground text-lg mb-8"
                    >
                        An unexpected error occurred. Please try again or contact support if the problem persists.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            onClick={reset}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl glow-primary"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Try Again
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                            className="rounded-xl border-primary/50 hover:bg-primary/10"
                        >
                            <Link href="/">
                                <Home className="w-4 h-4 mr-2" />
                                Back to Home
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
