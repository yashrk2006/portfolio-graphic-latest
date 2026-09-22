"use client";
import React, { useState } from "react";
import { Github, Linkedin, YoutubeIcon, InstagramIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const navigation = [
        { label: "Home",     href: "#home" },
        { label: "About",    href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Designs",  href: "#designs" },
        { label: "Contact",  href: "#contact" },
    ];

    const socialLinks = [
        { icon: Github,       url: "https://github.com/yashrk2006",                   label: "GitHub" },
        { icon: Linkedin,     url: "https://linkedin.com/in/yash-raj-722669327",       label: "LinkedIn" },
        { icon: YoutubeIcon,  url: "https://youtube.com/@yash_raj",                   label: "YouTube" },
        { icon: InstagramIcon,url: "https://instagram.com/yash_raj",                  label: "Instagram" },
    ];

    const contactItems = [
        { text: "+91 7974185707",         href: "tel:+917974185707" },
        { text: "kushwahayashraj1@gmail.com", href: "mailto:kushwahayashraj1@gmail.com" },
        { text: "Delhi, India",           href: "#contact" },
        { text: "LinkedIn: yash-raj-722669327", href: "https://linkedin.com/in/yash-raj-722669327" },
        { text: "GitHub: yashrk2006",     href: "https://github.com/yashrk2006" },
    ];

    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletterEmail) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 4000);
            setNewsletterEmail("");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="w-full px-4 sm:px-8 lg:px-[72px] py-16 lg:py-20 flex flex-col text-white"
            style={{ backgroundColor: '#0E0E0E', borderTop: '1px solid #1A1A1A' }}
            suppressHydrationWarning
        >
            {/* Top: CTA + Hire Button */}
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-12 border-b border-[#2C2C2C]">
                <div>
                    <p className="text-[#6B6B6B] text-sm font-medium uppercase tracking-widest mb-2">
                        Ready to work together?
                    </p>
                    <h2
                        className="text-[#FAFAF7] leading-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(32px, 5vw, 56px)',
                            fontWeight: 700,
                        }}
                    >
                        Let&apos;s Create<br />
                        <span style={{ color: '#E8703A' }}>Something Great</span>
                    </h2>
                </div>
                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:gap-4 shrink-0"
                    style={{ backgroundColor: '#E8703A' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
                >
                    Hire Me
                    <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
                </button>
            </div>

            {/* Mid: 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-b border-[#2C2C2C]">

                {/* Brand column */}
                <div className="flex flex-col gap-5 lg:col-span-1 sm:col-span-2">
                    <button onClick={scrollToTop} className="flex items-center gap-3 group w-fit">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#E8703A' }}>
                            <span className="text-white font-bold text-xs tracking-wider">YRK</span>
                        </div>
                        <span
                            className="text-[#FAFAF7] font-semibold text-lg tracking-wider"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            YASH RAJ
                        </span>
                    </button>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs">
                        Passionate about crafting high-impact graphic designs, cinematic video edits, brand identities, and AI content that captivate audiences.
                    </p>
                    <div className="flex gap-2">
                        {socialLinks.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                    style={{ backgroundColor: '#1A1A1A', border: '1px solid #2C2C2C' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1A1A1A')}
                                >
                                    <Icon size={15} color="#FAFAF7" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#E8703A' }}>
                        Navigation
                    </p>
                    <div className="flex flex-col gap-3">
                        {navigation.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="text-[#6B6B6B] text-sm transition-colors duration-200 hover:text-[#FAFAF7]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#E8703A' }}>
                        Contact
                    </p>
                    <div className="flex flex-col gap-3">
                        {contactItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-[#6B6B6B] text-sm transition-colors duration-200 hover:text-[#FAFAF7]"
                            >
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#E8703A' }}>
                        Stay in Touch
                    </p>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                        Get updates on new projects and creative work.
                    </p>
                    <form onSubmit={handleSubscribe} className="relative">
                        <input
                            type="email"
                            required
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            placeholder="Email address"
                            className="w-full h-12 bg-[#1A1A1A] text-[#FAFAF7] text-sm px-4 pr-14 rounded-xl border border-[#2C2C2C] outline-none placeholder:text-[#6B6B6B] focus:border-[#E8703A] transition-colors"
                        />
                        <button
                            type="submit"
                            className="absolute top-1 right-1 h-10 w-10 rounded-lg flex items-center justify-center transition-colors"
                            style={{ backgroundColor: '#E8703A' }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D4602C')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8703A')}
                        >
                            <ArrowUpRight size={16} color="white" />
                        </button>
                    </form>
                    {subscribed && (
                        <p className="text-xs font-semibold" style={{ color: '#E8703A' }}>
                            Thank you for subscribing!
                        </p>
                    )}
                </div>
            </div>

            {/* Bottom: copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                <p className="text-[#6B6B6B] text-sm text-center sm:text-left">
                    © 2026 Yash Raj Kushwaha. All Rights Reserved.
                </p>
                <Link
                    href="#"
                    className="text-[#6B6B6B] text-sm transition-colors hover:text-[#FAFAF7]"
                >
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
