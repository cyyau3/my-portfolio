"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 font-body">
                <li>Python</li>
                <li>Cloud: AWS, Microsoft Azure</li>
                <li>SQL: PostgresSQL, MySQL, Oracle, MongoDB</li>
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
            <ul className="list-disc pl-2 font-body">
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
            <ul className="list-disc pl-2 font-body">
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
        <section id="about" className="text-[var(--text-primary)] scroll-mt-28">
            <div className="py-12 lg:py-16 md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 xl:px-16">    
                <div className="flex justify-center items-center">
                    <Image src="/images/about-image.png" alt="My tech stack" width={400} height={400} />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-[var(--text-primary)]">About Me</h2>
                    <p className="text-base md:text-lg font-body text-[var(--text-secondary)]">
                        I'm a curious and solutions-driven developer with a passion for cloud computing. I enjoy building practical tools with Python and deploying them on different cloud platforms.<br />
                        <br />With experience in Python, SQL, JavaScript, and Cloud Infrastructure, I learn best by doing — from automating job tracking to launching a Flask app with EC2, RDS, and CloudWatch. Turning ideas into real, working systems is what drives me. <br />
                        <br />I'm excited to join a collaborative team where I can grow as a Cloud Engineer and contribute to impactful solutions.<br />
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            <span className="text-lg md:text-xl font-bold">Skills</span>
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}
                        >
                            <span className="text-lg md:text-xl font-bold">Certifications</span>
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            <span className="text-lg md:text-xl font-bold">Education</span>
                        </TabButton>
                    </div>
                    <div className="mt-8 text-base md:text-lg text-[var(--text-secondary)]">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;