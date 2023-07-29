import { Link } from "react-router-dom";
import demoData from "../data/demo-data";

const DemoIndex = () => {
  return (
    <>
      <div className="demo-index">
        <h1 className="demo-index-title">
          Demo Index
        </h1>
        <ul className="demo-index-list">
          {demoData.map((demo, idx) => <li key={idx}><Link to={demo.url}>{demo.title}</Link></li>)}
        </ul>
        <Link className="demo-index-home" to={"/"}>Back to Main Page</Link>
      </div>
    </>
  )
}

export default DemoIndex
