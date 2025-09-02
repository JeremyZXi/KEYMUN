import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Extracted nav links
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Committees", href: "/committees" },
    { name: "Registration", href: "/registration" },
    /*{ name: "Resources", href: "/resources" },*/
    { name: "About", href: "/about-us" },

];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <nav className="fixed w-full z-50 transition-all duration-300 bg-[#192236] shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2">
                                <img
                                    src="/assets/keymun_bw_logo.png"
                                    alt="KEYMUN Logo"
                                    className="h-12 w-12 object-contain"
                                />
                                <span className="font-bold text-xl text-white">KEYMUN</span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#192236]">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
