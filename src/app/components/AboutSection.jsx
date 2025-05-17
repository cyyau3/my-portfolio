"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Microsoft Azure</li>
                <li>SQL (PostgresSQL, MySQL, Oracle, MongoDB)</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Azure Fundamental (AZ-900)</li>
                <li>Github Foundations</li>
                <li>3x Google Cloud Skill Badge</li>
                <li>AI Skills 4 Women</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Diploma of Computer Programming</li>
                <li>Graduate Diploma of Professional Psychology</li>
                <li>Bachelor of Arts in Psychology</li>
            </ul>
        )
    }
]

const AboutSection = () =>{
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

const handleTabChange = (id) =>{
    startTransition(() => {
        setTab(id);
    });
};

    return (
        <section id="about" className="text-white scroll-mt-28">
            <div className="py-12 lg:py-16 md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 xl:px-16">    
                <div className="flex justify-center items-center">
                    <Image src="/images/about-image.png" alt="My tech stack" width={400} height={400} />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2  className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I’m a driven and adaptable Python Developer with a strong interest in cloud computing. <br />
                        <br />I have experience with Python, SQL, JavaScript, React, and Cloud platforms like Azure. I actively pursue professional development to sharpen my skills and stay current in the tech landscape. <br />
                        <br />I’m excited to contribute to innovative teams in Canada, collaborate with like-minded professionals, and help build impactful, real-world solutions.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            <span className="text-lg md:text-xl">Skills</span>
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}
                        >
                            <span className="text-lg md:text-xl">Certifications</span>
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            <span className="text-lg md:text-xl">Education</span>
                        </TabButton>
                    </div>
                    <div className="mt-8 text-base md:text-lg">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;