import "../../styles/hero.css"
import { useNavigate } from "react-router-dom";

export default function Hero() {

    const navigate = useNavigate()

    const handleClick = () => {
    navigate('/contact')
  }

    return (
    <div className ="hero-container" id="hero">
        
        <h2 className="hero-title">Alexander Romeu</h2>
        <h3 className="hero-title-h3">Software Engineer | Backend specialist</h3>
        <button className="hero-button" onClick={handleClick}>Contact</button>
     
    </div>)
}