'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, User, Briefcase, Code, Mail, Globe } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-lg' : 'bg-transparent'} rounded-[2rem]`}>
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center space-x-4 md:space-x-8 rounded-[2rem] overflow-hidden">
        <ul className="flex justify-center space-x-4 md:space-x-8">
          <li>
            <Link href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <Home className="w-6 h-6 mr-2 group-hover:text-blue-400" />
              <span className="hidden sm:inline text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={(e) => handleNavClick(e, '#about')} className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <User className="w-6 h-6 mr-2 group-hover:text-blue-400" />
              <span className="hidden sm:inline text-lg">About</span>
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <Code className="w-6 h-6 mr-2 group-hover:text-blue-400" />
              <span className="hidden sm:inline text-lg">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <Briefcase className="w-6 h-6 mr-2 group-hover:text-blue-400" />
              <span className="hidden sm:inline text-lg">Experience</span>
            </Link>
          </li>
          <li>
            <Link href="#languages" onClick={(e) => handleNavClick(e, '#languages')} className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <Globe className="w-6 h-6 mr-2 group-hover:text-blue-400" />
              <span className="hidden sm:inline text-lg">Languages</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <Mail className="w-6 h-6 mr-2 group-hover:text-blue-400" />
              <span className="hidden sm:inline text-lg">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}