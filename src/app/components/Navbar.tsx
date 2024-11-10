"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logosvg from "../../../public/assets/logos/logo.svg";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
        setIsOpen(false); // Close menu after scrolling
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-white text-black shadow-lg sticky top-0 z-10 w-full border-b-2 border-blue-500">
            <div className="flex items-center gap-2 font-bold cursor-pointer transition-transform duration-300" onClick={toggleMenu}>
                <Image src={logosvg} alt="dn-black-logo" width={50} height={50} />
                <p className="text-xl cursor-pointer transition-transform duration-300">EHAL</p>
            </div>

            <div
                className="flex flex-col gap-2 cursor-pointer z-20 md:hidden"
                onClick={toggleMenu}
            >
                <div className="w-6 h-1 bg-black mb-1"></div>
                <div className="w-6 h-1 bg-black mb-1"></div>
                <div className="w-6 h-1 bg-black mb-1"></div>
            </div>

            <div className={`md:flex ${isOpen ? "block" : "hidden"} flex-col md:flex-row gap-8 md:static absolute top-16 right-0 bg-white w-full md:w-auto p-4 shadow-lg md:shadow-none transition-all duration-300`}>
                <ul className="flex flex-col md:flex-row gap-8 list-none">
                    <li>
                        <Link
                            href="#hero"
                            onClick={(e) => handleScroll(e, "hero")}
                            className="text-black text-base font-medium relative hover:text-blue-500"
                        >
                            Home
                            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500 scale-x-0 origin-right transition-all duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#projects"
                            onClick={(e) => handleScroll(e, "projects")}
                            className="text-black text-base font-medium relative hover:text-blue-500"
                        >
                            Projects
                            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500 scale-x-0 origin-right transition-all duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            onClick={(e) => handleScroll(e, "about")}
                            className="text-black text-base font-medium relative hover:text-blue-500"
                        >
                            About Us
                            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500 scale-x-0 origin-right transition-all duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contact"
                            onClick={(e) => handleScroll(e, "contact")}
                            className="text-black text-base font-medium relative hover:text-blue-500"
                        >
                            Contact
                            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500 scale-x-0 origin-right transition-all duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
