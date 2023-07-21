import { useState, } from 'react';
import './App.css';
import Collatz from './Collatz';


function App() {
  const [x, setX] = useState(1);

  return (
    <div className="App">
      <div className="App-div">
        <h2 margin='0'> 3 x + 1 </h2>
        <div>
          <Collatz x={x}/>
          <p> type in a positive number <strong>x</strong> </p>
          <input type="text" onChange={(e) => setX(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
