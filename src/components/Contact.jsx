import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiMedium } from "react-icons/si"; // ✅ Medium ka icon
import profileImage from "../assets/sharon.jpg"; // ✅ Tumhari image ka naam

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact</h2>

        {/* ✅ Profile Image */}
        <div className="flex justify-center mt-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
          />
        </div>

        {/* ✅ Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-3xl text-cyan-500">
          <a href="https://github.com/CodeVistaPro" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-700 dark:hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-700 dark:hover:text-white" />
          </a>
          <a href="mailto:gilbert955sharon@gmail.com">
            <FaEnvelope className="hover:text-gray-700 dark:hover:text-white" />
          </a>
          <a href="https://medium.com/@sharon4ugilbert" target="_blank" rel="noopener noreferrer">
            <SiMedium className="hover:text-gray-700 dark:hover:text-white" />
          </a>
        </div>

        {/* ✅ Resume Button Only (Extra Text Removed) */}
        <div className="mt-6">
          <a
            href="your-resume-link.pdf"
            className="bg-cyan-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-cyan-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      
      {/* ✅ Footer */}
      <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
        Made with 💙 by Sharon Gilbert
      </footer>
    </section>
  );
};

export default Contact;
