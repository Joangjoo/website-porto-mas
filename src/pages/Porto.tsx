import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type MediaType = 'image' | 'video';

interface PortfolioItem {
    id: string;
    src: string;
    type: MediaType;
    title: string;
    scope: string[];
    category: string[];
    industry: string[];
    size: 'regular' | 'wide' | 'tall' | 'large'; // Added size for masonry
}

// Helper to format filenames into titles
const formatTitle = (path: string) => {
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return filename.replace(/[-_]/g, ' ').replace(/([A-Z])/g, ' $1').trim();
};

const Porto: React.FC = () => {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Filters State
    const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

    useEffect(() => {
        const loadAssets = async () => {
            const images = import.meta.glob('/src/assets/image/*.(jpg|png|jpeg|webp)', { eager: true, as: 'url' });
            const videos = import.meta.glob('/src/assets/video/*.(mp4|webm)', { eager: true, as: 'url' });

            const loadedItems: PortfolioItem[] = [];
            let index = 0;

            // Helper to assign patterns (Regular, Wide, Regular, Large, etc.)
            const getSize = (idx: number): PortfolioItem['size'] => {
                const pattern = ['large', 'regular', 'regular', 'wide', 'regular', 'tall'];
                return pattern[idx % pattern.length] as PortfolioItem['size'];
            };

            // Process Videos first (often more visually striking)
            Object.entries(videos).forEach(([path, url]) => {
                loadedItems.push({
                    id: path,
                    src: url,
                    type: 'video',
                    title: formatTitle(path),
                    scope: ['Projects'],
                    category: ['Animation', 'Motion image'],
                    industry: ['Media & Entertainment'],
                    size: getSize(index++)
                });
            });

            // Process Images
            Object.entries(images).forEach(([path, url]) => {
                loadedItems.push({
                    id: path,
                    src: url,
                    type: 'image',
                    title: formatTitle(path),
                    scope: ['Projects'], // Default scope
                    category: ['Still image'],
                    industry: ['Architecture', 'Real Estate'],
                    size: getSize(index++)
                });
            });

            setItems(loadedItems);
        };

        loadAssets();
    }, []);

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const scopeMatch = selectedScopes.length === 0 || item.scope.some(s => selectedScopes.includes(s));
            const typeMatch = selectedTypes.length === 0 || item.category.some(c => selectedTypes.includes(c));
            const industryMatch = selectedIndustries.length === 0 || item.industry.some(i => selectedIndustries.includes(i));
            return scopeMatch && typeMatch && industryMatch;
        });
    }, [items, selectedScopes, selectedTypes, selectedIndustries]);

    const toggleFilter = (filter: string, current: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (current.includes(filter)) {
            setter(current.filter(f => f !== filter));
        } else {
            setter([...current, filter]);
        }
    };

    // Class mapping for sizes
    // Class mapping for sizes
    const sizeClasses = {
        regular: 'col-span-1 row-span-1',
        wide: 'col-span-1 md:col-span-2 row-span-1',
        tall: 'col-span-1 row-span-2',
        large: 'col-span-1 md:col-span-2 row-span-2',
    };

    return (
        <div className="min-h-screen bg-black text-white pt-32 px-4 md:px-8 flex flex-col md:flex-row gap-8 relative">

            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-8 sticky top-32 h-fit z-10">
                <div>
                    <h1 className="text-4xl font-bold mb-8">Works</h1>
                    <h2 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Filter</h2>
                </div>

                {/* Helper function for Checkboxes */}
                {[
                    { label: 'Scope', options: ['Projects'], state: selectedScopes, setter: setSelectedScopes },
                    { label: 'Type', options: ['Still image', 'Animation'], state: selectedTypes, setter: setSelectedTypes },
                    { label: 'Industry', options: ['Architecture', 'Media & Entertainment'], state: selectedIndustries, setter: setSelectedIndustries },
                ].map((group, groupIdx) => (
                    <div key={groupIdx}>
                        <h3 className="text-gray-500 text-sm mb-3">{group.label}</h3>
                        <div className="space-y-2">
                            {group.options.map(opt => (
                                <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                                    <div className={`w-4 h-4 border border-gray-600 rounded flex items-center justify-center transition-colors ${group.state.includes(opt) ? 'bg-blue-600 border-blue-600' : 'group-hover:border-gray-400'}`}>
                                        {group.state.includes(opt) && <div className="w-2 h-2 bg-white rounded-sm" />}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={group.state.includes(opt)}
                                        onChange={() => toggleFilter(opt, group.state, group.setter)}
                                    />
                                    <span className={`text-sm ${group.state.includes(opt) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </aside>

            {/* Grid Content */}
            <div className="flex-1 min-h-[50vh]">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px] grid-flow-dense">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`relative group bg-gray-900 overflow-hidden cursor-pointer ${sizeClasses[item.size]}`}
                                onClick={() => item.type === 'video' && setSelectedVideo(item.src)}
                            >
                                {item.type === 'video' ? (
                                    <div className="w-full h-full relative">
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                            loop
                                            muted
                                            playsInline
                                            onMouseOver={(e) => e.currentTarget.play()}
                                            onMouseOut={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform bg-black/20">
                                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                                    <h3 className="text-xl font-bold line-clamp-1">{item.title}</h3>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">{item.category[0]}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="w-full py-20 text-center text-gray-500">
                        No items found matching your filters.
                    </div>
                )}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors text-white"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <video
                                src={selectedVideo}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Porto;
