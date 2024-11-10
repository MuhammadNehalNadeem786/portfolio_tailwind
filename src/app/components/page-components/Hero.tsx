import React from 'react'

const Hero = () => {
    return (
        <section className="hero-section flex flex-col justify-center items-center py-8 px-8 bg-white w-full">
            <div className="hero-heading text-black text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[4.5rem] sm:leading-[7.5rem] z-10 text-left w-full">
                <h1>DEVELOPING WITH 💥</h1>
                <div className="fire-hero-heading relative flex justify-left items-center w-full">
                    <h1 id="space-hero-heading" className="pl-0 sm:pl-12">💥 ENERGY, SHAPING </h1>
                </div>
                <h1>🌟 INNOVATION</h1>
            </div>

            <div className="hero-welcome z-1 py-4 text-black font-medium text-lg sm:text-xl text-left w-full">
                <p>Welcome to my online realm!</p>
                <p>I combine my passion for coding, </p>
                <p> AI advancements, and App development to shape solutions</p>
                <p>that make a difference.</p>
            </div>

            <div className="hero-button mt-8 flex justify-left w-full">
                <div className="hero-cv-div">
                    <button id="hero-cv-btn" className="flex justify-center items-center bg-blue-600 text-white py-2 px-6 font-bold rounded-full w-60 sm:w-72 lg:w-80">
                        <p id="hidden_text" className="text-white font-normal tracking-wide text-lg">Hire Me</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
