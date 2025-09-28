import { useState } from "react";


export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <header className="mobile-header">
        <div className="logo">Alexander</div>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
      </header>

      <nav className={`mobile-nav ${isOpen ? "" : "hidden"}`}>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </>
  );
}
