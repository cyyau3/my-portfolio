"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity:0, scale: 0.5 }}
                    animate={{ opacity:1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <span className="min-w-[320px] sm:min-w-[380px] whitespace-nowrap inline-block">
                            <TypeAnimation
                                sequence={[
                                'Eunice',
                                1000,
                                'Cloud Engineer',
                                1000,
                                'PythonDeveloper',
                                1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        When passion meets precision. Always exploring.
                    </p>
                    <div>
                        <a
                            href="#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-white"
                        >
                            Hire Me
                        </a>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 hover:scale-105 text-white mt-3 cursor-pointer">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity:0, scale: 0.5 }}
                    animate={{ opacity:1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/profile.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;