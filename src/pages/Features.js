import React from "react";
import features1 from "../img/live.png";
import features2 from "../img/live2.svg";
import features3 from "../img/live3.png";
import features4 from "../img/live4.png";
import "../assets/css/features.css";
import FeaturesBox from "../components/FeaturesBox";

export default function Features() {
  return (
    <div className="maininde">
      <div className="upper_cover">
        <h1>About Us</h1>
      </div>
      <div className="features-container">
        <FeaturesBox
          image={features1}
          heading="Live Streaming"
          para="ගුරුවරුන්ට UNICON E-CLASS වෙබ් අඩවිය හරහා Live Classes පැවත්විය හැක. සිසුන්ට තම ශිෂ්‍ය ගිණුම (student account) හරහා Live Classes සදහා සම්බන්ද විය හැක. ගුරුවරයාට සිසුවා සමග සම්බන්ද වෙමින් ඉගැන්වීම් කටයුතු සිදු කල හැකි අතර මෙය සිසුන්ට සජීවී පන්ති කාමරයක අත්දැකීම සමීප කරවයි."
        />
        <FeaturesBox
          image={features2}
          heading="Video Embedded"
          para="Live Classes සදහා සම්බන්ද විය නොහැකි සිසුන් වෙනුවෙන් ඔබගේ ගුරුවරයා පාඩම්මාලා සදහා අදාළ සියලු recording videos UNICON E-CLASS වෙබ් අඩවිය වෙත upload කර තබනු ලැබේ. සිසුන්ට තම ශිෂ්‍ය ගිණුම (student account) හරහා එම පාඩම්මාලා තමන්ට පහසු වේලාවක අධ්‍යනය කල හැක. "
        />
        <FeaturesBox
          image={features3}
          heading="Content Privacy Protection"
          para="ගුරුවරුන් විසින් UNICON E-CLASS වෙබ් අඩවිය සදහා එක් කරනු ලබන සියලු අන්තර්ගතයන් (video contents) හි පුර්ණ අයිතිය අදාල ගුරුවරයා සතු වේ. එම අන්තර්ගතයන් (video contents) සිසුන්ට හෝ වෙන කිසිදු තෙවන පාර්ශවයකට කිසිලෙසක share කිරීමට හෝ download කිරීමට නොහැක."
        />
        <FeaturesBox
          image={features4}
          heading="Login Sessions"
          para="සිසුන්ගේ සියලු පෞද්ගලික දත්ත UNICON E-CLASS වෙබ් අඩවිය තුල සුරක්ෂිත වේ. සිසුන්ට කිසිවිටෙක තමන්ගේ UNICON E-CLASS ශිෂ්‍ය ගිණුම (student account) තවත් සිසුන් අතරේ හුවමාරු කරගෙන භාවිතා කල නොහැක. එලෙස හුවමාරු කරගෙන භාවිතා කළහොත් එම student account ස්වයන්ක්‍රියව අක්‍රිය (block) වීම සිදුවේ."
        />
      </div>
    </div>
  );
}
