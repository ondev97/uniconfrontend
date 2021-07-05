import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import "../assets/css/mediaFiles/headermedia.css";
import { AnimatePresence, motion } from "framer-motion";
import ProfileDetails from "../utils/hooks/ProfileDetails";
import logo from "../img/Logo_1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Header({ acDetails }) {
  const [isham, setisham] = useState(false);
  const profileDetails = ProfileDetails(acDetails);
  console.log(acDetails);
  const mobnavani = {
    visible: {
      right: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
    hidden: {
      right: "-100%",
      transition: { duration: 1, ease: "easeIn" },
    },
  };

  const mainRoute = [
    "/",
    "/about",
    "/contact",
    "/allteachers",
    "/allsubjects",
    "/stlogin",
    "/stsignup",
    "/passwordreset",
    "/guidelines",
    "/features",
  ];

  const hambutton = () => {
    setisham(!isham);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    if (isham) {
      setisham(!isham);
    }
  }, [pathname]);

  const headerProPic = () => {
    if (acDetails.key) {
      if (acDetails.is_teacher) {
        return (
          <div className="pro_pic">
            <div className="ac_details_header">
              <h3 style={{ textTransform: "uppercase" }}>
                {profileDetails.userName}
              </h3>
              <p>Instructor</p>
            </div>
            <Link to="teacherdashboard/managecourse">
              <div className="img">
                <LazyLoadImage
                  src={`${profileDetails.pic}`}
                  alt=""
                  effect="blur"
                />
              </div>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="pro_pic">
            <div className="ac_details_header">
              <h3 style={{ textTransform: "uppercase" }}>
                {profileDetails.userName}
              </h3>
              <p>Student</p>
            </div>
            <Link to="studentdashboard/maindashboard">
              <div className="img">
                <LazyLoadImage
                  src={`${profileDetails.pic}`}
                  alt=""
                  effect="blur"
                />
              </div>
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div className="buttons">
          <Link to="/stlogin">
            <button>LOG IN</button>
          </Link>
          {/* <Link to="/stsignup">
                        <button>REGISTER</button>
                    </Link> */}
        </div>
      );
    }
  };

  if (mainRoute.includes(pathname)) {
    return (
      <>
        <nav>
          <div className="column">
            <div className="hlogo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="navigation">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                {/* <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li> */}
                <li>
                  <Link to="/guidelines">GUIDELINES</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/allteachers">TEACHERS</Link>
                </li>
                <li>
                  <Link to="/allsubjects">SUBJECTS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">{headerProPic()}</div>
          <div className="ham">
            <button className="hambeggermenu" onClick={hambutton}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
        <AnimatePresence exitBeforeEnter>
          {isham ? (
            <motion.div
              className="hammenu"
              variants={mobnavani}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              <div className="menham">
                <ul>
                  <Link to="/">
                    <li>HOME</li>
                  </Link>
                  {/* <Link to='/about'>
                                <li>
                                    ABOUT US
                                </li>
                            </Link>
                            <Link to='/contact'>
                                <li>
                                    CONTACT US
                                </li>
                            </Link> */}

                  <Link to="/guidelines">
                    <li>GUIDELINES</li>
                  </Link>
                  <Link to="/about">
                    <li>ABOUT US</li>
                  </Link>
                  <Link to="/allteachers">
                    <li>TEACHERS</li>
                  </Link>
                  <Link to="/allsubjects">
                    <li>SUBJECTS</li>
                  </Link>
                </ul>
                <div className="butham">{headerProPic()}</div>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </>
    );
  } else {
    return "";
  }
}
