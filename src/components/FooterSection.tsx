import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-15 w-full">
      <div className="max-w-6xl w-full px-8  mx-auto">
        <h2 className="text-5xl font-extralight font-serif mb-8 lg:mb-40">Let’s work together</h2>

        <div className="flex flex-col md:flex-row justify-between  md:items-start ">
          <div className=" mb-8 lg:mb-14">
            <p className="text-primary text-lg font-medium mb-2">Kaduna, Nigeria</p>
            <p className="text-gray-700">
              +234 093 206 7404 &nbsp;|&nbsp;{" "}
              <a href="mailto:adekeyeimmanuel@gmail.com" className="hover:underline">
                adekeyeimmanuel@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-primary text-lg font-medium mb-1">Socials</p>
            <div className="flex gap-4  md:justify-start">
              <a href="https://twitter.com/adekeyeadeniyi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                <FaTwitter className="text-xl" />
              </a>

              <a href="https://wa.me/2349032067404" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                <FaWhatsapp className="text-xl" />
              </a>

              <a href="https://github.com/adekeyeadeniyi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <p>Developed by Me.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
