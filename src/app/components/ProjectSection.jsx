"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1, 
        title: "Sales Data Automator",
        description: "A Python-based automation tool that extracts sales and inventory data from company partner website, standardizes reports into Excel, and improves productivity by over 70%.",
        image: "/images/projects/1.png",
        tag: ["All", "App"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "Developed a personal portfolio website using Next.js and Tailwind CSS to showcase projects and skills.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
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
        <section id="projects" className="scroll-mt-28">
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