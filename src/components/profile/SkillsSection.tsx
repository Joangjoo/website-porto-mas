import React from 'react';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
    const skills = [
        { name: "Blender", desc: "Modeling, Concept, Environment, Lighting, Rendering, Compositing" },
        { name: "Adobe Suite", desc: "Illustrator (Ai), Photoshop (Ps), Premiere Pro (Pr)" },
        { name: "Unity", desc: "Game Engine & Interactive" },
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
                    <h2 className="text-3xl font-mono text-blue-500 mb-8 uppercase tracking-widest">Software Skills</h2>
                    <div className="space-y-8">
                        {skills.map((skill, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                                <p className="text-gray-400">{skill.desc}</p>
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
                    <h2 className="text-3xl font-mono text-blue-500 mb-8 uppercase tracking-widest">Programming</h2>
                    <div className="flex flex-wrap gap-3">
                        {coding.map((code, idx) => (
                            <span key={idx} className="px-5 py-3 bg-black border border-neutral-700 rounded-lg text-lg text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">
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
