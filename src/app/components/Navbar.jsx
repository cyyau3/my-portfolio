"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
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
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Eunice Logo"
                        width={100}
                        height={90}
                        className="h-auto w-auto"
                        priority
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ): (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    {/*<NavLink href={link.path} title={link.title} />*/}
                                    <a href={link.path} 
                                        className="block py-2 pr-4 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                                        {link.title}
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
