import {useEffect, useState} from "react"
import './App.css';
import Clonal from "./components/Clonal";

function App() {

const [solution, setSolution] = useState(null)
useEffect(() => {
  fetch("http://localhost:3001/solutions")
  .then(res => res.json())
  .then(json => {
    const random = json[Math.floor(Math.random()*json.length)]
    
    setSolution(random.word)
  })
}, [setSolution])


  return (
    <div className="App">
      <h1> Clonal</h1>
      {solution && <Clonal solution={solution} />}
    </div>
  );
}

export default App;
