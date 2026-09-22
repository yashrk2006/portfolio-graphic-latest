"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const menuItems = [
        { label: "Home" },
        { label: "About" },
        { label: "Services" },
        { label: "Tools" },
        { label: "Experience" },
        { label: "Designs" },
        { label: "Contact" },
    ];
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <nav className="relative w-full max-w-[1298px] h-[70px] sm:h-[80px] lg:h-[86px] bg-[#171717]/95 text-white px-10 lg:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white/20 mx-auto flex items-center justify-between shadow-2xl" suppressHydrationWarning>
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-2.5">
                {menuItems.slice(0, 3).map((item) => (
                    <Link
                        key={item.label}
                        href={`#${item.label.toLowerCase()}`}
                        className={`w-[139px] h-[66px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold text-white' : 'bg-transparent hover:bg-[#232323] text-white'}`}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <text x="4" y="18" fontSize="12" fontWeight="bold" fill="white">YK</text>
                    </svg>
                </div>
                <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wide">YASH RAJ</span>
            </div>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end gap-4">
                {menuItems.slice(3).map((item) => (
                    <Link
                        key={item.label}
                        href={`#${item.label.toLowerCase()}`}
                        className={`w-[139px] h-[66px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold text-white' : 'bg-transparent hover:bg-[#232323] text-white'}`}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] border border-white backdrop-blur-[15px] lg:hidden z-40">
                    <div className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={`#${item.label.toLowerCase()}`}
                                className={`w-full h-[50px] flex items-center justify-center rounded-[25px] text-base font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] font-bold text-white' : 'bg-transparent hover:bg-[#232323] text-white'}`}
                                onClick={() => {
                                    setSelected(item.label);
                                    setIsMobileMenuOpen(false);
                                }}
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
