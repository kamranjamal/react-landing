import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function Card({icon,title,des}) {
  return (
    <div className="bg-gray-700 shadow-lg p-4 w-[300px] rounded-lg  mx-3 ">
      <span className="text-4xl ">
        {icon}
      </span>
      <h2 className="text-2xl font-semibold mt-4 ">{title}</h2>
      <p className="text-sm text-gray-400">
       {des}
      </p>
    </div>
  );
}

export default Card;
