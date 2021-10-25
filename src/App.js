import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-container">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Header
        </p>
        <div style={{backgroundColor: 'black', width: 50, height: 50}}></div>

      </header>
      <section className="App-section">
        <p>
          Main Section
        </p>
      </section>
    </div>
</div>
  );
}

export default App;
