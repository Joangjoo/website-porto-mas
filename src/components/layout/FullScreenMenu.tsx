import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 bg-black text-white transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            {/* Top Bar with Logo and Close Button */}
            <div className="flex justify-between items-center p-8 md:p-12">
                <div className="flex items-center space-x-4">
                    <Logo />
                    <span className="font-bold text-xl tracking-wide hidden md:block">IZHAL</span>
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
            <div className="flex flex-col h-full px-8 md:px-20 pb-20 justify-center">

                {/* Menu Links */}
                <nav className="flex flex-col space-y-6 md:space-y-4 mb-20 mt-[-100px] z-10">
                    <Link
                        to="/"
                        onClick={onClose}
                        className="text-5xl md:text-7xl font-bold leading-tight hover:text-blue-500 transition-colors w-max"
                    >
                        Profile
                    </Link>
                    <Link
                        to="/porto"
                        onClick={onClose}
                        className="text-5xl md:text-7xl font-bold leading-tight hover:text-blue-500 transition-colors w-max"
                    >
                        Porto
                    </Link>
                </nav>

                {/* Footer Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400 mt-auto border-t border-gray-800 pt-8 absolute bottom-10 left-8 right-8 md:left-20 md:right-20">
                    <div>
                        <h4 className="text-white mb-2 font-semibold">Contact</h4>
                        <p>ombo992@gmail.com</p>
                    </div>
                    <div>
                        <h4 className="text-white mb-2 font-semibold">Address</h4>
                        <p>Lamongan, Jawa Timur</p>
                    </div>
                    <div>
                        <h4 className="text-white mb-2 font-semibold">Socials</h4>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/izha_al_" className="hover:text-white">Instagram</a>
                            <a href="https://behance.net/zalzo" className="hover:text-white">Behance</a>
                            <a href="https://github.com/Zhalizhal" className="hover:text-white">GitHub</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FullScreenMenu;
