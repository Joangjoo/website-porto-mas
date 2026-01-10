import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullScreenMenu from './FullScreenMenu';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-40 bg-transparent px-8 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
                {/* Logo */}
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-4 group">
                    <Logo />
                    <span className="font-bold text-xl tracking-wide hidden md:block group-hover:text-blue-400 transition-colors">IZHAL</span>
                </Link>

                {/* Hamburger Trigger */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="flex items-center space-x-3 group cursor-pointer"
                >
                    <span className="font-medium text-sm md:text-base tracking-wide group-hover:text-gray-300 transition-colors">
                        Menu
                    </span>
                    <div className="flex flex-col space-y-1.5 w-8 items-end">
                        <div className="w-8 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"></div>
                        <div className="w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"></div>
                        <div className="w-8 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"></div>
                    </div>
                </button>
            </nav>

            <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
