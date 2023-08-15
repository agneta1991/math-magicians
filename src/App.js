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
          // background:
          // 'radial-gradient(circle, rgba(183,183,181,1) 0%, rgba(255,228,196,1) 100%)',
          height: '100vh',
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
