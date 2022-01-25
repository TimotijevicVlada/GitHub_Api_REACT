import { useState, useEffect } from "react";
import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const headers = {
      "Authorization": `token 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`
    }
    try {
      const response = await axios.get(" https://api.github.com/user", {
        "headers": headers
      });
      console.log(response);
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])


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
