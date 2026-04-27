import "./footer.css"
import { SocialIcon } from "react-social-icons"

export default function Footer() {
    return (<>
        <footer>
            <div className="footer-info-container">
                <div className="footer-email-container">
                    <h3 className="footer-email-title">Email:</h3>
                    <a className="footer-email" href="mailto:alexxromeu@gmail.com">contact@alexromeu.net</a>
                </div>

                <div className="footer-loc-container">
                    <h3 className="footer-loc-title">Location:</h3>
                    <p className="footer-loc">Dallas, TX</p>
                </div>
            </div>    
        <p className="right-reserved">© 2026 Alexander Romeu.</p>
        <div className="social-media-container">
            <SocialIcon className="social-media" url="https://github.com/Alexromeu" />
            <SocialIcon className = "social-media" url="https://www.linkedin.com/in/alexander-romeu-7a8606265/"/>
        </div>
        </footer>
    </>)
}