import { useState, useEffect } from "react";
import './App.css';
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
    <div className="App">
      <img src={data.avatar_url} />
    </div>
  );
}

export default App;
