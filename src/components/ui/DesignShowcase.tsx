'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Wrench, Layers } from 'lucide-react';
import { designShowcaseData, DesignItem } from '@/data/data';

const categories = [
  'All Designs',
  'Branding & Web',
  'Social Media',
  'AI & Tech',
  'Posters & Artwork'
];

export default function DesignShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Designs');
  const [activeModalItem, setActiveModalItem] = useState<DesignItem | null>(null);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const filteredItems = selectedCategory === 'All Designs'
    ? designShowcaseData
    : designShowcaseData.filter(item => item.category === selectedCategory);

  const openModal = (item: DesignItem) => {
    const index = designShowcaseData.findIndex(d => d.id === item.id);
    setActiveItemIndex(index !== -1 ? index : 0);
    setActiveModalItem(item);
  };

  const closeModal = () => {
    setActiveModalItem(null);
  };

  const nextModalItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (activeItemIndex + 1) % designShowcaseData.length;
    setActiveItemIndex(nextIdx);
    setActiveModalItem(designShowcaseData[nextIdx]);
  };

  const prevModalItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (activeItemIndex - 1 + designShowcaseData.length) % designShowcaseData.length;
    setActiveItemIndex(prevIdx);
    setActiveModalItem(designShowcaseData[prevIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') {
        const nextIdx = (activeItemIndex + 1) % designShowcaseData.length;
        setActiveItemIndex(nextIdx);
        setActiveModalItem(designShowcaseData[nextIdx]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIdx = (activeItemIndex - 1 + designShowcaseData.length) % designShowcaseData.length;
        setActiveItemIndex(prevIdx);
        setActiveModalItem(designShowcaseData[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, activeItemIndex]);

  return (
    <section id="designs" className="w-full py-16 px-4 sm:px-6 lg:px-[71px] bg-[#0E1015] text-white rounded-[32px] sm:rounded-[50px] my-12 overflow-hidden border border-[#232733] shadow-2xl relative">
      {/* Glow Ambient Highlights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FD853A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD853A]/10 border border-[#FD853A]/30 text-[#FD853A] text-sm font-semibold mb-4 backdrop-blur-md">
          <Sparkles size={16} />
          <span>Featured Design Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Creative <span className="text-[#FD853A]">Designs</span> & Visual Stories
        </h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
          From brand identity showcase and high-converting social media creatives to futuristic AI posters and dark fantasy artwork.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FD853A] text-white shadow-lg shadow-[#FD853A]/30 scale-105 font-semibold'
                  : 'bg-[#181B24] text-gray-300 border border-[#2A2E3D] hover:bg-[#232734] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Design Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1300px] mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="group relative bg-[#151821] border border-[#232735] rounded-3xl overflow-hidden cursor-pointer flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[#FD853A]/50 hover:shadow-2xl hover:shadow-[#FD853A]/10"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0A0B0E]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151821] via-transparent to-black/30 opacity-75 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                {item.tag}
              </div>

              {/* Quick View Button on Hover */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FD853A] text-white font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={16} />
                  <span>Inspect Design</span>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FD853A] transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Tools Badges */}
              <div className="pt-4 border-t border-[#232735] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.slice(0, 3).map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#1E2230] text-gray-300 text-xs font-medium border border-[#2B3043]"
                    >
                      {tool}
                    </span>
                  ))}
                  {item.tools.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-[#1E2230] text-gray-400 text-xs font-medium">
                      +{item.tools.length - 3}
                    </span>
                  )}
                </div>
                <div className="text-[#FD853A] text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Detail &rarr;
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Full Detail Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={closeModal}
        >
          {/* Main Modal Window */}
          <div
            className="relative w-full max-w-6xl max-h-[92vh] bg-[#141722] border border-[#2C3145] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row text-white animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FD853A] text-white flex items-center justify-center border border-white/20 transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* Left Prev Nav */}
            <button
              onClick={prevModalItem}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 hover:bg-[#FD853A] text-white flex items-center justify-center border border-white/20 transition-all duration-300 hidden sm:flex"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Next Nav */}
            <button
              onClick={nextModalItem}
              className="absolute right-16 lg:right-[380px] top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 hover:bg-[#FD853A] text-white flex items-center justify-center border border-white/20 transition-all duration-300 hidden sm:flex"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Preview Container */}
            <div className="relative flex-1 bg-[#08090D] min-h-[300px] lg:min-h-[600px] flex items-center justify-center p-4 overflow-auto">
              <div className="relative w-full h-full min-h-[350px] lg:min-h-[550px] flex items-center justify-center">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Info Sidebar Panel */}
            <div className="w-full lg:w-[360px] xl:w-[400px] p-6 sm:p-8 bg-[#181C2B] border-t lg:border-t-0 lg:border-l border-[#2B3046] flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[92vh]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FD853A]/20 text-[#FD853A] border border-[#FD853A]/40 text-xs font-bold uppercase tracking-wider">
                    {activeModalItem.category}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {activeModalItem.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {activeModalItem.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {activeModalItem.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers size={14} className="text-[#FD853A]" />
                    <span>Design Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeModalItem.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <CheckCircle2 size={15} className="text-[#FD853A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software & Tools Used */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Wrench size={14} className="text-[#FD853A]" />
                    <span>Tools & Tech Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-[#23283D] border border-[#353C5A] text-xs font-semibold text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Modal Action */}
              <div className="pt-6 border-t border-[#2C3146] flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {activeItemIndex + 1} of {designShowcaseData.length} Designs
                </span>
                <a
                  href={activeModalItem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#FD853A] hover:bg-[#e4732c] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Open HD File</span>
                  <Maximize2 size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
