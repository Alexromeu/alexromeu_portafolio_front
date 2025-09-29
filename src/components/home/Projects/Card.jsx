import '../../../styles/project_card.css'

export default function Card( {data} ) {

    return (<>
    <a href={data.demoUrl} target="_blank">
        <div className="card-container">
            <h1 className="title-container">{data.name}</h1>
            <img className="project-image" src={data.imageurl} alt={data.name}></img>
            <p className="description">{data.description}</p>
        </div>
    </a>    
    </>)
}