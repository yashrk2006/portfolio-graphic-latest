"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const menuItems = [
        { label: "Home",     href: "#home" },
        { label: "About",    href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Designs",  href: "#designs" },
        { label: "Contact",  href: "#contact" },
    ];

    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
            <nav
                className={`relative w-full max-w-[1200px] mx-auto h-[68px] sm:h-[76px] flex items-center justify-between px-6 lg:px-8 rounded-full border transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#0E0E0E]/95 border-[#2C2C2C] backdrop-blur-xl shadow-2xl'
                        : 'bg-[#0E0E0E]/90 border-[#2C2C2C] backdrop-blur-md shadow-lg'
                }`}
                suppressHydrationWarning
            >
                {/* Left nav links (desktop) */}
                <div className="hidden lg:flex items-center gap-1">
                    {menuItems.slice(0, 2).map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setSelected(item.label)}
                            className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                                selected === item.label
                                    ? 'bg-[#E8703A] text-white'
                                    : 'text-[#D6D3CC] hover:text-white hover:bg-white/8'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Logo — center */}
                <Link href="#home" onClick={() => setSelected("Home")} className="flex items-center gap-2.5 flex-shrink-0 group">
                    <div className="w-9 h-9 bg-[#E8703A] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <span
                            className="text-white font-bold text-xs tracking-wider"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            YRK
                        </span>
                    </div>
                    <span
                        className="text-white font-semibold text-base tracking-wide hidden sm:block"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.04em' }}
                    >
                        YASH RAJ
                    </span>
                </Link>

                {/* Right nav links (desktop) */}
                <div className="hidden lg:flex items-center gap-1">
                    {menuItems.slice(2).map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setSelected(item.label)}
                            className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                                item.label === "Contact"
                                    ? 'bg-[#E8703A] text-white hover:bg-[#D4602C]'
                                    : selected === item.label
                                        ? 'bg-white/12 text-white'
                                        : 'text-[#D6D3CC] hover:text-white hover:bg-white/8'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#E8703A] hover:bg-[#D4602C] transition-colors text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>

                {/* Mobile dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#0E0E0E] border border-[#2C2C2C] rounded-3xl shadow-2xl lg:hidden z-40 overflow-hidden">
                        <div className="flex flex-col p-3 gap-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => {
                                        setSelected(item.label);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full h-[48px] flex items-center justify-center rounded-2xl text-sm font-medium transition-all duration-200 ${
                                        selected === item.label
                                            ? 'bg-[#E8703A] text-white'
                                            : 'text-[#D6D3CC] hover:text-white hover:bg-white/8'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar;
