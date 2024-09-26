import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from "./img/logo.svg";
import "./Navbar.css";
import 'bulma/css/bulma.min.css';
import "./style.css";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* ここに他のコンポーネントやルーティングを追加 */}
      </div>
    </Router>
  );
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
<section class="hero is-medium main__header">
<div class="hero-head">
    <nav
      className="navbar main__header__layout"
      role="navigation"
      aria-label="main-navigation"
      style={{backgroundColor:"rgba(40,86,161,1)"}}
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
            <span style={{color:"white"}} />
            <span style={{color:"white"}} />
            <span style={{color:"white"}} />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/" style={{backgroundColor:"rgba(40,86,161,1)"}} aria-label="トップページ">
              トップページ
            </Link>
            <Link className="navbar-item" to="/products" style={{backgroundColor:"rgba(40,86,161,1)"}} aria-label="入会のご案内">
              入会のご案内
            </Link>
            <Link className="navbar-item" to="/blog" style={{backgroundColor:"rgba(40,86,161,1)"}} aria-label="最近の講演">
              最近の講演
            </Link>
            <Link className="navbar-item" to="/about" style={{backgroundColor:"rgba(40,86,161,1)"}} aria-label="会則">
              会則
            </Link>
          </div>
        </div>
      </div>
    </nav>
</div>
</section>
  );
};