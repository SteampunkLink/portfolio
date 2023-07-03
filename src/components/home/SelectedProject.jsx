
const SelectedProject = ({ project }) => {

  return (
      <div className="selected-project">
        <h3>{project.title}</h3>
        <img className="project-img" src={project.img} alt={project.alt} />
        <p>{project.description}</p>
        {project.buttons.map((button, idx) => <button key={idx}>{button.text}</button>)}
      </div> 
    )
}

export default SelectedProject
