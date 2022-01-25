import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Search from "./components/Search";

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
