import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="block text-blue-500 font-mono tracking-wider mb-4">PROFILE</span>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight text-white">
                    Baharuddin Izha <br /> Al Sya'na (Izhal)
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                    3D Artist & Designer from Lamongan, East Java. <br />
                    Specializing in architectural rendering, 3D animation, and design.
                </p>
            </motion.div>
        </ParallaxSection>
    );
};

export default HeroSection;
