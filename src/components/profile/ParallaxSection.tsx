import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    backgroundImage?: string;
    className?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, backgroundImage, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useParallax(scrollYProgress, 20);

    return (
        <section
            ref={ref}
            className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden ${className}`}
            style={{
                boxShadow: '0 -4px 30px rgba(0,0,0,0.8)',
                zIndex: 0
            }}
        >
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="w-full h-[120%] bg-cover bg-center absolute top-[-10%]"
                        style={{ y }}
                        initial={{ scale: 1.05 }}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                        />
                        <div className="absolute inset-0 bg-black/80" />
                    </motion.div>
                </div>
            )}

            <div className="relative z-10 w-full max-w-7xl px-8 md:px-12 pointer-events-none">
                <div className="pointer-events-auto">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default ParallaxSection;
