"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
// import NavLink from './NavLink';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { theme } = useTheme();
    
    return (
        <nav className="fixed mx-auto border-b border-[var(--navbar-border)] top-0 left-0 right-0 z-10 bg-[var(--navbar-bg)] bg-opacity-95 backdrop-blur-sm transition-colors duration-300 shadow-[var(--shadow)]">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="flex items-center">
                    <Image
                        src={theme === 'light' ? "/images/logo2.png" : "/images/logo.png"}
                        alt="Eunice Logo"
                        width={100}
                        height={90}
                        className="h-auto w-auto"
                        priority
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded-lg border-[var(--text-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors duration-200">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ): (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded-lg border-[var(--text-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors duration-200">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    {/*<NavLink href={link.path} title={link.title} />*/}
                                    <a href={link.path} 
                                        className="block py-2 pr-4 pl-3 text-[var(--text-secondary)] text-lg font-bold rounded md:p-0 hover:text-[var(--text-primary)] transition-colors duration-200">
                                        {link.title}
                                    </a>
                                </li>
                            ))
                        }
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
