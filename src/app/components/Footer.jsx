"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer border-t border-[var(--navbar-border)] text-[var(--text-primary)] transition-colors duration-300 bg-[var(--card-bg)]">
            <div className="max-w-screen-xl mx-auto p-12 flex items-center justify-between">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:bg-purple-500 hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer bg-[var(--background)]"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none"
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor"
                        className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M4.5 10.5l7.5-7.5 7.5 7.5M12 3v18" />
                    </svg>
                </button>
                <p className="text-lg text-[var(--text-secondary)] font-nav">© All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;