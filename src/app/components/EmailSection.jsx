"use client"
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import GithubIconBlack from "../../../public/github-icon-b.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import LinkedInIconBlack from "../../../public/linkedin-icon-b.svg";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from '../contexts/ThemeContext';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const formRef = useRef(null);
    const { theme } = useTheme();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        
        try{
            const res = await fetch("https://formspree.io/f/xqapnobb", {
                method:"POST",
                body: new FormData(form),
                headers:{
                    Accept: "application/json",
                }
            });
            
            if (res.ok) {
                setEmailSubmitted(true);
                form.reset();
            }
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    }
    return (
        <section id="contact" className="grid md:grid-cols-2 py-12 lg:py-16 gap-4 relative scroll-mt-28">
        <div 
            className="bg-[radial-gradient(ellipse_at_center,_#7e22ce,_transparent)] opacity-50 rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">
        </div>
        {/* first column*/}
        <div className="z-10">
            <h5 className="text-4xl font-bold text-[var(--text-primary)] my-2 font-heading">Let's Connect</h5>
            <p className="text-[var(--text-secondary)] mb-4 max-w-md font-body">
                I'm currently open to new opportunities in Python development and cloud tech.
                If you're hiring, working on something cool, or just want to say hi — my inbox is always open.
                <br />Looking forward to connecting!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/cyyau3">
                    {theme === 'light' ? (
                        <Image 
                            src={GithubIconBlack} 
                            alt="Github Icon" 
                            width={32}
                            height={32}
                        />
                    ) : (
                        <Image 
                            src={GithubIcon} 
                            alt="Github Icon" 
                        />
                    )}
                </Link>
                <Link href="https://www.linkedin.com/in/yaueunice/">
                    {theme === 'light' ? (
                        <Image 
                            src={LinkedInIconBlack} 
                            alt="LinkedIn Icon" 
                            width={32}
                            height={32}
                        />
                    ) : (
                        <Image 
                            src={LinkedInIcon} 
                            alt="LinkedIn Icon" 
                        />
                    )}
                </Link>
            </div>
        </div>
         {/* second column*/}
        <div>
            <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col" 
            >
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="text-[var(--text-primary)] block mb-2 text-sm font-medium font-nav">
                        Your Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[var(--card-bg)] border border-[var(--card-border)] placeholder-[var(--text-muted)] text-[var(--text-primary)] text-sm rounded-lg block w-full p-2.5 transition-colors duration-200"
                        placeholder="abc@google.com"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="text-[var(--text-primary)] block mb-2 text-sm font-medium font-nav">
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-[var(--card-bg)] border border-[var(--card-border)] placeholder-[var(--text-muted)] text-[var(--text-primary)] text-sm rounded-lg block w-full p-2.5 transition-colors duration-200"
                        placeholder="Message Subject"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-[var(--text-primary)] block text-sm mb-2 font-medium font-nav"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        className="bg-[var(--card-bg)] border border-[var(--card-border)] placeholder-[var(--text-muted)] text-[var(--text-primary)] text-sm rounded-lg block w-full p-2.5 transition-colors duration-200"
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer font-nav">
                        Send Message
                </button>
                {emailSubmitted && (
                    <p className="text-[var(--text-primary)] font-medium text-center mt-4 font-nav">
                        Thank you for your message! I will get back to you soon.
                    </p>
                )}
            </form>
        </div>
        </section>
    );
}
export default EmailSection