import React from "react";
import "./Footer.css";
import Logo from "../../assets/1.png";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaPinterestP />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="..." />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
