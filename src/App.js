import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import FetchedApi from './components/api';
import NavigationBar from './components/navigationbar';
import HomePage from './components/home';
import backgroundImage from './components/background.jpeg';

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-y',
          height: '100vh',
          width: '100vw',
        }}
      >
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
