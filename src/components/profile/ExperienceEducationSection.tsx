import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';
import zstu from '../../assets/image/zstu.png';

const ExperienceEducationSection: React.FC = () => {
    return (
        <ParallaxSection
            backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            className="!items-start"
        >
            <div className="w-full pt-12 md:pt-16 pb-4 flex flex-col justify-between h-full">

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white w-full"
                >
                    <div className="mb-4">
                        <span className="block text-[10px] tracking-widest mb-1 lg:mt-5 text-gray-400">INTRODUCTION</span>
                        <h2 className="text-2xl md:text-4xl font-bold max-w-4xl leading-none">
                            EDUCATION & <br />
                            PROFESSIONAL EXPERIENCES
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

                        {/* Education Column */}
                        <div>
                            <h3 className="text-sm font-bold mb-3 uppercase tracking-wider border-b border-gray-700 pb-1 inline-block">Education</h3>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="text-sm font-bold">Vocational High School 1 Lamongan</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400">Multimedia Department</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">Ahmad Dahlan University</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400">Bachelor of Information Technology</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Column */}
                        <div className='lg:ml-12'>
                            <h3 className="text-sm font-bold mb-3 uppercase tracking-wider border-b border-gray-700 pb-1 inline-block">Work Experience</h3>
                            <div className="space-y-2">
                                {/* 1. Deltaview */}
                                <div>
                                    <h4 className="text-sm font-bold">Deltaview Cito</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400">Graphic Design (2016)</p>
                                </div>

                                {/* 2. Computer Lab */}
                                <div>
                                    <h4 className="text-sm font-bold">Computer Lab - UAD</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400">Assistant for Database, Statistics, Web Engineering, Multimedia</p>
                                </div>

                                {/* 3. Svein */}
                                <div className="space-y-1">
                                    <div>
                                        <h4 className="text-sm font-bold">Svein Indonesia</h4>
                                        <p className="text-[10px] md:text-xs text-gray-400">Asistant Project Manager & Leader Animation (2024 - 2025)</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Svein Indonesia</h4>
                                        <p className="text-[10px] md:text-xs text-gray-400">3D Animator (2023 - 2025)</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Svein Indonesia</h4>
                                        <p className="text-[10px] md:text-xs text-gray-400">3D Artist (2022 - 2025)</p>
                                    </div>
                                </div>

                                {/* 4. Taksu Visual */}
                                <div>
                                    <h4 className="text-sm font-bold">Taksu Visual</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400">3D Visualizer (2025)</p>
                                </div>

                                {/* 5. Freelance */}
                                <div>
                                    <h4 className="text-sm font-bold">Freelance</h4>
                                    <p className="text-[10px] md:text-xs text-gray-400">3D Artist (2025)</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </motion.div>

                {/* Footer split - Left and Right Aligned */}
                <div className="w-full flex justify-between items-end  border-gray-800 pt-2 mt-2">

                    {/* Left Side */}
                    <div className="flex flex-col gap-1 items-start lg:mt-6">
                        <h3 className="text-base font-bold mb-2">Open to Collaboration!!!</h3>

                        <div className="mb-2">
                            <img src={zstu} alt="Z Studio" className="h-12 w-auto object-contain" />
                        </div>

                        <div className="text-[10px] text-gray-400 space-y-0.5 flex flex-col">
                            <p className="font-bold text-white uppercase tracking-wider mb-1">Z Studio</p>

                            <p className="mt-1">Instagram</p>
                            <p>@zstu___</p>
                            <p>@izha_al_</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="text-[10px] uppercase tracking-widest text-right mb-0 lg:-translate-y-10">
                        <span className="font-bold text-white">PORTFOLIO</span>
                        <span className="text-gray-500 mx-2">|</span>
                        <span className="text-gray-300">Baharuddin Izha Al S.</span>
                    </div>

                </div>

            </div>
        </ParallaxSection>
    );
};

export default ExperienceEducationSection;
