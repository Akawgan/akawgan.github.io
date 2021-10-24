import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Twilight Tavern
        </p>
        <div style={{backgroundColor: 'white', width: 50, height: 50}}></div>

      </header>
    </div>
  );
}

export default App;
