import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="gutters">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
