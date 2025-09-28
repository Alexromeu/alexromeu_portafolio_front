import "../../styles/hero.css"
import { useNavigate } from "react-router-dom";

export default function Hero() {

    const navigate = useNavigate()

    const handleClick = () => {
    navigate('/contact')
  }

    return (
    <div className ="hero-container">
        
        <h2 className="hero-title">Q bola</h2>
        <button className="hero-button" onClick={handleClick}>Contact</button>
     
    </div>)
}