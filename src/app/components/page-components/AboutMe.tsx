import React from 'react'
import Image from 'next/image'
import facebook from '../../../../public/assets/social/fb.svg'
import instagram from '../../../../public/assets/social/insta.svg'
import Linkedin from '../../../../public/assets/social/linkin.svg'
import Twiter from '../../../../public/assets/social/tw.svg'
import frontEnd from '../../../../public/assets/specialization/code.svg'
import back from '../../../../public/assets/specialization/back.svg'
import db from '../../../../public/assets/specialization/db.svg'
import responsive from '../../../../public/assets/specialization/responsive.svg'
import uiux from '../../../../public/assets/specialization/uiux.svg'
import version from '../../../../public/assets/specialization/version.svg'

const AboutMe = () => {
    return (
        <div>
            <section className='about-me-section w-full py-16 px-8 bg-white flex flex-col items-center'>
                <div className='text'>
                    <h3 className='intro-about text-black text-xl leading-10 text-center'>
                        {"I'm Muhammad Nehal, a passionate AI student at GIAIC with a growing expertise in TypeScript and Next.js. Enthusiastic to delve into cutting-edge technologies, I'm building a solid foundation in web development and artificial intelligence. With a deep love for learning and innovation, I'm driven to continuously expand my skills and make impactful contributions in the tech world."}
                    </h3>
                </div>
                <div className='followme mt-20'>
                    <h4 className='about-me-follow-me text-black text-3xl text-center pb-4'>Find Me:</h4>
                </div>
                <div className='logo-container grid gap-4 mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center'>
                    <div className='logo-div flex justify-center items-center rounded-full bg-black border-6 border-[#007BFF] w-16 h-16 transition-transform transform hover:scale-105 hover:rotate-12'>
                        <Image src={facebook} alt='facebook' className='social-logos w-12 h-12'></Image>
                    </div>
                    <div className='logo-div flex justify-center items-center rounded-full bg-black border-6 border-[#007BFF] w-16 h-16 transition-transform transform hover:scale-105 hover:rotate-12'>
                        <Image src={Twiter} alt='twitter' className='social-logos w-12 h-12'></Image>
                    </div>
                    <div className='logo-div flex justify-center items-center rounded-full bg-black border-6 border-[#007BFF] w-16 h-16 transition-transform transform hover:scale-105 hover:rotate-12'>
                        <Image src={instagram} alt='instagram' className='social-logos w-12 h-12'></Image>
                    </div>
                    <div className='logo-div flex justify-center items-center rounded-full bg-black border-6 border-[#007BFF] w-16 h-16 transition-transform transform hover:scale-105 hover:rotate-12'>
                        <Image src={Linkedin} alt='linkedin' className='social-logos w-12 h-12'></Image>
                    </div>
                </div>
            </section>

            <section className='specialize-section w-full py-8 px-8 bg-white flex flex-col items-center'>
                <div className='head-div w-full text-lg py-12'>
                    <h2 className='head-specializing text-black text-center text-2xl'>I AM LEARNING THESE SKILLS</h2>
                </div>
                <div className='specializations-div grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full'>
                    {/* Front-end Development */}
                    <div className='specializations bg-white border border-black rounded-lg p-6 text-center flex flex-col justify-center items-center transition-transform transform hover:translate-y-1 hover:shadow-lg'>
                        <div className="icon w-20 h-20 bg-[#007BFF] flex justify-center items-center rounded-full mb-4">
                            <Image src={frontEnd} alt='frontEnd' className='w-12 h-12' />
                        </div>
                        <div className="icon_text">
                            <h4 className='text-[#007BFF] text-xl mb-2'>Front-end Development</h4>
                        </div>
                        <div className="specialize_text">
                            <p className='text-black text-base'>I am expert in HTML5, CSS3, Javascript, Typescript, React, and Next.js</p>
                        </div>
                    </div>
                    {/* Responsive Design */}
                    <div className='specializations bg-white border border-black rounded-lg p-6 text-center flex flex-col justify-center items-center transition-transform transform hover:translate-y-1 hover:shadow-lg'>
                        <div className="icon w-20 h-20 bg-[#007BFF] flex justify-center items-center rounded-full mb-4">
                            <Image src={responsive} alt='responsive' className='w-12 h-12' />
                        </div>
                        <div className="icon_text">
                            <h4 className='text-[#007BFF] text-xl mb-2'>Responsive Design</h4>
                        </div>
                        <div className="specialize_text">
                            <p className='text-black text-base'>Creating visually appealing and functional websites across devices</p>
                        </div>
                    </div>
                    {/* UI/UX Design */}
                    <div className='specializations bg-white border border-black rounded-lg p-6 text-center flex flex-col justify-center items-center transition-transform transform hover:translate-y-1 hover:shadow-lg'>
                        <div className="icon w-20 h-20 bg-[#007BFF] flex justify-center items-center rounded-full mb-4">
                            <Image src={uiux} alt='uiux' className='w-12 h-12' />
                        </div>
                        <div className="icon_text">
                            <h4 className='text-[#007BFF] text-xl mb-2'>UI/UX Design</h4>
                        </div>
                        <div className="specialize_text">
                            <p className='text-black text-base'>Wireframing, prototyping, userflow analysis</p>
                        </div>
                    </div>
                    {/* Version Control */}
                    <div className='specializations bg-white border border-black rounded-lg p-6 text-center flex flex-col justify-center items-center transition-transform transform hover:translate-y-1 hover:shadow-lg'>
                        <div className="icon w-20 h-20 bg-[#007BFF] flex justify-center items-center rounded-full mb-4">
                            <Image src={version} alt='version control' className='w-12 h-12' />
                        </div>
                        <div className="icon_text">
                            <h4 className='text-[#007BFF] text-xl mb-2'>Version Control</h4>
                        </div>
                        <div className="specialize_text">
                            <p className='text-black text-base'>I am expert in Git, GitHub, Bitbucket, providing the best</p>
                        </div>
                    </div>
                    {/* Back-end Development */}
                    <div className='specializations bg-white border border-black rounded-lg p-6 text-center flex flex-col justify-center items-center transition-transform transform hover:translate-y-1 hover:shadow-lg'>
                        <div className="icon w-20 h-20 bg-[#007BFF] flex justify-center items-center rounded-full mb-4">
                            <Image src={back} alt='backEnd' className='w-12 h-12' />
                        </div>
                        <div className="icon_text">
                            <h4 className='text-[#007BFF] text-xl mb-2'>Back-end Development</h4>
                        </div>
                        <div className="specialize_text">
                            <p className='text-black text-base'>I am expert in Node.js, Express.js, Koa.js</p>
                        </div>
                    </div>
                    {/* Database Management */}
                    <div className='specializations bg-white border border-black rounded-lg p-6 text-center flex flex-col justify-center items-center transition-transform transform hover:translate-y-1 hover:shadow-lg'>
                        <div className="icon w-20 h-20 bg-[#007BFF] flex justify-center items-center rounded-full mb-4">
                            <Image src={db} alt='db' className='w-12 h-12' />
                        </div>
                        <div className="icon_text">
                            <h4 className='text-[#007BFF] text-xl mb-2'>Database Management</h4>
                        </div>
                        <div className="specialize_text">
                            <p className='text-black text-base'>I am expert in MongoDB, GraphQL</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
