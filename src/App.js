import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';

import './styles/App.css';

function App() {
  return (
    <div className="siteHolder">
        <Router>
          <NavBar />
          <div className="pageHolder">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
