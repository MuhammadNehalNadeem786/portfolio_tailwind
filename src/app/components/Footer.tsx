import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logosvg from '../../../public/assets/logos/logo.svg';
import fb_svg from '../../../public/assets/social/fb.svg';
import insta_svg from '../../../public/assets/social/insta.svg';
import li_svg from '../../../public/assets/social/linkin.svg';
import tw_svg from '../../../public/assets/social/tw.svg';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 border-t-2 border-blue-500">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Image src={logosvg} width={80} height={80} alt="logo" />
          <h1 className="text-black text-xl">EHAL</h1>
        </div>

        {/* Navigation and Social Media Links */}
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0 w-full">
          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-2 sm:items-start sm:w-1/2">
            <h4 className="text-lg font-semibold">Navigation Links</h4>
            <ul className="space-y-2">
              <li><Link className="text-blue-500 hover:underline" href="#about">About</Link></li>
              <li><Link className="text-blue-500 hover:underline" href="#contact">Contact</Link></li>
              <li><Link className="text-blue-500 hover:underline" href="#projects">Projects</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center space-y-2 sm:items-start sm:w-1/2">
            <h4 className="text-lg font-semibold">Find Me</h4>
            <div className="flex space-x-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Link href="#">
                  <Image className="w-12 h-12 rounded-full transform transition-transform duration-300 hover:scale-110" src={fb_svg} alt="Facebook" />
                </Link>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <Link href="#">
                  <Image className="w-12 h-12 rounded-full transform transition-transform duration-300 hover:scale-110" src={tw_svg} alt="Twitter" />
                </Link>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <Link href="#">
                  <Image className="w-12 h-12 rounded-full transform transition-transform duration-300 hover:scale-110" src={insta_svg} alt="Instagram" />
                </Link>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <Link href="#">
                  <Image className="w-12 h-12 rounded-full transform transition-transform duration-300 hover:scale-110" src={li_svg} alt="LinkedIn" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-black font-semibold py-4 w-full">
          <p>&copy; 2024 MUHAMMAD NEHAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
