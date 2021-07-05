import React, { useEffect } from "react";
import "../assets/css/guideline.css";

export default function Guidelines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="guideBox">
      <h3>
        <i class="fas fa-circle"></i> ඔබ UNICON E-CLASS සඳහා නවකයෙක් නම් log
        වීමට ප්‍රථම ඔබ තෝරාගත් ගුරුවරයා සමග සම්බන්ධ වී username ලබාගන්න.
      </h3>
      <h3>
        <i class="fas fa-circle"></i> ඔබ එක් විෂයයක් සඳහා ලබාගත් username මගින්
        UNICON E-CLASS හි අනෙක් සියලුම විෂයයන් සඳහා පිවිසිය හැක.
      </h3>
      <h3>
        <i class="fas fa-circle"></i> ඔබගේ ගිණුමෙහි කුමන හෝ තාක්ෂණික ගැටලුවක්
        පවතීනම් ඔබගේ ගුරුවරයා සමග සම්බන්ධ වී එය නිරාකරණය කරගන්න.
      </h3>
    </div>
  );
}
