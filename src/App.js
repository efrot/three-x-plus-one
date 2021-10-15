import { useState, } from 'react';
import './App.css';
import Collatz from './Collatz';


function App() {
  const [x, setX] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div>
            <input type="text" onChange={(e) => setX(e.target.value)}/>
          <Collatz x={x}/>
        </div>
      </header>
    </div>
  );
}

export default App;
