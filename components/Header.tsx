"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Home, User, BookOpen, Package, Lightbulb, GraduationCap, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Inicio", icon: Home },
        { href: "/clases-particulares", label: "Clases Particulares", icon: GraduationCap },
        {
            label: "Recursos",
            icon: Package,
            children: [
                { href: "/material-didactico", label: "Material Didáctico", icon: Package },
                { href: "/tecnicas-de-estudio", label: "Técnicas de Estudio", icon: Lightbulb },
            ]
        },
        { href: "/blog", label: "Blog", icon: BookOpen },
        { href: "/contacto", label: "Contacto", icon: User },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-primary transition-all duration-400 ${scrolled ? "shadow-md" : ""
                }`}
        >
            <div className="container mx-auto px-6 h-14 md:h-20 flex items-center justify-between relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="Educabea Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-white font-display text-lg md:text-xl font-medium tracking-wide">
                        Beatriz Olivares Castellanos
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link, idx) => (
                        link.children ? (
                            <DropdownNavLink key={idx} {...link} />
                        ) : (
                            <NavLink key={link.href} {...link} />
                        )
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link href="/contacto" className="hidden md:block bg-secondary text-primary font-medium py-2 px-5 rounded-full hover:bg-white transition-colors duration-300 shadow-md transform hover:scale-105 text-sm">
                    Reserva tu plaza
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Decorative Bottom Border (Dotted Line) */}
            <div
                className={`absolute bottom-0 left-0 w-full h-[2px] transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"
                    }`}
                style={{
                    backgroundImage: "linear-gradient(90deg, var(--color-text-light) 50%, transparent 50%)",
                    backgroundSize: "24px 2px",
                    overflow: "visible"
                }}
            />

            {/* Mobile Navigation */}
            <div
                className={`absolute top-full left-0 w-full bg-primary-alt shadow-lg md:hidden transition-all duration-300 origin-top overflow-hidden ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
                    }`}
            >
                <nav className="flex flex-col p-6 gap-4 border-t border-white/10">
                    {navLinks.map((link, idx) => (
                        link.children ? (
                            <MobileDropdownNavLink key={idx} {...link} onClick={() => setIsOpen(false)} />
                        ) : (
                            <MobileNavLink
                                key={link.href}
                                {...link}
                                onClick={() => setIsOpen(false)}
                            />
                        )
                    ))}
                    <Link href="/contacto" onClick={() => setIsOpen(false)} className="bg-secondary text-primary font-bold py-3 px-6 rounded-lg text-center mt-4">
                        Reserva tu plaza
                    </Link>
                </nav>
            </div>
        </header>
    );
}

function NavLink({ href, label }: { href?: string; label: string; }) {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <Link
            href={href!}
            className={`flex flex-col items-center gap-1 text-base transition-colors duration-300 group ${isActive ? "text-secondary font-medium" : "text-white/90 hover:text-secondary"}`}
        >
            <span className="font-display">{label}</span>
            <span className={`h-0.5 bg-secondary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
        </Link>
    );
}

function DropdownNavLink({ label, children }: { label: string; children: any[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150); // Small delay to prevent flickering
    };

    return (
        <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className={`flex flex-col items-center gap-1 text-base transition-colors duration-300 ${isOpen ? "text-secondary" : "text-white/90 hover:text-secondary"}`}>
                <span className="font-display">{label}</span>
                <span className={`h-0.5 bg-secondary transition-all duration-300 ${isOpen ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isOpen ? "opacity-100 visible translate-y-0 z-10" : "opacity-0 invisible -translate-y-2"}`}>
                <div className="bg-white rounded-xl shadow-xl overflow-hidden min-w-[220px] py-2 border border-secondary/20">
                    {children.map((child, idx) => (
                        <Link
                            key={idx}
                            href={child.href}
                            className="block px-6 py-3 text-text-main hover:bg-secondary/10 hover:text-primary transition-colors flex items-center gap-3"
                        >
                            <child.icon size={18} className="text-secondary" />
                            <span className="text-sm font-medium">{child.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MobileNavLink({ href, label, icon: Icon, onClick }: { href?: string; label: string; icon: any; onClick?: () => void }) {
    return (
        <Link
            href={href!}
            className="flex items-center gap-4 text-white hover:text-secondary transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            onClick={onClick}
        >
            <Icon size={20} className="text-secondary" />
            <span className="font-display text-lg">{label}</span>
        </Link>
    );
}

function MobileDropdownNavLink({ label, icon: Icon, children, onClick }: { label: string; icon: any; children: any[]; onClick: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between text-white hover:text-secondary transition-colors duration-300 p-2 rounded-lg hover:bg-white/5 w-full"
            >
                <div className="flex items-center gap-4">
                    <Icon size={20} className="text-secondary" />
                    <span className="font-display text-lg">{label}</span>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`pl-12 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                {children.map((child, idx) => (
                    <Link
                        key={idx}
                        href={child.href}
                        className="text-white/80 hover:text-white py-2 text-base flex items-center gap-2"
                        onClick={onClick}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {child.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
