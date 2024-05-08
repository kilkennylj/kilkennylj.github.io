import './App.css';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

import './styles/App.css';

function App() {
  return (
    <div className="siteHolder">
        <NavBar />
        <HomePage />
    </div>
  );
}

export default App;
