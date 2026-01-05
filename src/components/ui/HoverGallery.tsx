"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const images = [
    {
        src: "/projects/image-1.png",
        alt: "Featured Work 1",
        code: "# 01",
    },
    {
        src: "/projects/gallery-2.jpeg",
        alt: "Featured Work 2",
        code: "# 02",
    },
    {
        src: "/projects/gallery-3.jpeg",
        alt: "Featured Work 3",
        code: "# 03",
    },
    {
        src: "/projects/gallery-4.jpeg",
        alt: "Featured Work 4",
        code: "# 04",
    },
    {
        src: "/projects/gallery-5.jpeg",
        alt: "Featured Work 5",
        code: "# 05",
    },
    {
        src: "/projects/gallery-6.jpeg",
        alt: "Featured Work 6",
        code: "# 06",
    },

];

export const HoverGallery = () => {
    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden py-10">
            <HoverExpand_001 className="" images={images} />
        </div>
    );
};

const HoverExpand_001 = ({
    images,
    className,
}: {
    images: { src: string; alt: string; code: string }[];
    className?: string;
}) => {
    const [activeImage, setActiveImage] = useState<number | null>(0);

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={cn("relative w-full max-w-6xl px-5", className)}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <div className="flex w-full items-center justify-center gap-1">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative cursor-pointer overflow-hidden rounded-3xl"
                            initial={{ width: "2.5rem", height: "20rem" }}
                            animate={{
                                width: activeImage === index ? "24rem" : "5rem",
                                height: activeImage === index ? "24rem" : "24rem",
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            onClick={() => setActiveImage(index)}
                            onHoverStart={() => setActiveImage(index)}
                        >
                            <AnimatePresence>
                                {activeImage === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute h-full w-full bg-gradient-to-t from-black/80 to-transparent z-10"
                                    />
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {activeImage === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute flex h-full w-full flex-col items-end justify-end p-6 z-20"
                                    >
                                        <p className="text-left text-sm font-bold text-white/90">
                                            {image.code}
                                        </p>
                                        <p className="text-left text-xs text-white/70 mt-1">
                                            {image.alt}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <img
                                src={image.src}
                                className="size-full object-cover"
                                alt={image.alt}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
