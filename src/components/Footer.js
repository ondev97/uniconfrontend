import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/footer.css";
import "../assets/css/mediaFiles/footermedia.css";
import ftimg from "../img/Logo_1.png";

export default function Footer() {
  let location = useLocation();
  if (location.pathname === "/") {
    return "";
  }
  return (
    <div className="footer_main">
      <div className="footer_mid">
        <div className="footer_column">
          <div className="lg">
            <img src={ftimg} alt="footer" />
          </div>
          <div className="ab">
            <p>
              ශ්‍රී ලාංකීය දූ දරුවන් හට විධිමත් අධ්‍යාපනයක් ලබාදීම වෙනුවෙන්
              නිරතුරුව ම කැප වෙන ප්‍රවීණ ගුරු මඩුල්ලක් යටතේ ඔබගේ විෂයයන්
              හැදෑරීමට UNICON E-CLASS සමග අත්වැල් බැඳගන්න.
            </p>
          </div>
        </div>
        <div className="footer_column">
          <h2>Follow Us</h2>
          <ul className="scial">
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-twitter-square"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <div className="footer_column">
          <h2>Explore</h2>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li> */}
            <li>
              <Link to="#">Guidelines</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/allteachers">Teachers</Link>
            </li>
            <li>
              <Link to="/allsubjects">Subjects</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="small_footer">
        <h3>
          COPYRIGHT © UNICON INSTITUTE| PROUDLY POWERED BY
          <span>
            {
              <Link to="//helamid.com" target="_blank">
                &nbsp;HELAMID
              </Link>
            }
          </span>
        </h3>
      </div>
    </div>
  );
}
