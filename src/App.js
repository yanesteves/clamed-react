import logo from './logo.svg';
import './App.css';
import Menu from './components/AppComponents/MenuComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu />
      </header>
    </div>
  );
}

export default App;
