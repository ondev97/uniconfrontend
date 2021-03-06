import React, { useEffect } from "react";
import cov from "../img/cover.png";
import "../assets/css/home.css";
import "../assets/css/mediaFiles/homemedia.css";
import { Link } from "react-router-dom";
import live1 from "../img/live.png";
import live2 from "../img/live2.svg";
import live3 from "../img/live3.png";
import live4 from "../img/live4.png";
import { useDispatch } from "react-redux";
import { activeAccount } from "../actions";
import { loadStDetails } from "../actions/stDetailsAction";
import whatsapp from "../img/whatsapp.png";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeAccount());
    dispatch(loadStDetails());
    window.scrollTo(0, 0);
  }, [dispatch]);
  return (
    <div className="maininde">
      <div className="uppercover">
        <div className="cov_text">
          <h1>
            Your Success is Our Goal
            <br />
            <span>WELCOME TO UNICON E-CLASS</span>
          </h1>
          <p>
            ශ්‍රී ලාංකීය දූ දරුවන් හට විධිමත් අධ්‍යාපනයක් ලබාදීම වෙනුවෙන්
            නිරතුරුව ම කැප වෙන ප්‍රවීණ ගුරු මඩුල්ලක් යටතේ ඔබගේ විෂයයන් හැදෑරීමට
            අප සමග අත්වැල් බැඳගන්න<span>.</span>
          </p>
          <div className="butsec">
            <h3>For Class Registration</h3>
            <Link to="//wa.me/94714730257" target="_blank">
              <button>
                <img src={whatsapp} alt="whats app" />
                0714730257
              </button>
            </Link>
          </div>
          <div className="simple_footer">
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
        <div className="cov_img">
          <img src={cov} alt="image" />
        </div>
      </div>
      <div className="inde_counter">
        <div className="main_inde_counter">
          <div className="title">
            <h1>ඔබ UNICON E-CLASS තෝරාගත යුත්තේ ඇයි ?</h1>
            <h2>Why do you choose UNICON E-CLASS ?</h2>
          </div>
          <div className="wr">
            <div className="counter_colu">
              <div className="img_sec">
                <img src={live1} />
              </div>
              <h2>Live Steaming</h2>
            </div>
            <div className="counter_colu">
              <div className="img_sec">
                <img src={live2} />
              </div>
              <h2>Video Embedded</h2>
            </div>
            <div className="counter_colu">
              <div className="img_sec">
                <img src={live3} />
              </div>
              <h2>Content Privacy Protection</h2>
            </div>
            <div className="counter_colu">
              <div className="img_sec">
                <img src={live4} />
              </div>
              <h2>Login Sessions</h2>
            </div>
          </div>
          <div className="butsec">
            <Link to="./about">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
