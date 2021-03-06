import './style/css/App.css';
import "./style/responsive/Responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
