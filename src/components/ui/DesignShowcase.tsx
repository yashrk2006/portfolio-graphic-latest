'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Wrench, Layers } from 'lucide-react';
import { designShowcaseData, DesignItem } from '@/data/data';

const categories = [
  'All Designs',
  'Branding & Web',
  'Social Media',
  'AI & Tech',
  'Posters & Artwork',
  'Video & Editing',
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

  const closeModal = () => setActiveModalItem(null);

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
    <section
      id="designs"
      className="w-full py-20 px-4 sm:px-6 lg:px-[72px] my-12 overflow-hidden relative rounded-[32px] sm:rounded-[48px]"
      style={{ backgroundColor: '#0E0E0E', border: '1px solid #1A1A1A' }}
    >
      {/* Subtle ambient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #E8703A 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #6B6B6B 0%, transparent 70%)' }} />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
        <span className="pill-tag mb-5">
          Featured Design Portfolio
        </span>
        <h2
          className="text-[#FAFAF7] mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
          }}
        >
          Creative Designs &amp;{' '}
          <em style={{ color: '#E8703A', fontStyle: 'italic' }}>Visual Stories</em>
        </h2>
        <p className="text-[#6B6B6B] text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          From brand identity and high-converting social media creatives to AI posters and dark fantasy artwork.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 cursor-pointer"
              style={{
                backgroundColor: selectedCategory === cat ? '#E8703A' : '#1A1A1A',
                color: selectedCategory === cat ? '#FFFFFF' : '#6B6B6B',
                border: `1px solid ${selectedCategory === cat ? '#E8703A' : '#2C2C2C'}`,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Design Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1300px] mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col transition-all duration-400 hover:-translate-y-1"
            style={{
              backgroundColor: '#141414',
              border: '1px solid #2C2C2C',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = '#E8703A50')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = '#2C2C2C')}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Category tag */}
              <div
                className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', color: '#FAFAF7', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {item.tag}
              </div>

              {/* Quick view hover */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(2px)' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                  style={{ backgroundColor: '#E8703A' }}>
                  <Maximize2 size={15} />
                  <span>Inspect Design</span>
                </div>
              </div>
            </div>

            {/* Card content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3
                  className="text-lg font-semibold mb-1.5 line-clamp-1 transition-colors duration-200 group-hover:text-[#E8703A]"
                  style={{ color: '#FAFAF7', fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#6B6B6B', fontFamily: "'Inter', sans-serif" }}>
                  {item.description}
                </p>
              </div>

              {/* Tools */}
              <div className="pt-4 flex items-center justify-between" style={{ borderTop: '1px solid #2C2C2C' }}>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.slice(0, 3).map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ backgroundColor: '#1A1A1A', color: '#D6D3CC', border: '1px solid #2C2C2C', fontFamily: "'Inter', sans-serif" }}
                    >
                      {tool}
                    </span>
                  ))}
                  {item.tools.length > 3 && (
                    <span className="px-2 py-1 rounded-lg text-xs" style={{ backgroundColor: '#1A1A1A', color: '#6B6B6B' }}>
                      +{item.tools.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold transition-transform duration-200 group-hover:translate-x-1" style={{ color: '#E8703A' }}>
                  View →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row text-white animate-scaleUp"
            style={{ backgroundColor: '#141414', border: '1px solid #2C2C2C' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
            >
              <X size={18} color="white" />
            </button>

            {/* Prev */}
            <button
              onClick={prevModalItem}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 hidden sm:flex hover:scale-105"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
            >
              <ChevronLeft size={22} color="white" />
            </button>

            {/* Next */}
            <button
              onClick={nextModalItem}
              className="absolute right-16 lg:right-[380px] top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 hidden sm:flex hover:scale-105"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
            >
              <ChevronRight size={22} color="white" />
            </button>

            {/* Image */}
            <div className="relative flex-1 min-h-[300px] lg:min-h-[600px] flex items-center justify-center p-4 overflow-auto"
              style={{ backgroundColor: '#0A0A0A' }}>
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

            {/* Sidebar */}
            <div
              className="w-full lg:w-[360px] xl:w-[400px] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[92vh]"
              style={{ backgroundColor: '#1A1A1A', borderLeft: '1px solid #2C2C2C' }}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: 'rgba(232,112,58,0.15)', color: '#E8703A', border: '1px solid rgba(232,112,58,0.3)' }}
                  >
                    {activeModalItem.category}
                  </span>
                  <span className="text-xs" style={{ color: '#6B6B6B' }}>{activeModalItem.tag}</span>
                </div>

                <h3
                  className="text-2xl font-bold mb-4 leading-tight"
                  style={{ color: '#FAFAF7', fontFamily: "'Playfair Display', serif" }}
                >
                  {activeModalItem.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6B6B', fontFamily: "'Inter', sans-serif" }}>
                  {activeModalItem.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: '#6B6B6B' }}>
                    <Layers size={13} style={{ color: '#E8703A' }} />
                    Design Highlights
                  </h4>
                  <ul className="space-y-2">
                    {activeModalItem.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs" style={{ color: '#D6D3CC' }}>
                        <CheckCircle2 size={14} style={{ color: '#E8703A', flexShrink: 0, marginTop: 1 }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: '#6B6B6B' }}>
                    <Wrench size={13} style={{ color: '#E8703A' }} />
                    Tools & Tech Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold"
                        style={{ backgroundColor: '#2C2C2C', color: '#D6D3CC', border: '1px solid #3A3A3A' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 flex items-center justify-between" style={{ borderTop: '1px solid #2C2C2C' }}>
                <span className="text-xs" style={{ color: '#6B6B6B' }}>
                  {activeItemIndex + 1} of {designShowcaseData.length}
                </span>
                <a
                  href={activeModalItem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  style={{ backgroundColor: '#E8703A' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
                >
                  Open HD
                  <Maximize2 size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
