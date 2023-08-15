import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import FetchedApi from './components/api';
import NavigationBar from './components/navigationbar';
import HomePage from './components/home';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<FetchedApi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
