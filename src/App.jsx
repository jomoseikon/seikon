// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Added Routes, Route
import logo from "./img/logo.svg";
import "./Navbar.css";
import 'bulma/css/bulma.min.css';
import "./style.css";

import Products from './pages/Products'; // Products component
import FullWidthImage from './FullWidthImage'; // FullWidthImage component

export default function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar /> {/* Navbar will remain constant */}
          
          {/* This is where the page content will change based on the route */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Example Home page */}
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} /> {/* Add the Blog component */}
            <Route path="/about" element={<About />} /> {/* Add the About component */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// Example placeholder components for Home, Blog, and About
const Home = () => <div>Welcome to the Home Page!</div>;
const Blog = () => <div>Welcome to the Blog Page!</div>;
const About = () => <div>Welcome to the About Page!</div>;

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
                <img src={logo} alt="" style={{ width: "120px" }} />
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
              <div className="navbar-end has-text-centered">
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
          img={{ url: "./img/home-jumbotron.jpg" }} // Update this path with your image URL or remove it if not needed
          title=""
          subheading="Your Subheading Here"
          height={400}
          imgPosition="top center"
        />
      </div>
    </section>
  );
};
