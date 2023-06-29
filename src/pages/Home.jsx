const Home = () => {
  return (
    <>
      <div className="row main-row">
        <div className="card main-card-left">
          <div className="card-inner">
            <h3>Selected Project</h3>
          </div>
        </div>
        <div className="card main-card-right">
          <div className="card-inner">
            <h3>My Projects</h3>
            <ul>
              <li>Honest Piranha</li>
              <li>Fun Demos</li>
              <li>Another Project</li>
              <li>Silver SuperStore</li>
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
