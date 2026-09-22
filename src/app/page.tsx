'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Star, Image as ImageIcon, Video as VideoIcon, Sparkles,
  ExternalLink, GraduationCap, MapPin, Mail, Phone,
  Github, Linkedin, Briefcase, ArrowUpRight, ArrowRight
} from "lucide-react";
import {
  buttons, iconAndText, skills, portfolioData, cardData,
  photoEditingTools, videoEditingTools, aiTools, experiences
} from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import DesignShowcase from "@/components/ui/DesignShowcase";
import ServicesCard from "@/components/ui/ServicesCard";

// ─── Inline style helpers ────────────────────────────────────────────────────
const ORANGE = '#E8703A';
const CREAM  = '#FAFAF7';
const CHARCOAL = '#0E0E0E';
const CHARCOAL_SOFT = '#1A1A1A';
const CHARCOAL_MID  = '#2C2C2C';
const CHARCOAL_MUTED = '#6B6B6B';
const CREAM_MID = '#F0EEE9';
const DISPLAY = "'Playfair Display', Georgia, serif";
const BODY    = "'Inter', -apple-system, sans-serif";

export default function Home() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden"
      style={{ backgroundColor: CREAM, color: CHARCOAL }}
      suppressHydrationWarning
    >
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section id="home" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-16 pb-0">
        <div className="relative w-full max-w-[1200px] flex flex-col items-center">

          {/* Headline Block */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] px-4 sm:px-6">

            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-200 hover:gap-3"
              style={{
                border: `1px solid ${CHARCOAL}`,
                backgroundColor: 'transparent',
                color: CHARCOAL,
                fontFamily: BODY,
              }}
              onClick={() => scrollTo('designs')}
            >
              <span style={{ color: ORANGE }}>●</span>
              Creative Portfolio — Graphic Designer &amp; Video Editor
              <ArrowRight size={13} />
            </div>

            {/* Main headline */}
            <h1
              className="mb-4 text-center"
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(44px, 7.5vw, 104px)',
                fontWeight: 800,
                lineHeight: 1.01,
                letterSpacing: '-0.025em',
                color: CHARCOAL,
              }}
            >
              Visuals that make<br />
              people{' '}
              <em style={{ color: ORANGE, fontStyle: 'italic' }}>stop scrolling.</em>
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-8 max-w-xl"
              style={{
                fontFamily: BODY,
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 400,
                lineHeight: 1.65,
                color: CHARCOAL_MUTED,
              }}
            >
              I&apos;m <strong style={{ color: CHARCOAL, fontWeight: 600 }}>Yash Raj Kushwaha</strong> — graphic designer, CapCut video editor, and AI content creator based in Delhi, India.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              <span
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm"
                style={{ backgroundColor: CREAM_MID, border: `1px solid #E8E4DC`, color: CHARCOAL_MUTED, fontFamily: BODY }}
              >
                <MapPin size={13} style={{ color: ORANGE }} />
                Delhi, India
              </span>
              <a
                href="tel:+917974185707"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm transition-colors"
                style={{ backgroundColor: CREAM_MID, border: `1px solid #E8E4DC`, color: CHARCOAL_MUTED, fontFamily: BODY }}
              >
                <Phone size={13} style={{ color: ORANGE }} />
                +91 7974185707
              </a>
              <a
                href="mailto:kushwahayashraj1@gmail.com"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm transition-colors"
                style={{ backgroundColor: CREAM_MID, border: `1px solid #E8E4DC`, color: CHARCOAL_MUTED, fontFamily: BODY }}
              >
                <Mail size={13} style={{ color: ORANGE }} />
                kushwahayashraj1@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
              <a
                href="https://linkedin.com/in/yash-raj-722669327"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:text-white"
                style={{ backgroundColor: 'rgba(10,102,194,0.08)', border: '1px solid rgba(10,102,194,0.2)', color: '#0A66C2', fontFamily: BODY }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0A66C2'; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(10,102,194,0.08)'; (e.currentTarget as HTMLAnchorElement).style.color = '#0A66C2'; }}
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              <a
                href="https://github.com/yashrk2006"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={{ backgroundColor: `rgba(14,14,14,0.07)`, border: '1px solid rgba(14,14,14,0.15)', color: CHARCOAL, fontFamily: BODY }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = CHARCOAL; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(14,14,14,0.07)'; (e.currentTarget as HTMLAnchorElement).style.color = CHARCOAL; }}
              >
                <Github size={13} /> GitHub
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-200 hover:gap-3 shadow-lg cursor-pointer"
                style={{ backgroundColor: ORANGE, fontFamily: BODY, boxShadow: `0 8px 32px ${ORANGE}44` }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
              >
                Hire Me
                <ArrowUpRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('designs')}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:gap-3 cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  border: `1.5px solid ${CHARCOAL}`,
                  color: CHARCOAL,
                  fontFamily: BODY,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = CHARCOAL; (e.currentTarget as HTMLButtonElement).style.color = CREAM; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = CHARCOAL; }}
              >
                View Works
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="w-full max-w-[1100px] mt-16 mb-0 relative rounded-3xl overflow-hidden group/banner" style={{ border: `1px solid #E8E4DC` }}>
            <div className="relative w-full aspect-[16/7] overflow-hidden" style={{ backgroundColor: CHARCOAL }}>
              <Image
                src="/portfolio-images/brand-showcase-hero.png"
                alt="Yash Raj Kushwaha - Graphic Designer & Video Editor Portfolio"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover/banner:scale-105"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,14,14,0.9) 0%, rgba(14,14,14,0.3) 50%, transparent 100%)' }} />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
                <div>
                  <span
                    className="px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Graphic Design · Video Editing · AI Content
                  </span>
                  <h3
                    className="text-white text-xl sm:text-3xl font-bold drop-shadow-md mt-1"
                    style={{ fontFamily: DISPLAY }}
                  >
                    Creative Work That Speaks for Itself
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-xl" style={{ fontFamily: BODY }}>
                    Social media content, YouTube Shorts, Instagram Reels, branding assets, AI visuals.
                  </p>
                </div>
                <button
                  onClick={() => scrollTo('designs')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shrink-0 cursor-pointer"
                  style={{ backgroundColor: 'white', color: CHARCOAL }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ORANGE; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'white'; (e.currentTarget as HTMLButtonElement).style.color = CHARCOAL; }}
                >
                  Inspect All Designs
                  <ExternalLink size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Hero portrait + stats */}
          <div className="relative w-full max-w-[800px] flex flex-col items-center mt-0">
            {/* Warm half-circle bg */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[600px] aspect-[2/1] overflow-hidden pointer-events-none">
              <div className="absolute w-full h-full rounded-t-full" style={{ backgroundColor: '#FDE8D0' }} />
            </div>
            <Image
              src="/yash-Photoroom.png"
              alt="Yash Raj Kushwaha"
              width={800}
              height={540}
              className="relative z-10 w-[55%] sm:w-[45%] h-auto object-contain animate-float"
              priority
            />

            {/* Stats floating badges */}
            <div
              className="absolute top-12 right-4 lg:right-0 flex flex-col items-end gap-1 bg-white px-4 py-3 rounded-2xl shadow-md border"
              style={{ borderColor: '#E8E4DC' }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={ORANGE} stroke={ORANGE} />
                ))}
              </div>
              <span className="font-bold text-lg leading-none" style={{ color: CHARCOAL, fontFamily: DISPLAY }}>40+</span>
              <span className="text-xs font-medium" style={{ color: CHARCOAL_MUTED }}>Hackathon Contributor</span>
            </div>

            <div
              className="absolute top-12 left-4 lg:left-0 bg-white px-4 py-3 rounded-2xl shadow-md border"
              style={{ borderColor: '#E8E4DC' }}
            >
              <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: ORANGE }}>Available for</span>
              <span className="text-sm font-semibold" style={{ color: CHARCOAL, fontFamily: BODY }}>Freelance Work</span>
              <span className="w-2 h-2 rounded-full inline-block ml-1.5 bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════════ */}
      <section
        id="services"
        className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-[72px] py-20 lg:py-28 overflow-hidden rounded-[32px] sm:rounded-[48px] my-12"
        style={{ backgroundColor: CHARCOAL }}
      >
        <Image src="/Frame 77.svg" alt="" fill className="object-cover absolute opacity-30" />

        <div className="relative z-10 w-full max-w-[1200px]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
            <div>
              <span className="section-label mb-3 inline-block" style={{ fontFamily: BODY }}>What I Do</span>
              <h2 style={{ fontFamily: DISPLAY, fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.015em', color: CREAM }}>
                My <em style={{ color: ORANGE, fontStyle: 'italic' }}>Services</em>
              </h2>
            </div>
            <p
              className="max-w-md pt-2"
              style={{ fontFamily: BODY, fontSize: '1.05rem', lineHeight: 1.7, color: '#9A9A9A' }}
            >
              Hands-on experience in social media content, CapCut video editing, Canva &amp; Photoshop graphic design, AI generation, and digital marketing.
            </p>
          </div>

          {/* Cards grid — 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cardData.map((card, index) => (
              <ServicesCard key={index} title={card.title} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TOOLKIT
      ═══════════════════════════════════════════════════════ */}
      <section
        id="tools"
        className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[72px] py-20 lg:py-28"
        style={{ backgroundColor: CREAM }}
      >
        <div className="w-full max-w-[1200px]">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-3">
            <span className="section-label" style={{ fontFamily: BODY }}>Arsenal</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.015em', color: CHARCOAL }}>
              Toolkit &amp; <span style={{ color: ORANGE }}>Core Skillset</span>
            </h2>
            <p style={{ fontFamily: BODY, fontSize: '1.05rem', lineHeight: 1.65, color: CHARCOAL_MUTED, maxWidth: '560px' }}>
              My creative weapons for CapCut video editing, Canva &amp; Photoshop graphic design, AI prompt writing, and social media branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Graphic Design */}
            <div
              className="flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ backgroundColor: '#F5F5F2', border: `1px solid #E8E4DC` }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${ORANGE}18` }}>
                <ImageIcon style={{ color: ORANGE }} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: CHARCOAL, fontFamily: DISPLAY }}>Graphic Design</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: CHARCOAL_MUTED, fontFamily: BODY }}>
                Canva, Adobe Photoshop, social media posts, stories, thumbnails, promotional creatives, and branding.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {photoEditingTools.map((tool, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: 'white', border: '1px solid #E8E4DC', color: CHARCOAL, fontFamily: BODY }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Editing — dark featured */}
            <div
              className="flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ backgroundColor: CHARCOAL_SOFT, border: `1px solid ${CHARCOAL_MID}` }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = ORANGE)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = CHARCOAL_MID)}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: ORANGE }}>
                <VideoIcon style={{ color: 'white' }} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: CREAM, fontFamily: DISPLAY }}>Video Editing</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#9A9A9A', fontFamily: BODY }}>
                CapCut, Instagram Reels, YouTube Shorts, promotional videos, captions, transitions, music &amp; sound effects.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {videoEditingTools.map((tool, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: CHARCOAL_MID, border: '1px solid #3A3A3A', color: '#D6D3CC', fontFamily: BODY }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Content */}
            <div
              className="flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ backgroundColor: '#F5F5F2', border: `1px solid #E8E4DC` }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${ORANGE}18` }}>
                <Sparkles style={{ color: ORANGE }} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: CHARCOAL, fontFamily: DISPLAY }}>AI Content &amp; SEO</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: CHARCOAL_MUTED, fontFamily: BODY }}>
                AI-assisted image/video generation, prompt writing, visual concepts, creative briefs, basic SEO &amp; optimization.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {aiTools.map((tool, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: 'white', border: '1px solid #E8E4DC', color: CHARCOAL, fontFamily: BODY }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          EXPERIENCE
      ═══════════════════════════════════════════════════════ */}
      <section
        id="experience"
        className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[72px] py-20 lg:py-28"
        style={{ backgroundColor: CREAM_MID, borderTop: '1px solid #E8E4DC', borderBottom: '1px solid #E8E4DC' }}
      >
        <div className="w-full max-w-[1200px] flex flex-col gap-14">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: `${ORANGE}12`, border: `1px solid ${ORANGE}40`, color: ORANGE, fontFamily: BODY }}
            >
              <Briefcase size={13} />
              Work History
            </div>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.015em', color: CHARCOAL }}>
              Professional <span style={{ color: ORANGE }}>Experience</span>
            </h2>
            <p style={{ fontFamily: BODY, fontSize: '1rem', color: CHARCOAL_MUTED, lineHeight: 1.65 }}>
              Proven track record in digital content creation, founder leadership, and short-form video production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'white', border: '1px solid #E8E4DC' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${ORANGE}12`, color: ORANGE, fontFamily: BODY }}
                  >
                    {exp.duration}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ORANGE }} />
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: CHARCOAL, fontFamily: DISPLAY }}
                >
                  {exp.company}
                </h3>
                <p className="font-semibold text-sm mb-4" style={{ color: ORANGE, fontFamily: BODY }}>{exp.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: CHARCOAL_MUTED, fontFamily: BODY }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════════ */}
      <section
        id="about"
        className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[72px] py-20 lg:py-28 gap-12 lg:gap-20 max-w-[1200px] mx-auto my-12 rounded-3xl"
        style={{ backgroundColor: CREAM_MID, border: '1px solid #E8E4DC' }}
      >
        {/* Portrait */}
        <div className="relative w-full max-w-[440px] aspect-square group mx-auto lg:mx-0 shrink-0">
          <Image
            src="/yash-Photoroom.png"
            alt="Yash Raj Kushwaha"
            fill
            className="object-contain object-top z-10 transition-transform duration-500 ease-in-out group-hover:translate-y-2"
            priority
          />
          <Image
            src="/Property 1=Variant2.svg"
            alt=""
            fill
            className="object-contain absolute -translate-y-4 transition-all duration-500 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-105"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full max-w-xl flex flex-col items-start gap-7">
          <div>
            <span className="section-label mb-3 inline-block" style={{ fontFamily: BODY }}>About Me</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.015em', color: CHARCOAL }}>
              Why Work<br /><span style={{ color: ORANGE }}>With Me?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4" style={{ fontFamily: BODY, fontSize: '1rem', lineHeight: 1.7, color: CHARCOAL_MUTED }}>
            <p>
              I am a <strong style={{ color: CHARCOAL }}>Creative Graphic Designer &amp; Video Editor</strong> pursuing <strong style={{ color: CHARCOAL }}>B.Sc. (Hons.) Computer Science at Dyal Singh College, University of Delhi</strong> (Expected 2027).
            </p>
            <p>
              Skilled in CapCut, Canva, Adobe Photoshop, and generative AI tools, I specialize in crafting high-hook short-form videos (Reels &amp; Shorts), promotional graphics, thumbnails, and brand identity suites.
            </p>
          </div>

          {/* Education card */}
          <div
            className="w-full p-5 rounded-2xl flex items-start gap-4"
            style={{ backgroundColor: 'white', border: '1px solid #E8E4DC' }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${ORANGE}12` }}>
              <GraduationCap style={{ color: ORANGE }} size={22} />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-0.5" style={{ color: CHARCOAL, fontFamily: BODY }}>B.Sc. (Hons.) Computer Science</h4>
              <p className="text-xs" style={{ color: CHARCOAL_MUTED, fontFamily: BODY }}>Dyal Singh College, University of Delhi · Expected 2027</p>
            </div>
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2.5">
            {["Canva & Photoshop", "CapCut Reels & Shorts", "AI Prompt Writing", "40+ Hackathons"].map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'white', border: '1px solid #E8E4DC', color: CHARCOAL, fontFamily: BODY }}
              >
                {s}
              </span>
            ))}
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-200 hover:gap-4 cursor-pointer shadow-lg"
            style={{ backgroundColor: ORANGE, fontFamily: BODY, boxShadow: `0 8px 32px ${ORANGE}44` }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
          >
            Hire Me
            <ArrowUpRight size={20} />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PORTFOLIO HIGHLIGHTS SLIDER
      ═══════════════════════════════════════════════════════ */}
      <section
        id="portfolio-highlights"
        className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[72px] py-20 lg:py-24 gap-12"
        style={{ backgroundColor: CREAM }}
      >
        <div className="w-full max-w-[1200px] flex flex-col sm:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col items-start max-w-lg">
            <span className="section-label mb-3 inline-block" style={{ fontFamily: BODY }}>Portfolio</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 'clamp(32px, 4.5vw, 64px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.015em', color: CHARCOAL }}>
              Let&apos;s look at my<br />
              <span style={{ color: ORANGE }}>Design Portfolio</span>
            </h2>
          </div>
          <button
            onClick={() => scrollTo('designs')}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:gap-3 cursor-pointer shrink-0"
            style={{ backgroundColor: ORANGE, color: 'white', fontFamily: BODY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
          >
            View Full Gallery <ArrowRight size={15} />
          </button>
        </div>

        <div className="w-full max-w-[1200px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />
        </div>

        {/* Category filter buttons */}
        <div className="w-full max-w-[900px] flex flex-wrap justify-center gap-3">
          {buttons.map((text, index) => (
            <button
              key={index}
              onClick={() => scrollTo('designs')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: CREAM_MID, color: CHARCOAL, border: '1px solid #E8E4DC', fontFamily: BODY }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = CHARCOAL; (e.currentTarget as HTMLButtonElement).style.color = CREAM; (e.currentTarget as HTMLButtonElement).style.borderColor = CHARCOAL; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = CREAM_MID; (e.currentTarget as HTMLButtonElement).style.color = CHARCOAL; (e.currentTarget as HTMLButtonElement).style.borderColor = '#E8E4DC'; }}
            >
              {text}
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURED DESIGN GALLERY
      ═══════════════════════════════════════════════════════ */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <DesignShowcase />
      </div>

      {/* ═══════════════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="w-full flex flex-col items-center py-20 lg:py-28 px-4 sm:px-6 lg:px-[72px]"
        style={{ backgroundColor: CREAM }}
      >
        <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6">
          <span className="section-label" style={{ fontFamily: BODY }}>Contact</span>
          <h2 style={{ fontFamily: DISPLAY, fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.015em', color: CHARCOAL }}>
            Have a project in mind?<br />
            <span style={{ color: ORANGE }}>Let&apos;s talk.</span>
          </h2>
          <p style={{ fontFamily: BODY, fontSize: '1.05rem', color: CHARCOAL_MUTED, lineHeight: 1.65, maxWidth: '520px' }}>
            Drop your email and I&apos;ll get back to you within 24 hours. Or reach out directly below.
          </p>

          {/* Email row */}
          <div
            className="w-full flex items-center gap-3 px-3 py-2 rounded-full shadow-sm"
            style={{ border: `1.5px solid #E8E4DC`, backgroundColor: 'white' }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full shrink-0" style={{ backgroundColor: `${ORANGE}12` }}>
              <Mail size={18} style={{ color: ORANGE }} />
            </div>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-2 px-3 outline-none bg-transparent text-base"
              style={{ color: CHARCOAL, fontFamily: BODY }}
            />
            <a
              href="mailto:kushwahayashraj1@gmail.com"
              className="px-7 py-3 rounded-full text-white font-semibold text-sm transition-colors cursor-pointer"
              style={{ backgroundColor: ORANGE, fontFamily: BODY }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ORANGE)}
            >
              Send
            </a>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
            {iconAndText.map((data, index) => {
              const Icon = data.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-sm font-medium" style={{ color: CHARCOAL, fontFamily: BODY }}>
                  <Icon size={17} style={{ color: ORANGE }} />
                  {data.name}
                </div>
              );
            })}
          </div>

          {/* Direct contact links */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a href="tel:+917974185707"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
              style={{ backgroundColor: CREAM_MID, border: '1px solid #E8E4DC', color: CHARCOAL, fontFamily: BODY }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = CHARCOAL; (e.currentTarget as HTMLAnchorElement).style.color = CREAM; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = CREAM_MID; (e.currentTarget as HTMLAnchorElement).style.color = CHARCOAL; }}
            >
              <Phone size={13} /> +91 7974185707
            </a>
            <a href="mailto:kushwahayashraj1@gmail.com"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
              style={{ backgroundColor: CREAM_MID, border: '1px solid #E8E4DC', color: CHARCOAL, fontFamily: BODY }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = CHARCOAL; (e.currentTarget as HTMLAnchorElement).style.color = CREAM; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = CREAM_MID; (e.currentTarget as HTMLAnchorElement).style.color = CHARCOAL; }}
            >
              <Mail size={13} /> kushwahayashraj1@gmail.com
            </a>
            <a href="https://linkedin.com/in/yash-raj-722669327" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
              style={{ backgroundColor: 'rgba(10,102,194,0.08)', border: '1px solid rgba(10,102,194,0.2)', color: '#0A66C2', fontFamily: BODY }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0A66C2'; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(10,102,194,0.08)'; (e.currentTarget as HTMLAnchorElement).style.color = '#0A66C2'; }}
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            <a href="https://github.com/yashrk2006" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
              style={{ backgroundColor: 'rgba(14,14,14,0.07)', border: '1px solid rgba(14,14,14,0.15)', color: CHARCOAL, fontFamily: BODY }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = CHARCOAL; (e.currentTarget as HTMLAnchorElement).style.color = CREAM; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(14,14,14,0.07)'; (e.currentTarget as HTMLAnchorElement).style.color = CHARCOAL; }}
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SKILLS MARQUEE
      ═══════════════════════════════════════════════════════ */}
      <div className="relative w-full h-[140px] overflow-hidden my-0" style={{ backgroundColor: ORANGE }}>
        {/* Diagonal white strip */}
        <div
          className="absolute w-[5000px] h-[60px] bg-[#FAFAF7] z-10 flex items-center"
          style={{ transform: 'rotate(-1.8deg)', marginTop: '-2px', marginLeft: '-12px' }}
        >
          <div className="marquee flex gap-10 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 whitespace-nowrap"
                style={{ color: CHARCOAL, fontFamily: DISPLAY, fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700 }}
              >
                <span style={{ color: ORANGE, fontSize: '0.7em' }}>✦</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}