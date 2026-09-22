'use client';

import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star, Image as ImageIcon, Video as VideoIcon, Sparkles, Maximize2, ExternalLink, GraduationCap, MapPin, Mail, Phone, Github, Linkedin, Briefcase, Award } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import { buttons, iconAndText, skills, portfolioData, cardData, photoEditingTools, videoEditingTools, aiTools, experiences } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import DesignShowcase from "@/components/ui/DesignShowcase";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDesigns = () => {
    document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-start" suppressHydrationWarning>
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="group flex flex-col w-full px-4 sm:px-6 md:px-8 items-center justify-center pt-20 pb-20">
        <div className="relative w-full max-w-[1290px] flex flex-col items-center justify-center">

          {/* Intro Badge & Title */}
          <div className="relative z-30 flex w-full max-w-[952px] flex-col items-center justify-center px-4 sm:px-6 text-center">
            <button
              onClick={scrollToDesigns}
              className="h-[45px] px-[26px] py-[13px] rounded-full border border-[#171717] flex items-center justify-center bg-white mt-6 font-semibold tracking-wide text-[#171717] hover:bg-[#FD853A] hover:text-white hover:border-[#FD853A] transition-all duration-300 cursor-pointer shadow-sm text-sm sm:text-base"
            >
              Creative Portfolio &bull; Graphic Designer & Video Editor &rarr;
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 mb-1 mt-6 sm:mt-8 text-center">
              <CustomeText title="I&apos;m" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              <CustomeText title="Yash Raj Kushwaha," className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
            </div>
            <CustomeText title="Graphic Designer & Video Editor" className="text-[#171717] font-semibold text-3xl sm:text-4xl md:text-6xl xl:text-[72px] text-center" />

            {/* Quick Contact & Profile Info Chips */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4 text-sm font-medium text-[#475467]">
              <span className="flex items-center gap-1.5 bg-[#F2F4F7] px-3.5 py-1.5 rounded-full border border-[#EAECF0]">
                <MapPin size={15} className="text-[#FD853A]" />
                Delhi, India
              </span>
              <a href="tel:+917974185707" className="flex items-center gap-1.5 bg-[#F2F4F7] px-3.5 py-1.5 rounded-full border border-[#EAECF0] hover:text-[#FD853A]">
                <Phone size={15} className="text-[#FD853A]" />
                +91 7974185707
              </a>
              <a href="mailto:kushwahayashraj1@gmail.com" className="flex items-center gap-1.5 bg-[#F2F4F7] px-3.5 py-1.5 rounded-full border border-[#EAECF0] hover:text-[#FD853A]">
                <Mail size={15} className="text-[#FD853A]" />
                kushwahayashraj1@gmail.com
              </a>
            </div>

            {/* Social & Portfolio Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-3 text-xs sm:text-sm font-semibold">
              <a
                href="https://linkedin.com/in/yash-raj-722669327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2] hover:text-white px-4 py-1.5 rounded-full transition-colors border border-[#0A66C2]/20"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/yashrk2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#171717] bg-[#171717]/10 hover:bg-[#171717] hover:text-white px-4 py-1.5 rounded-full transition-colors border border-[#171717]/20"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://zorvia02-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#FD853A] bg-[#FD853A]/10 hover:bg-[#FD853A] hover:text-white px-4 py-1.5 rounded-full transition-colors border border-[#FD853A]/30"
              >
                <ExternalLink size={14} />
                Live Portfolio
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full bg-[#FD853A] text-white font-bold text-lg hover:bg-[#e4732c] shadow-lg shadow-[#FD853A]/30 transition-all duration-300 cursor-pointer"
              >
                Hire Me &rarr;
              </button>
              <button
                onClick={scrollToDesigns}
                className="px-8 py-3.5 rounded-full bg-[#F2F4F7] text-[#171717] font-semibold text-lg hover:bg-[#E4E7EC] transition-all duration-300 cursor-pointer"
              >
                View Works
              </button>
            </div>
          </div>

          {/* Official Graphic Designer Profile Banner Showcase */}
          <div className="w-full max-w-[1200px] mt-10 mb-8 relative rounded-3xl overflow-hidden border-2 border-[#171717]/10 shadow-2xl group/banner">
            <div className="relative w-full aspect-[16/7] bg-[#0E1015] overflow-hidden">
              <Image
                src="/portfolio-images/brand-showcase-hero.png"
                alt="Yash Raj Kushwaha - Graphic Designer & Video Editor Portfolio Banner"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover/banner:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10 text-white">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FD853A] text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    Founder @ Zorvia Digital
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-white drop-shadow-md">
                    Creative Graphic Designer & Video Editor
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mt-1 drop-shadow-sm">
                    Creating social media content, YouTube Shorts, Instagram Reels, promotional creatives, thumbnails, branding assets and AI-assisted visual content.
                  </p>
                </div>
                <button
                  onClick={scrollToDesigns}
                  className="px-5 py-2.5 rounded-full bg-white text-[#171717] font-bold text-sm hover:bg-[#FD853A] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg shrink-0 cursor-pointer"
                >
                  <span>Inspect All Designs</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image & Badge Row */}
          <div className="relative w-full max-w-[952px] flex flex-col items-center justify-center mx-auto px-4 mt-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <Image
              src="/yash-Photoroom.png"
              alt="Yash Raj Kushwaha"
              width={952}
              height={636}
              className="relative z-20 w-[60%] h-auto object-contain"
              priority
            />

            <div className="absolute bottom-[-20px] translate-y-full z-30 w-full hidden md:flex justify-center">
              <DualToggleButtons />
            </div>
          </div>

          <div className="hidden lg:flex absolute top-12 right-4 flex-col items-end justify-end gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FD853A" stroke="#FD853A" />
              ))}
            </div>
            <h1 className="text-[28px] font-bold text-[#171717] leading-none whitespace-nowrap">
              40+ Hackathons
            </h1>
            <p className="text-xs font-semibold text-[#171717]">Creative Contributor</p>
          </div>

        </div>
      </div>

      {/* Services */}
      <div id="services" className="relative flex flex-col w-full min-h-[878px] gap-16 sm:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-16 sm:py-[116px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10 max-w-[1290px]">
          <div className="flex gap-2.5">
            <CustomeText title="My" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Services" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-base sm:text-lg lg:text-[20px] text-white">
            Hands-on experience in social media content, CapCut video editing, Canva & Photoshop graphic design, AI generation, and digital marketing.
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-start justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-[500px] sm:h-[550px]"
            cardType="hover"
          />
        </div>
      </div>

      {/* Photo & Video Editing Tools Showcase Section */}
      <div id="tools" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-16 lg:py-24 bg-white gap-12">
        <div className="flex flex-col items-center text-center max-w-3xl gap-4">
          <div className="flex gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold flex-wrap justify-center">
            <CustomeText title="Tools &" className="text-[#344054]" />
            <CustomeText title="Core Skillset" className="text-[#FD853A]" />
          </div>
          <p className="text-[#667085] text-lg sm:text-xl max-w-2xl">
            My core creative toolkit for CapCut video editing, Canva & Photoshop graphic design, AI prompt writing, and social media branding.
          </p>
        </div>

        <div className="w-full max-w-[1290px] grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Photo Editing Tools */}
          <div className="flex flex-col bg-[#F9FAFB] p-8 rounded-[32px] border border-[#EAECF0] hover:border-[#FD853A] transition-all duration-300 shadow-sm hover:shadow-lg group">
            <div className="w-14 h-14 rounded-2xl bg-[#FFEAD5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ImageIcon className="text-[#FD853A]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1D2939] mb-2">Graphic Design</h3>
            <p className="text-sm text-[#667085] mb-6">Canva, Adobe Photoshop, social media posts, stories, thumbnails, promotional creatives, and branding assets.</p>
            <div className="flex flex-wrap gap-2.5">
              {photoEditingTools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-full border border-[#D0D5DD] text-[#344054] text-sm font-semibold shadow-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Video Editing Tools */}
          <div className="flex flex-col bg-[#171717] p-8 rounded-[32px] border border-[#344054] hover:border-[#FD853A] transition-all duration-300 shadow-md group text-white">
            <div className="w-14 h-14 rounded-2xl bg-[#FD853A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <VideoIcon className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Video Editing</h3>
            <p className="text-sm text-[#98A2B3] mb-6">CapCut, Instagram Reels, YouTube Shorts, promotional videos, captions, transitions, music & sound effects.</p>
            <div className="flex flex-wrap gap-2.5">
              {videoEditingTools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-[#272727] rounded-full border border-[#475467] text-[#FCFCFD] text-sm font-semibold shadow-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* AI Creative Tools */}
          <div className="flex flex-col bg-[#F9FAFB] p-8 rounded-[32px] border border-[#EAECF0] hover:border-[#FD853A] transition-all duration-300 shadow-sm hover:shadow-lg group">
            <div className="w-14 h-14 rounded-2xl bg-[#FFEAD5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="text-[#FD853A]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#1D2939] mb-2">AI Content & SEO</h3>
            <p className="text-sm text-[#667085] mb-6">AI-assisted image/video generation, prompt writing, visual concepts, creative briefs, basic SEO & content optimization.</p>
            <div className="flex flex-wrap gap-2.5">
              {aiTools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-full border border-[#D0D5DD] text-[#344054] text-sm font-semibold shadow-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Authentic Work Experience Section */}
      <div id="experience" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-16 lg:py-24 bg-[#F9FAFB] border-y border-[#EAECF0]">
        <div className="w-full max-w-[1290px] flex flex-col gap-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FD853A]/10 border border-[#FD853A]/30 text-[#FD853A] text-sm font-bold">
              <Briefcase size={16} />
              <span>Work History & Accomplishments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1D2939]">
              Professional <span className="text-[#FD853A]">Experience</span>
            </h2>
            <p className="text-[#667085] text-base sm:text-lg">
              Proven track record in digital content creation, founder leadership, and short-form video production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-[32px] border border-[#EAECF0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FFEAD5] text-[#FD853A] font-bold text-xs">
                      {exp.duration}
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#FD853A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D2939] mb-1">{exp.company}</h3>
                  <p className="text-[#FD853A] font-semibold text-sm mb-4">{exp.role}</p>
                  <p className="text-[#667085] text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Me / About */}
      <div id="about" className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px] max-w-[1290px] mx-auto my-12">
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
          <Image
            src="/yash-Photoroom.png"
            alt="Yash Raj Kushwaha"
            fill
            className="object-contain object-top z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            priority
          />

          <Image
            src="/Property 1=Variant2.svg"
            alt="Frame Variant"
            fill
            className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            priority
          />
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="About Me &" className="text-[#344054]" />
            <CustomeText title="Why Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          <div className="flex flex-col gap-4 text-[#667085] text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am a <strong>Creative Graphic Designer & Video Editor</strong> pursuing <strong>B.Sc. (Hons.) Computer Science at Dyal Singh College, University of Delhi</strong> (Expected 2027).
            </p>
            <p>
              Skilled in CapCut, Canva, Adobe Photoshop, and generative AI tools, I specialize in crafting high-hook short-form videos (Reels & Shorts), promotional graphics, thumbnails, and brand identity suites.
            </p>
          </div>

          {/* Education Highlight Card */}
          <div className="w-full bg-white p-5 rounded-2xl border border-[#D0D5DD] flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFEAD5] flex items-center justify-center shrink-0">
              <GraduationCap className="text-[#FD853A]" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#1D2939] text-base">B.Sc. (Hons.) Computer Science</h4>
              <p className="text-xs text-[#667085]">Dyal Singh College, University of Delhi | Expected 2027</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 w-full">
            <span className="px-4 py-2 rounded-full bg-white border border-[#D0D5DD] text-[#1D2939] font-semibold text-sm">
              📸 Canva & Photoshop
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-[#D0D5DD] text-[#1D2939] font-semibold text-sm">
              🎬 CapCut Reels & Shorts
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-[#D0D5DD] text-[#1D2939] font-semibold text-sm">
              🤖 AI Prompt Writing
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-[#D0D5DD] text-[#1D2939] font-semibold text-sm">
              🏆 40+ Hackathons
            </span>
          </div>

          <button
            onClick={scrollToContact}
            className="w-full text-center cursor-pointer sm:w-auto px-8 py-4 rounded-[20px] bg-[#FD853A] text-white font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#e4732c] shadow-lg shadow-[#FD853A]/30"
          >
            Hire Me &rarr;
          </button>
        </div>
      </div>

      {/* Design Portfolio Slider */}
      <div id="portfolio-highlights" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6 max-w-[1290px]">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="my"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
              />
              <CustomeText
                title="Design Portfolio"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#FD853A]"
              />
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={scrollToDesigns}
              className="px-6 py-3 rounded-full bg-[#FD853A] text-white font-bold hover:bg-[#e4732c] transition-colors cursor-pointer shadow-md"
            >
              View Full Gallery &rarr;
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-4 sm:gap-[14px] items-center">
            {buttons.map((text, index) => (
              <button
                key={index}
                onClick={scrollToDesigns}
                className="px-6 sm:px-8 py-3 rounded-[24px] bg-[#F2F4F7] text-[#000000] text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#FD853A] hover:text-white transition-colors duration-300 font-medium cursor-pointer"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Interactive Design Showcase Gallery */}
      <DesignShowcase />

      {/* Contact Section */}
      <div id="contact" className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Have an Awesome Project"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white shadow-sm">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <Image
              src="/sms.svg"
              alt="message icon"
              width={24}
              height={24}
            />
          </div>

          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
          />

          <a
            href="mailto:kushwahayashraj1@gmail.com"
            className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300 cursor-pointer flex items-center justify-center"
          >
            Send
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} className="text-[#FD853A]" />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Slider Marquee */}
      <div className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden my-8">
        <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[36px] sm:text-[48px] font-bold whitespace-nowrap"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}


