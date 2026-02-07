import { useEffect, useState } from "react";
import Header from "../Header";
import '../../styles/responsive_styles/resposive_header.css'
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  const handleClick = () => {
     navigate('/')
  }



  return (
    <>
    {isMobile ? (
    <div> 
      <header className="mobile-header">
        <img className="logo-container" onClick={handleClick} src={'/icons/logo_markup.svg'}/>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
      </header>

      <nav className={`mobile-nav${isOpen ? "" : " hidden"}`}>
        <HashLink className="header-btn-resp" smooth to="/#projects" onClick={toggleMenu}>Projects</HashLink>
        <HashLink className="header-btn-resp" smooth to="/#skills" onClick={toggleMenu}>Skills</HashLink>
        <Link className="header-btn-resp" to="/aboutMe" onClick={toggleMenu}>About Me</Link>
        <Link className="header-btn-resp" to="/contact" onClick={toggleMenu}>Contact me</Link>
      </nav>
       </div>
        ) : <Header/>}
    </>
  );
}
