import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const ContactSection: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-white"
            >
                {/* Left Column: Headline */}
                <div className="md:sticky md:top-32">
                    <motion.p variants={itemVariants} className="text-blue-500 font-mono mb-6 text-sm tracking-widest uppercase font-semibold">
                        Get In Touch
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        Let's create something distinctive.
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-md">
                        I am available for freelance work and open to discussing new opportunities. If you have an idea, I'd love to hear about it.
                    </motion.p>
                </div>

                {/* Right Column: Contact Details */}
                <div className="space-y-16 bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/5">

                    {/* Email Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Email</h3>
                        <a
                            href="mailto:ombo992@gmail.com"
                            className="text-2xl md:text-3xl font-light text-white hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400 pb-1 break-all"
                        >
                            ombo992@gmail.com
                        </a>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Connect</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors flex items-center group">LinkedIn <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span></a></li>
                                <li><a href="https://instagram.com/izha_al_" className="hover:text-white transition-colors flex items-center group">Instagram <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span></a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Portfolio</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><a href="https://behance.net/zalzo" className="hover:text-white transition-colors flex items-center group">Behance <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span></a></li>
                                <li><a href="https://zalzo7.artstation.com" className="hover:text-white transition-colors flex items-center group">ArtStation <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span></a></li>
                                <li><a href="https://cgarchitect.com/members/ombo992" className="hover:text-white transition-colors flex items-center group">CGArchitect <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span></a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Dev</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><a href="https://github.com/Zhalizhal" className="hover:text-white transition-colors flex items-center group">GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span></a></li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 text-gray-600 text-sm font-mono">
                        &copy; 2026 Baharuddin Izha. All rights reserved.
                    </motion.div>

                </div>

            </motion.div>
        </ParallaxSection>
    );
};

export default ContactSection;
