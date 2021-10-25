import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logocontainer"><img src={logo} className="App-logo" alt="logo" /></div>
        <div className="App-header-infotab">
          <p style={{fontWeight: 'bolder'}}>Name Name</p>
          <p>---</p>
          <p>Email:</p>
          <p>Github:</p>
          <p>Snapchat:</p>
          <p>Header</p>
          <p>Header</p>

        </div>
      </header>
      <section className="App-section">
        <p>
          Main Section
        </p>
      </section>
    </div>
  );
}

export default App;
