import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const ContactSection: React.FC = () => {
    return (
        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop">
            <div className="w-full h-full flex flex-col justify-between pt-20 pb-4 text-white max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="flex flex-col items-start space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
                    >
                        Let's create <br /> something distinctive.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                            I am available for freelance work and open to discussing new opportunities.
                        </p>

                        <div className="inline-block relative group">
                            <a href="mailto:ombo992@gmail.com" className="text-xl md:text-2xl font-bold border-b-2 border-white pb-1 group-hover:text-gray-300 group-hover:border-gray-300 transition-colors">
                                ombo992@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full mt-auto"
                >
                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 pt-6">

                        {/* Connect */}
                        <div className="border-t border-gray-700 pt-4">
                            <h3 className="text-base font-bold mb-2 text-gray-400">Connect</h3>
                            <p className="text-xs text-gray-500 mb-4 max-w-xs">
                                Check out my social media profiles to see my daily updates.
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="flex items-center group font-bold hover:text-gray-300 transition-colors text-sm">
                                        LinkedIn <BsArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/izha_al_" className="flex items-center group font-bold hover:text-gray-300 transition-colors text-sm">
                                        Instagram <BsArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Portfolio */}
                        <div className="border-t border-gray-700 pt-4">
                            <h3 className="text-base font-bold mb-2 text-gray-400">Portfolio</h3>
                            <p className="text-xs text-gray-500 mb-4 max-w-xs">
                                Explore my detailed works and case studies on these platforms.
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://behance.net/zalzo" className="flex items-center group font-bold hover:text-gray-300 transition-colors text-sm">
                                        Behance <BsArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://zalzo7.artstation.com" className="flex items-center group font-bold hover:text-gray-300 transition-colors text-sm">
                                        ArtStation <BsArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cgarchitect.com/members/ombo992" className="flex items-center group font-bold hover:text-gray-300 transition-colors text-sm">
                                        CGArchitect <BsArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Dev */}
                        <div className="border-t border-gray-700 pt-4">
                            <h3 className="text-base font-bold mb-2 text-gray-400">Development</h3>
                            <p className="text-xs text-gray-500 mb-4 max-w-xs">
                                Review my code repositories and open source contributions.
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://github.com/Zhalizhal" className="flex items-center group font-bold hover:text-gray-300 transition-colors text-sm">
                                        GitHub <BsArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Footer Copyright */}
                    <div className="w-full flex justify-between text-[10px] text-gray-600 font-mono border-t border-gray-800 pt-4">
                        <p>&copy; 2026 Baharuddin Izha Al Sya'na. All rights reserved.</p>
                        <p>Designed with Passion.</p>
                    </div>

                </motion.div>

            </div>
        </ParallaxSection>
    );
};

export default ContactSection;
