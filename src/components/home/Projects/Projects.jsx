import '../../../styles/project_card.css'
import '../../../styles/project_slider.css'
import Card from './Card'
import { useEffect, useState, useRef } from 'react'
import scrollCarousel from '../../../utils/scroll_slider_logic'


export default function Projects() {
   const [projects, setProjects] = useState([])
   const carouselRef = useRef(null);
   const [hoveredIndex, setHoveredIndex] = useState(null); 

   useEffect(() => {
     fetch('/projects/projects.json')
       .then(res => res.json())
       .then(data => setProjects(data))
        
   }, [])

    return(<>
    <section id="projects">
    <h1 className="projects-title">Projects</h1> 
    <div className='carousel'>
      <button onClick={() => scrollCarousel(carouselRef, -1)} className="scroll-btn left"><span>‹</span></button>
      <div className="carousel-scroll" ref={carouselRef}>
        
      <div className="carousel-row">
         {projects.map((proj, index) => {
           return <div className={`carousel-tile ${hoveredIndex !== null && hoveredIndex !== index ? 'blurfilter' : ''}`}
                      key={proj.index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      >
                     <Card data={proj}/>
                  </div>
            })}

     </div>
        
     </div>
     <button onClick={() => scrollCarousel(carouselRef, 1)} className="scroll-btn right"><span>›</span></button> 
    </div> 
    </section>  
    </>)
}