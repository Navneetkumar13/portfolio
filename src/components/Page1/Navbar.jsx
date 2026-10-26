
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/90 backdrop-blur-md">
      {/* Desktop Navbar */}
      <div className="relative grid h-20 grid-cols-3 items-center px-6 md:px-10">

        {/* Logo - Left */}
        <a
          href="#home"
          onClick={closeMenu}
          className="justify-self-start text-4xl font-bold text-blue-500"
        >
          NK.
        </a>

        {/* Navigation - Exact Center */}
        <div className="hidden items-center justify-self-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-lg text-white transition-colors duration-200 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button - Right */}
        <div className="hidden justify-self-end md:block">
          <Button
            name="Download Resume"
            download="Resume.pdf"
            icon="Download"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="col-start-3 justify-self-end rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-neutral-950 transition-all duration-300 md:hidden ${
          isOpen
            ? 'max-h-96 border-t border-white/10 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-lg text-white transition-colors hover:bg-white/5 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}

          <div className="px-4 py-3">
            <Button
              name="Download Resume"
              download="Resume.pdf"
              icon="Download"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
