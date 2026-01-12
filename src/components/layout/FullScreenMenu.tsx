import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FullScreenMenuProps {
    onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ onClose }) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 bg-black text-white"
        >
            {/* Top Bar with Logo and Close Button */}
            <div className="relative z-50 flex justify-between items-center p-8 md:p-12">
                <div className="flex items-center space-x-4">
                    <span className="font-bold text-xl md:text-2xl tracking-tighter uppercase">BAHARUDDIN IZHA AL SYA'NA</span>
                </div>

                <button
                    onClick={onClose}
                    className="flex items-center space-x-2 text-lg font-medium hover:text-gray-300 transition-colors group"
                >
                    <span>Close</span>
                    <div className="relative w-8 h-8 flex items-center justify-center border border-transparent group-hover:border-white rounded-full transition-all">
                        {/* X Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col h-full px-8 md:px-20 pb-20 justify-center lg:ml-16 -translate-y-48 md:-translate-y-36">

                {/* Menu Links */}
                <nav className="flex flex-col space-y-6 md:space-y-4 md:mb-20 mt-[-100px] z-10">
                    <Link
                        to="/"
                        onClick={onClose}
                        className="text-5xl md:text-7xl font-bold leading-tight hover:text-gray-300 transition-colors w-max"
                    >
                        About
                    </Link>
                    <Link
                        to="/porto"
                        onClick={onClose}
                        className="text-5xl md:text-7xl font-bold leading-tight hover:text-gray-300 transition-colors w-max"
                    >
                        Porto
                    </Link>
                </nav>

                {/* Footer Info */}
                <div className="w-full absolute bottom-10 left-0 px-8 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-800 pt-8">
                        {/* 1. Contact */}
                        <div>
                            <h4 className="text-white mb-2 font-bold uppercase tracking-wider text-xs md:text-sm">Contact</h4>
                            <p className="text-gray-400 text-sm md:text-base">ombo992@gmail.com</p>
                        </div>

                        {/* 2. Address */}
                        <div>
                            <h4 className="text-white mb-2 font-bold uppercase tracking-wider text-xs md:text-sm">Address</h4>
                            <p className="text-gray-400 text-sm md:text-base">Lamongan, Jawa Timur</p>
                        </div>

                        {/* 3. Socials */}
                        <div>
                            <h4 className="text-white mb-2 font-bold uppercase tracking-wider text-xs md:text-sm">Socials</h4>
                            <div className="flex flex-col space-y-1 text-gray-400 text-sm md:text-base">
                                <a href="https://instagram.com/izha_al_" className="hover:text-white transition-colors">Instagram</a>
                                <a href="https://behance.net/zalzo" className="hover:text-white transition-colors">Behance</a>
                                <a href="https://github.com/Zhalizhal" className="hover:text-white transition-colors">GitHub</a>
                            </div>
                        </div>

                        {/* 4. Contact Me Button */}
                        <div className="flex items-start md:justify-end">
                            <a
                                href="mailto:ombo992@gmail.com"
                                className="text-2xl md:text-4xl font-bold text-white hover:text-gray-300 transition-colors uppercase tracking-tight leading-none"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default FullScreenMenu;
