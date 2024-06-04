import './App.css';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';

import './styles/App.css';

function App() {
  return (
    <div className="siteHolder">
        <NavBar />
        <BlogPage />
        <Footer />
    </div>
  );
}

export default App;
