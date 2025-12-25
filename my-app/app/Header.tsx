const Header = () => {
  const resumeLink = "/Contreras_Miguel_Resume_2025.pdf"
  const linkedinLink = "https://www.linkedin.com/in/miguelacontreras";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between  backdrop-blur-md border-b border-white/10 text-gray-300">
      
      {/* Navigation Links */}
      <ul className="flex gap-8 text-sm font-medium">
        <li>
          <button 
            onClick={() => scrollToSection('aboutMe')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            About Me!
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('skills')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            Skills
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('experience')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            Experience
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection("contactMe")}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
          >
            Contact Me!
          </button>
        </li>
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <button 
            onClick={() => window.open(resumeLink, '_blank')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
        >
          Resume
        </button>
      </div>

    </header>
  );
};

export default Header;