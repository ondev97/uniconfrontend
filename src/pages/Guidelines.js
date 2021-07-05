import React, { useEffect } from "react";
import "../assets/css/guideline.css";

export default function Guidelines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="guideBox">
      <h3>
        👉ඔබ UNICON E-CLASS සඳහා නවකයෙක් නම් log වීමට ප්‍රථම ඔබ තෝරාගත් ගුරුවරයා
        සමග සම්බන්ධ වී username ලබාගන්න.
      </h3>
      <h3>
        👉ඔබ UNICON E-CLASS හි එක් විෂයකට වඩා සම්බන්ධ වන්නේ නම් ඒ එක් එක් විෂයන්
        සදහා ඔබට වෙන්වූ username ලබාගත හැක.
      </h3>
      <h3>
        👉ඔබගේ ගිණුමෙහි කුමන හෝ තාක්ෂණික ගැටලුවක් පවතීනම් ඔබගේ ගුරුවරයා සමග
        සම්බන්ධ වී එය නිරාකරණය කරගන්න.
      </h3>
    </div>
  );
}
