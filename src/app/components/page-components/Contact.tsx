"use client"
import React from 'react';
import Image from 'next/image';
import Send_Svg from '../../../../public/assets/extra/send.svg';

export default function ContactSection() {
    return (
        <div className="contact-section flex flex-col items-center justify-center h-[83vh] bg-white text-black font-sans relative">
            <div className="header text-center mb-12 relative">
                <h1 className="text-3xl">{"LET'S WORK"}</h1>
                <h1 className="heading-avatar flex justify-center items-center text-3xl">
                    T
                    <span className="avatar inline-block w-12 h-12 rounded-full overflow-hidden">
                        <Image className="Image-avatar w-10 h-10 rounded-full bg-[#007BFF] p-2" src={Send_Svg} alt="Avatar" />
                    </span>
                    GETHER
                </h1>
            </div>
            <div className="form-container bg-white text-black p-6 rounded-lg w-72 shadow-lg transition-all ease-in-out">
                <form action="mailto:youremail@example.com" method="post" encType="text/plain">
                    <label className="block text-sm mb-2">Name:</label>
                    <input className="w-full p-2 mb-4 border border-black rounded-md" type="text" name="name" required />

                    <label className="block text-sm mb-2">Email:</label>
                    <input className="w-full p-2 mb-4 border border-black rounded-md" type="email" name="email" required />

                    <label className="block text-sm mb-2">Message:</label>
                    <textarea className="w-full p-2 mb-4 border border-black rounded-md" name="message" required />

                    <button className="w-full p-2 bg-[#007BFF] text-white font-bold rounded-md hover:bg-[#0056b3]">Send</button>
                </form>
            </div>
        </div>
    );
}
