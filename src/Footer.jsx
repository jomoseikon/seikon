

import * as React from "react";
import { Link } from "react-router-dom"; // Change Gatsby Link to React Router Link

import logo from "./img/logo.svg";
import facebook from "./img/social/facebook.svg";
import instagram from "./img/social/instagram.svg";
import twitter from "./img/social/twitter.svg";

const Footer = () => {
  // Links Array (if you want to make it dynamic)
  const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "https://jomo-news-form.spiral-site.com/discussion" },
  ];

  return (
    <footer className="footer has-background-black has-text-white-ter">
      {/* Footer Logo */}
      <div className="content has-text-centered">
        <img src={logo} alt="YourCompany" style={{ width: "14em", height: "10em" }} />
      </div>

      {/* Footer Links */}
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  {pages.map((page, index) => (
                    <li key={index}>
                      {page.path.startsWith("http") ? (
                        <a href={page.path} className="navbar-item">
                          {page.name}
                        </a>
                      ) : (
                        <Link to={page.path} className="navbar-item">
                          {page.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Social Media Icons */}
            <div className="column is-4 social">
              <a title="facebook" href="https://facebook.com">
                <img src={facebook} alt="Facebook" style={{ width: "1em", height: "1em" }} />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: "1em", height: "1em" }} />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img src={instagram} alt="Instagram" style={{ width: "1em", height: "1em" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
