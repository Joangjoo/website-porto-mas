import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';

const ExperienceEducationSection: React.FC = () => {
    return (
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
            >
                {/* Experience Column */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 border-l-4 border-blue-500 pl-6">Experience</h2>
                    <div className="space-y-10">
                        <div className="group">
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">SVEIN STUDIO</h3>
                            <p className="text-sm font-mono text-gray-500 mb-2">2022 - Present</p>
                            <p className="text-gray-300">Architectural Rendering, 3D Artist, 3D Animator, R&D.</p>
                        </div>

                        <div className="group">
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">Freelance</h3>
                            <p className="text-sm font-mono text-gray-500 mb-2">2022 - Present</p>
                            <p className="text-gray-300">3D Artist, 3D Animator, 3D Modeller.</p>
                        </div>

                        <div className="group">
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">Computer Lab - UAD</h3>
                            <p className="text-gray-300">Assistant for Database, Statistics, Web Engineering, Multimedia.</p>
                        </div>
                    </div>
                </div>

                {/* Education Column */}
                <div className="lg:text-right">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 lg:border-r-4 lg:border-l-0 border-l-4 border-blue-500 pl-6 lg:pr-6 lg:pl-0">Education</h2>
                    <div className="space-y-10 flex flex-col lg:items-end">
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Universitas Ahmad Dahlan</h3>
                            <p className="text-blue-400">Teknik Informatika (2017 - 2021)</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-1">SMK N 1 Lamongan</h3>
                            <p className="text-blue-400">Multimedia (2014 - 2017)</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-1">MTS M 04 Bulubrangsi</h3>
                        </div>
                    </div>
                </div>

            </motion.div>
        </ParallaxSection>
    );
};

export default ExperienceEducationSection;
