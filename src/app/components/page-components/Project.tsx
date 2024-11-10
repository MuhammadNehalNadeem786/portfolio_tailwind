"use client";
import React from 'react';
import Image from 'next/image';
import project1 from '../../../../public/assets/projects/todo_auth.png';
import project2 from '../../../../public/assets/projects/random_pass.png';
import project3 from '../../../../public/assets/projects/bg_changer.png';

import Link from 'next/link';

const ProjectsShowcase: React.FC = () => {
    const projects = [
        { image: project1, title: 'TodoApp with Authentication', description: 'TodoAuthApp is a secure, full-stack to-do application featuring user authentication. It allows users to register, log in, and manage their tasks in a secure environment. Built using Node.js, Express, MongoDB, and React, it employs JWT for session management and user security.' },
        { image: project2, title: 'Random Password Generator', description: 'A dynamic password generator tool that lets users create strong, randomized passwords based on adjustable criteria, ensuring security across different sites. Built with JavaScript and CSS for an interactive experience.' },
        { image: project3, title: 'Bg Changer with Eye Animation', description: 'An interactive background changer with a unique eye animation that follows the cursor. Built using HTML, CSS, and JavaScript to create a visually appealing experience that reacts to user interaction.' },
    ];

    return (
        <section className='w-full h-full py-16 px-8 bg-white flex flex-col items-center box-border overflow-x-hidden'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl text-black'>My Projects</h2>
                <p className='text-lg text-black'>Here are some of the projects I have worked on:</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl px-4'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-[#FFFFFF] border border-[#444] rounded-lg overflow-hidden shadow-lg transition-transform duration-200 ease-in-out transform hover:translate-y-[-5px] hover:shadow-2xl'>
                        <div className='w-full h-60 relative'>
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                layout="fill"
                                objectFit="cover"
                                className='rounded-t-lg'
                            />
                        </div>
                        <div className='p-6 text-center text-black flex flex-col h-3/5'>
                            <h3 className='text-xl text-black mb-2'>{project.title}</h3>
                            <p className='text-base text-black mb-4 flex-grow'>{project.description}</p>
                            <Link href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center justify-center px-4 py-2 bg-[#0B80FF] text-white text-lg font-semibold rounded-md hover:bg-[#0B80FF] transition-colors">
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsShowcase;
