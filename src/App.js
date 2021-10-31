import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paper className="App-logocontainer" sx={{backgroundColor: 'White', color: 'Black'}} elevation={3}>
          <img src={logo} className="App-logo" alt="logo" />
        </Paper>
        <Paper className="App-header-infotab" sx={{backgroundColor: 'White', color: 'Black'}} elevation={3}>
          <p style={{fontWeight: 'bolder'}}>Name Name</p>
          <p>Network Icons</p>
        </Paper>
      </header>
        <Paper className="App-section" sx={{backgroundColor: 'White', color: 'Black'}} elevation={3}>
         <p> Main Section</p>
        </Paper>
        
        
      
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
