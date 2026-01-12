import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import FullScreenMenu from './FullScreenMenu';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-40 bg-transparent px-4 py-4 md:px-12 md:py-6 flex justify-between items-center mix-blend-difference text-white">
                {/* Brand - Fades out when menu is open */}
                <Link
                    to="/"
                    className={`font-bold text-sm md:text-2xl tracking-tighter uppercase transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} max-w-[70%] leading-tight`}
                >
                    BAHARUDDIN IZHA AL SYA'NA
                </Link>

                {/* Hamburger Trigger */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="flex items-center space-x-2 md:space-x-3 group cursor-pointer"
                >
                    <span className="font-medium text-xs md:text-base tracking-wide group-hover:text-gray-300 transition-colors">
                        Menu
                    </span>
                    <div className="flex flex-col space-y-1 md:space-y-1.5 w-6 md:w-8 items-end">
                        <div className="w-6 md:w-8 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"></div>
                        <div className="w-4 md:w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"></div>
                        <div className="w-6 md:w-8 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"></div>
                    </div>
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && <FullScreenMenu onClose={() => setIsMenuOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
