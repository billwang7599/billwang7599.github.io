import { cn } from "../lib/cn";
import React, { useState } from "react";

export type NavItems = {
    title: string;
    ref: React.RefObject<HTMLDivElement>;
};

type NavbarProps = {
    navItems: NavItems[];
};

export const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (item: NavItems) => {
        if (item.ref && item.ref.current) {
            item.ref.current.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close menu on mobile after click
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-32 py-2",
                    "bg-opacity-5 bg-white backdrop-blur-md backdrop-filter shadow-sm",
                )}
            >
                <div className="flex items-center">
                    <span className="ml-2 text-xl font-bold">B</span>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item.title}
                            className="text-md font-medium px-3 py-1 rounded hover:bg-gray-100 transition"
                            onClick={() => handleNavClick(item)}
                            type="button"
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        className="p-2 rounded focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    menuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu Overlay OUTSIDE nav */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg z-[100] flex flex-col items-center justify-center md:hidden">
                    {navItems.map((item) => (
                        <button
                            key={item.title}
                            className="text-xl font-semibold mb-6 px-6 py-3 rounded hover:bg-gray-100 transition"
                            onClick={() => handleNavClick(item)}
                            type="button"
                        >
                            {item.title}
                        </button>
                    ))}
                    <button
                        className="text-gray-600 text-lg mt-4"
                        onClick={() => setMenuOpen(false)}
                        type="button"
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
};
