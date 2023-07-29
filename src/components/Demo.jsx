import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaRegWindowMaximize, FaBars, FaInfoCircle } from "react-icons/fa";
// import Modal from "./Modal";
import DemoIndex from "../components/DemoIndex";
import demoData from "../data/demo-data";

const Demo = () => {
  const currentURL = window.location.pathname;
  const demoInfo = demoData.find(demo => demo.url === currentURL);
  const infoDisplay = demoInfo?.description ? demoInfo.description : "When you select a demo from the menu, info about that demo will appear here.";

  const [faceClass, setFaceClass] = useState(demoInfo?.description ? "show-front" : "show-right");
  return (
    <>
      <nav className="demo-nav">
        <button className={faceClass === "show-left" ? "active" : ""} onClick={() => setFaceClass("show-left")}>
          <FaInfoCircle />
        </button>
        <button className={faceClass === "show-front" ? "active" : ""} onClick={() => setFaceClass("show-front")}>
          <FaRegWindowMaximize />
        </button>
        <button className={faceClass === "show-right" ? "active" : ""} onClick={() => setFaceClass("show-right")}>
          <FaBars />
        </button>
      </nav>
      <div className="demo-container">
        <div className={`demo-box ${faceClass}`}>
          <div className="box-face box-face_front"><Outlet /></div>
          <div className="box-face box-face_back">back</div>
          <div className="box-face box-face_right"><DemoIndex /></div>
          <div className="box-face box-face_left">{infoDisplay}</div>
        </div>
      </div>
    </>
  )
}

export default Demo
