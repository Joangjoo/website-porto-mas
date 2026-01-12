import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <ParallaxSection
            backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            className="!items-end pb-20 md:pb-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-left w-full"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white leading-[1.1]">
                    Baharuddin Izha <br />
                    Al Sya'na (Izhal)
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-normal">
                    3D Artist & Designer from Lamongan, East Java. <br className="hidden md:block" />
                    Specializing in architectural rendering, 3D animation, and design.
                </p>
            </motion.div>
        </ParallaxSection>
    );
};

export default HeroSection;
