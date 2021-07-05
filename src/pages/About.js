import React, { useEffect } from "react";
import ab1 from "../img/ab1.png";
import "../assets/css/about.css";
import Guidelines from "./Features";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="maininde">
        <div className="upper_cover">
          <h1>About Us</h1>
        </div>
        <div className="body_sec">
          <div className="ab_column">
            <p>
              උමාල් සෙනවිරත්න විසින් ආරම්භ කරන ලද UNICON E-CLASS, ශ්‍රී ලාංකීය
              දූ දරුවන් හට මාර්ගගත ක්‍රමය ඔස්සේ විධිමත් අධ්‍යාපනයක් ලබාදීම සඳහා
              සැකසූ නව්‍ය වේදිකාවකි. මේ සඳහා ඔහු සමඟ උපාධිධාරී ගුරු මඩුල්ල එක්ව
              කටයුතු කරයි. පාසල් සිසුන්ට ඔවුන්ගේ විෂයට අදාළ ලංකාවේ ප්‍රවීන හා
              දක්ෂ ගුරුවරුන් සමග මාර්ගගත ක්‍රමය ඔස්සේ සම්බන්ධ වෙමින් නිවසේ සිට
              සුරක්ෂිතව අධ්‍යාපන කටයුතු කිරීමට අවස්ථාව මෙයින් උදාවේ.
            </p>
          </div>
          <div className="ab_column">
            <img src={ab1} alt="image" />
          </div>
        </div>
      </div>
      <Guidelines />
    </>
  );
}
