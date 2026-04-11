import '../../../styles/project_card.css'
import {useState} from 'react'

export default function Card( {data} ) {
    const [isVisible, setIsVisible] = useState(true)


    return (<>
    <a href={data.demoUrl} target="_blank">

        <div className="card-container"
         onMouseEnter={() => setIsVisible(false)} 
         onMouseLeave={() => setIsVisible(true)}>
            <img className="project-image" src={data.imageurl} alt={"NO IMAGE YET"} ></img>
             <h1 
                className={`title-container ${!isVisible ? ' is-not-visible' : ""}`}

             >{data.name}</h1>
            <p className="description">{data.description}</p>
        </div>
    </a>    
    </>)
}