"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1, 
        title: "Sales Data Automator",
        description: "Automated sales data processing and reporting using Python, reducing manual effort by 80%.",
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
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        tags={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
}
export default ProjectSection;