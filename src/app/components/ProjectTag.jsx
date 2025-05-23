import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
// a conditional statement to determine the state of the button (selected or not)
    const buttonStyles = isSelected
        ? "text-white bg-purple-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button className={`${buttonStyles} rounded-full border-2 hover:border-white px-5 py-2 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag;