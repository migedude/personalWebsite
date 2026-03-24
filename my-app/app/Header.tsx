'use client'

import Link from 'next/link';

const Header = () => {
  const resumeLink = "/Contreras_Miguel_Resume_2025.pdf"
  const linkedinLink = "https://www.linkedin.com/in/miguelacontreras";

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between backdrop-blur-md border-b border-white/10 text-black">
      
      {/* Navigation Links */}
      <ul className="flex gap-8 text-2xl font-bold">
        <li>
          <Link 
            href="/"
            className="hover:text-black transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            About Me!
          </Link>
        </li>
        <li>
          <Link 
            href="/coursework"
            className="hover:text-black transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            Coursework
          </Link>
        </li>
        <li>
          <Link 
            href="/experience"
            className="hover:text-black transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link 
            href="/projects"
            className="hover:text-black transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            Projects
          </Link>
        </li>
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button 
            onClick={() => window.open(resumeLink, '_blank')}
            className="text-2xl font-bold hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
        >
          Resume
        </button>
      </div>

    </header>
  );
};

export default Header;