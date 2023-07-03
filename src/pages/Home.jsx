import { useState, useEffect, useRef } from "react";
import SelectedProject from "../components/home/SelectedProject";
import projectData from "../data/project-data";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const slider = useRef(null);
  useEffect(() => {
    slider.current = setInterval(() => {
      let newSelected = selectedProject + 1 === projectData.length ? 0 : selectedProject + 1;
      setSelectedProject(newSelected);
    }, 5000);

    return () => clearInterval(slider.current);
  })
  return (
    <>
      <div className="row main-row">
        <div className="card main-card-left">
          <div className="card-inner">
            {projectData.map((project, idx) => {
              return idx === selectedProject ? <SelectedProject key={idx} project={project} /> : null 
            })}
          </div>
        </div>
        <div className="card main-card-right">
          <div className="card-inner">
            <h3>My Projects</h3>
            <ul>
              {projectData.map((project, idx) => <li key={idx} className={
                  project.title === projectData[selectedProject].title ? "selected" : "list-item"
                }>
                {project.title}
              </li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="row secondary-row">
        <div className="card secondary-card">
          <div className="card-inner">
            <h3>My Stack</h3>
          </div>
        </div>
        <div className="card secondary-card">
          <div className="card-inner">
            <h3>The Web Portfolio of Kenneth Horn</h3>
          </div>
        </div>
        <div className="card secondary-card">
          <div className="card-inner">
            <h3>Contact Me</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
