"use client";

import { PiArrowRight, PiArrowUp } from "react-icons/pi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8">
      {/* CTA Section */}
      <div className="container mx-auto py-4 flex flex-col items-center">
        <div className="text-4xl xl:text-5xl font-medium text-center">
          We aim to inspire and empower you <br></br>To embrace an active
          lifestyle.
        </div>
        <div
          className="text-purple-500 flex p-4 m-4 items-center hover:underline text-lg hover:cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Top
          <PiArrowUp className="ml-3 text-sm" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
        {/* Logo or Branding */}
        <div className="flex items-center mb-4 lg:mb-0">
          {/* Example: Replace with your logo */}
          <Image src="/logos/logo2.svg" alt="Logo" width={120} height={40} />
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 justify-center text-center">
          {/* Example: Replace with your social media links */}
          <p className="font-bold">Find us on all Platforms:</p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg text-black-500 hover:text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg text-black-500 hover:text-gray-600"
          >
            Discord
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg text-black-500 hover:text-red-700"
          >
            YouTube
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-row lg:flex-row mt-10">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} MovePro.io All rights reserved.
            <br></br>
          </p>

          {/* Add more contact details as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
