import '../styles/App.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="siteHolder">
      <NavBar />
      <div className="pageHolder">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
