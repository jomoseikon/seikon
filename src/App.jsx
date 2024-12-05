// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

//import { initializeAnalytics, trackPageView } from './utils/analytics';
import logo from "./img/logo.svg";
import "./Navbar.css";
import 'bulma/css/bulma.min.css';
import "./style.css";

import Home from './pages/Home';
import Products from './pages/Products';
import BlogRoll from './BlogRoll'; // Import BlogRoll
import TableLayout from './TableLayout';
import Blog from './pages/Blog';
import About from './pages/About';
import ReturnTop from './ReturnTop';

import FullWidthImage from './FullWidthImage';
import Footer from './Footer';

// Analytics Wrapper Component
const AnalyticsWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when the route changes
    if (typeof window !== 'undefined') {
      ReactGA.send({ 
        hitType: 'pageview', 
        page: location.pathname 
      });
    }
  }, [location]);

  return null;
};

export default function App() {
  // Initialize analytics when the app starts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.initialize('G-NE6XRMDYNW'); // Replace with your actual Measurement ID
    }
  }, []);

  return (
    <div>
      <Router>
      <AnalyticsWrapper />
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<TableLayout />} /> {/* Show list of blog posts */}
            <Route path="/blog/:id" element={<Blog />} /> {/* Show individual blog post */}
            <Route path="/about" element={<About />} />
          </Routes>
      
          <Footer />{/* Add ReturnTop component */}
          <ReturnTop />
        </div>
      </Router>
    </div>
  );
}
// Example placeholder components for Home, Blog, and About
// const Home = () => <div>Welcome to the Home Page!</div>;
// const Blog = () => <div>Welcome to the Blog Page!</div>;
// const About = () => <div>Welcome to the About Page!</div>;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="hero is-medium main__header">
      <div className="hero-head">
        <nav
          className="navbar main__header__layout"
          role="navigation"
          aria-label="main-navigation"
          style={{ backgroundColor: "rgba(40,86,161,1)" }}
        >
          <div className="container">
            <div className="navbar-brand">
              <a href="http://jomo-news.co.jp/" target="_blank" rel="noreferrer">
                <img src={logo} alt="" style={{ width: "120px", marginTop:".9rem" }} />
              </a>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                data-target="navMenu"
                role="menuitem"
                tabIndex={0}
                onKeyPress={toggleHamburger}
                onClick={toggleHamburger}
              >
                <span style={{ color: "white" }} />
                <span style={{ color: "white" }} />
                <span style={{ color: "white" }} />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${isActive ? 'is-active' : ''}`}
            >
              <div className="navbar-end has-text-centered" style={{marginTop: ".9rem"}}>
                <Link className="navbar-item" to="/" style={{ backgroundColor: "rgba(40,86,161,1)" }} aria-label="トップページ">
                  トップページ
                </Link>
                <Link className="navbar-item" to="/products" style={{ backgroundColor: "rgba(40,86,161,1)" }} aria-label="入会のご案内">
                  入会のご案内
                </Link>
                <Link className="navbar-item" to="/blog" style={{ backgroundColor: "rgba(40,86,161,1)" }} aria-label="最近の講演">
                  最近の講演
                </Link>
                <Link className="navbar-item" to="/about" style={{ backgroundColor: "rgba(40,86,161,1)" }} aria-label="会則">
                  会則
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <FullWidthImage
          img={{ url: "./img/home-jumbotron.jpg" }}
          title=""
          subheading="群馬の政経文化のための知的サロン"
          height={500}
          imgPosition="top center"
        />
      </div>
    </section>
  );
};

