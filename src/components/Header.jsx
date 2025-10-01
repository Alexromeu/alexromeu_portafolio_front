import "../styles/header.css"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { useNavigate } from "react-router-dom";

 
export default function Header() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
    
    return (<>
    
    <div className="header-container">
     <img className="logo-container" onClick={handleClick} src={'/icons/logo_markup.svg'}/>

    <div className="btns-container">  
        <HashLink className="header-btn" smooth to="/#projects">Projects</HashLink>
        <HashLink className="header-btn" smooth to="/#skills">Skills</HashLink>
        <Link className="header-btn" to="/aboutMe">About Me</Link>
        <Link className="header-btn" to="/contact">Contact me</Link>
    </div>  
    </div>
    
    </>)
} 