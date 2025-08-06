import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
// a conditional statement to determine the state of the button (selected or not)
    const buttonStyles = isSelected
        ? "text-white bg-purple-500"
        : "text-[var(--text-secondary)] border-[var(--card-border)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
    return (
        <button className={`${buttonStyles} rounded-full border-2 px-5 py-2 text-xl cursor-pointer transition-colors duration-200 font-nav`}
        onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag;