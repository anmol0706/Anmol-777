'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    phase: number;
}

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let width = 0;
        let height = 0;

        const initStars = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            stars = [];
            // Reduced density slightly for performance
            const starCount = Math.floor((width * height) / 20000);

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5,
                    speed: Math.random() * 0.2 + 0.05, // Slower, smoother movement
                    phase: Math.random() * Math.PI * 2, // Random starting phase for twinkling
                });
            }
        };

        const animate = (time: number) => {
            ctx.clearRect(0, 0, width, height);

            // Use time for smooth pulsing
            const timeScale = time * 0.001;

            stars.forEach((star) => {
                // Smooth sine-wave twinkling instead of random jitter
                const opacity = 0.2 + Math.abs(Math.sin(timeScale + star.phase)) * 0.5;

                // Move star
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 250, ${opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initStars();

        // Debounce resize
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initStars, 200);
        };

        window.addEventListener('resize', handleResize);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
        />
    );
}
