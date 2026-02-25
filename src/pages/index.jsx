import HomeContent from '../components/HomeContent';
import About from '../components/About';

import '../styles/HomePage.css';

const HomePage = () =>
{
    return(
    <div className="homeContainer">
        <About />
        <HomeContent />
    </div>
    );
}

export default HomePage;
