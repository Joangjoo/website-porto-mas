import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioItem } from '../types/portfolio';

const formatTitle = (path: string) => {
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return filename.replace(/[-_]/g, ' ').replace(/([A-Z])/g, ' $1').trim();
};

const Porto: React.FC = () => {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

    useEffect(() => {
        const loadAssets = async () => {
            const images = import.meta.glob('/src/assets/image/*.(jpg|png|jpeg|webp)', { eager: true, as: 'url' });
            const videos = import.meta.glob('/src/assets/video/*.(mp4|webm)', { eager: true, as: 'url' });

            const loadedItems: PortfolioItem[] = [];
            let index = 0;

            const getSize = (idx: number): PortfolioItem['size'] => {
                const pattern = ['large', 'regular', 'regular', 'wide', 'regular', 'tall'];
                return pattern[idx % pattern.length] as PortfolioItem['size'];
            };
            Object.entries(videos).forEach(([path, url]) => {
                loadedItems.push({
                    id: path,
                    src: url,
                    type: 'video',
                    title: formatTitle(path),
                    scope: ['Projects'],
                    category: ['Animation', 'Motion image'],
                    industry: ['Product Visual'],
                    size: getSize(index++)
                });
            });

            Object.entries(images).forEach(([path, url]) => {
                loadedItems.push({
                    id: path,
                    src: url,
                    type: 'image',
                    title: formatTitle(path),
                    scope: ['Projects'],
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



    return (
        <div className="min-h-screen bg-black text-white pt-24 md:pt-32 px-4 md:px-12 flex flex-col md:flex-row gap-8 relative ">

            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-8 relative md:sticky md:top-32 h-fit z-10">
                <div>
                    <h1 className="text-4xl font-bold mb-8 ">Works</h1>
                    <h2 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Filter</h2>
                </div>

                {/* Helper function for Checkboxes */}
                {[
                    { label: 'Scope', options: ['Projects'], state: selectedScopes, setter: setSelectedScopes },
                    { label: 'Type', options: ['Still image', 'Animation'], state: selectedTypes, setter: setSelectedTypes },
                    { label: 'Industry', options: ['Architecture', 'Product Visual'], state: selectedIndustries, setter: setSelectedIndustries },
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
            <div className="flex-1 min-h-[50vh] space-y-12">

                {/* Images Section */}
                {filteredItems.some(i => i.type === 'image') && (
                    <div className="columns-1 md:columns-3 gap-2 md:gap-4 space-y-2 md:space-y-4">
                        <AnimatePresence>
                            {filteredItems.filter(i => i.type === 'image').map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative group break-inside-avoid overflow-hidden cursor-pointer rounded-lg mb-2 md:mb-4"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Videos Section */}
                {filteredItems.some(i => i.type === 'video') && (
                    <div className="columns-1 md:columns-3 gap-2 md:gap-4 space-y-2 md:space-y-4">
                        <AnimatePresence>
                            {filteredItems.filter(i => i.type === 'video').map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative group break-inside-avoid overflow-hidden cursor-pointer rounded-lg mb-2 md:mb-4"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="w-full relative">
                                        <video
                                            src={item.src}
                                            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
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
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {filteredItems.length === 0 && (
                    <div className="w-full py-20 text-center text-gray-500">
                        No items found matching your filters.
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <div className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute -top-12 right-0 z-10 p-2 text-white/50 hover:text-white transition-colors"
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            {selectedItem.type === 'video' ? (
                                <video
                                    src={selectedItem.src}
                                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                                    controls
                                    autoPlay
                                />
                            ) : (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                                />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Porto;
