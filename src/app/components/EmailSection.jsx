"use client"
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const formRef = useRef(null);

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
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div 
            className="bg-[radial-gradient(ellipse_at_center,_#7e22ce,_transparent)] opacity-50 rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">
        </div>
        {/* first column*/}
        <div className="z-10">
            <h5 className="text-4xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                I’m currently open to new opportunities in Python development and cloud tech.
                If you’re hiring, working on something cool, or just want to say hi — my inbox is always open.
                <br />Looking forward to connecting!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/cyyau3">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/yaueunice/">
                    <Image src={LinkedInIcon} alt="LinkedIn Icon" />
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
                        className="text-white block mb-2 text-sm font-medium">
                        Your Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="abc@google.com"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="text-white block mb-2 text-sm font-medium">
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Message Subject"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer">
                        Send Message
                </button>
                {emailSubmitted && (
                    <p className="text-white font-medium text-center mt-4">
                        Thank you for your message! I will get back to you soon.
                    </p>
                )}
            </form>
        </div>
        </section>
    );
}
export default EmailSection