"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1, 
        title: "Expense Tracker App – AWS Cloud Deployment",
        description: `
            A full-stack Flask web application securely deployed on AWS using EC2, RDS, VPC, and CloudWatch. 
            Built with production-ready components (Gunicorn, Nginx), it stores data in a private RDS PostgreSQL database and logs application activity via CloudWatch Agent.
            Demonstrates secure network architecture, IAM-based access control, and real-world cloud deployment practices.
            `,
        tools: "Python, Flask, PostgreSQL, Gunicorn, Nginx, AWS EC2, RDS, VPC, CloudWatch, IAM",
        skills: "Cloud Deployment, Infrastructure Design, Security Groups, IAM Roles, Cloud Monitoring, Flask App Hosting",
        image: "/images/projects/1.png",
        tag: ["All", "App", "Cloud"],
        gitUrl: "https://github.com/cyyau3/flask-expense-tracker",
        previewUrl: "https://youtu.be/bfRccKXN7mY",
    },
    {
        id: 2, 
        title: "Google Sheets to Notion Sync Integration",
        description: `
            A Python-based tool that syncs job application data from Google Sheets to a Notion database.
            Built with Flask and deployed on Render, it uses webhooks and Google Apps Script to track edits.
            Syncing to Notion enables attachment of documents and notes while maintaining spreadsheet usability.
            `,
        tools: "Python, Flask, Google Apps Script, gspread, Notion API, Render, Git",
        skills: "API Integration, Automation, Webhooks, Google Sheets API, Cloud Deployment",
        image: "/images/projects/2.png",
        tag: ["All", "App"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3, 
        title: "Sales Data Automator",
        description: `
            A Python-based tool that automates data extraction and report generation from company partner website using web scraping and Pandas.
            Streamlines repetitive tasks, reduces manual effort, and outputs clean, shareable Excel summaries. 
            Improve admin productivity by over 70%.
            `,
        tools: "Python, Pandas, Selenium, Git",
        skills: "Web Scraping, Automation, Data Extraction, Excel Reporting, File Handling",
        image: "/images/projects/3.png",
        tag: ["All", "App"],
        gitUrl: "https://github.com/cyyau3/SalesDataAutomator",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Personal Portfolio",
        description: `
            A fully responsive portfolio built with Next.js and Tailwind CSS to showcase my skills, projects, and certifications as a Python developer. 
            Designed with a dark UI theme, smooth animations, and a contact form.`,
        tools: "Next.js, Tailwind CSS, React, Framer Motion, Formspree",
        skills: "Responsive Design, UI/UX, Animation, Web Deployment",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/cyyau3/my-portfolio",
        previewUrl: "https://ey-portfolio.vercel.app",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
      initial: { y:50, opacity: 0 },
      animate: { y: 0, opacity: 1},
    };

    return (
        <section id="projects" className="py-12 lg:py-16 scroll-mt-28">
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-3 py-6">
                <ProjectTag
                    onClick={handleTagChange} 
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange} 
                    name="App"
                    isSelected={tag === "App"}
                />
                <ProjectTag
                    onClick={handleTagChange} 
                    name="Cloud"
                    isSelected={tag === "Cloud"}
                />
                <ProjectTag
                    onClick={handleTagChange} 
                    name="Web"
                    isSelected={tag === "Web"}
                />
            </div>
            <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                     key={index}
                     variants={cardVariants} 
                     initial="initial"
                     animate={isInView ? "animate" : "initial"}
                     transition={{ duration: 0.3, delay: index * 0.4 }}
                     >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            tools={project.tools}
                            skills={project.skills}
                            imgUrl={project.image}
                            tags={project.tag}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
export default ProjectSection;