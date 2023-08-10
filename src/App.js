import './App.css';
import Calculator from './components/calculator';
import FetchedApi from './components/api';

function App() {
  return (
    <div className="app">
      <Calculator />
      <FetchedApi />
    </div>
  );
}

export default App;
