import { Link } from "react-router-dom";

const SelectedProject = ({ project }) => {

  return (
      <div className="selected-project">
        <h3>{project.title}</h3>
        <img className="project-img" src={project.img} alt={project.alt} />
        <p>{project.description}</p>
        {project.buttons.map((button, idx) => button.type === "button" 
          ? <button key={idx}><a href={button.link}>{button.text}</a></button>
          : <Link key={idx} to={button.link}>{button.text}</Link>)}
      </div> 
    )
}

export default SelectedProject
