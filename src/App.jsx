import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.scss'

function App() {

  return (
    <> 
      <Router>
        <div className="gutters">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
