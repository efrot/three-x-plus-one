import './App.css';
import Collatz from './Collatz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Collatz x={10}/>
        </div>
      </header>
    </div>
  );
}

export default App;
