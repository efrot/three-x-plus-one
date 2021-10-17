import { useState, } from 'react';
import './App.css';
import Collatz from './Collatz';


function App() {
  const [x, setX] = useState(1);

  return (
    <div className="App grid">
      <div className="App-div">
        <h2 margin='0'> 3 x + 1 </h2>
        <p> type in a positive number <strong>x</strong> </p>
        <div>
          <input type="text" onChange={(e) => setX(e.target.value)}/>
          <Collatz x={x}/>
        </div>
      </div>
    </div>
  );
}

export default App;
