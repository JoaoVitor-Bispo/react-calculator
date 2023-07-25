import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers';
import Input from './components/Input';

function App() {
  return (
      <div className="App">
        <div className="main">
          <h1>Calculadora</h1>
          <Input/>
          <Numbers />
        </div>
      </div>
  );
}

export default App;
