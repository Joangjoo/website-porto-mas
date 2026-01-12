import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';
import { SiBlender, SiAdobe, SiUnity, SiSketchup, SiAutodesk } from 'react-icons/si';

const SkillsSection: React.FC = () => {
    const skills = [
        { name: "Blender", icon: <SiBlender size={40} />, desc: "Modeling, Concept, Environment, Lighting, Rendering, Compositing" },
        { name: "3Ds Max", icon: <SiAutodesk size={40} />, desc: "Advanced Modeling & Architecture" },
        { name: "Sketchup", icon: <SiSketchup size={40} />, desc: "Architectural Design" },
        { name: "Adobe Suite", icon: <SiAdobe size={40} />, desc: "Illustrator (Ai), Photoshop (Ps), Premiere Pro (Pr)" },
        { name: "Unity", icon: <SiUnity size={40} />, desc: "Game Engine & Interactive" },
    ];

    const coding = ['PHP', 'MySQL', 'HTML', 'Bootstrap', 'ITM'];

    return (
        <ParallaxSection className="bg-neutral-900 border-t border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full text-white">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-mono text-white mb-8 uppercase tracking-widest">Software Skills</h2>
                    <div className="grid grid-cols-1 gap-8">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors shrink-0">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-gray-300 transition-colors">{skill.name}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{skill.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-mono text-white mb-8 uppercase tracking-widest">Programming</h2>
                    <div className="flex flex-wrap gap-3">
                        {coding.map((code, idx) => (
                            <span key={idx} className="px-5 py-3 bg-black border border-neutral-700 rounded-lg text-lg text-gray-300 hover:border-white hover:text-white transition-colors cursor-default">
                                {code}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </ParallaxSection>
    );
};

export default SkillsSection;
