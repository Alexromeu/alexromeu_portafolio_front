import "../../../styles/skills.css"
import { useState } from "react"

export default function Skills() {
    const [ hoveredSkill, setHoverSkill ] = useState(null)

    const skills = [
  { skill: "react", url:"/icons/skills/React-Dark.svg"},      
  { skill: "JavaScript", url: "/icons/skills/JavaScript.svg" },
  { skill: "nodejs", url: "/icons/skills/NodeJS-Dark.svg" },
  { skill: "SQL", url: "/icons/skills/MySQL-Dark.svg" },
  { skill: "C", url:"/icons/skills/C.svg"},
  { skill: "C++", url:"/icons/skills/CPP.svg"},
  { skill: "TypeScript", url:"/icons/skills/TypeScript.svg"},
  { skill: "css", url: "/icons/skills/CSS.svg" },
  { skill: "html", url: "/icons/skills/HTML.svg" },
  
]
   
    return (<>
    <section className="skills-section" id="skills">
     <h1>Skills</h1>
     <div className="skills-container">  
        {skills.map(({ skill, url }) => (
            <div key={skill} className="skill-icon">
                <img 
                src={url} 
                key={`${skill}-img`} 
                onMouseEnter={() => setHoverSkill(skill)}
                onMouseLeave={() => setHoverSkill(false)}
                />
                
                { hoveredSkill === skill && <span className="skill-name">{skill}</span>}
                </div>
        ))}
     </div>
    </section>
    
    </>)
}