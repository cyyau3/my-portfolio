import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link 
        href={href} 
        className="block py-2 pl-3 pr-4 text-[var(--text-secondary)] text-lg font-bold rounded md:p-0 hover:text-[var(--text-primary)] transition-colors duration-200">
            {title}
        </Link>
    );
};

export default NavLink;