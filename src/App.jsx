import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./pages/Home";
import "./App.scss"

import Demo from "./components/Demo";
import Default from "./pages/demos/Default";

import Test from "./pages/demos/Test/Test";
import TestState from "./pages/demos/Test/TestState";

function App() {

  return (
    <> 
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Demo />}>
            <Route path="/demo" element={<Default />} />
            <Route path="/demo/test" element={<TestState><Test /></TestState>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
