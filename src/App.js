import logo from './logo.svg';
import './App.css';
import { Context, Child } from './components/context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Child />
      </Context>
    </div>
  );
}

export default App;
