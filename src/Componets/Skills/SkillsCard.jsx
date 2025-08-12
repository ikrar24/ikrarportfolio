import React from "react";

function SkillsCard({ skilsImg }) {
  return (
    <div className="flex  items-center justify-center w-[300px] h-[300px] shadow-2xl rounded-lg shadow-blue-900 overflow-hidden p-10">
      <img
        src={skilsImg}
        alt="skill"
        className="object-contain w-[60%] rounded-lg"
      />
    </div>
  );
}

export default SkillsCard;
