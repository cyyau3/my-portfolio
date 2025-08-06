import React from 'react';
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col py-4 items-center bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] shadow-[var(--shadow)] transition-colors duration-300">
            {links.map((links, index) => (
                <li key={index}>
                <NavLink href={links.path} title={links.title} />
                </li>
            ))}
            <li className="mt-4">
                <ThemeToggle />
            </li>
        </ul>
    )
}

export default MenuOverlay;