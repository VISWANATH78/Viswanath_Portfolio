import React from "react";

import TF from "../assets/TF.jpg";
import S from "../assets/S.png";

import reactImage from "../assets/react.png";
import tableau from "../assets/Tableau.png";
import Python from "../assets/python.png"
import c from "../assets/c++.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-green-400",
    },
    {
      id: 2,
      src: c,
      title: "C++",
      style: "shadow-blue-100",
    },
    {
      id: 3,
      src: tableau,
      title: "Tableau",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      src: TF,
      title: "Tensor Flow",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: S,
      title: "Seaborn",
      style: "shadow-blue-500",
    },
    
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
   
    
   
   
  ];

  return (
    <div
      name="Skills"
      className="bg-white w-full pb- -9 h-screen my-auto  mt-auto"
    >
      <div className="max-w-screen-lg   mx-auto my-auto mt-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl my-auto z-1  mt-auto font-bold border-b-4 border-blue-500 p-2 inline">
            Skills
          </p>
          <p className="py-8">These are the technologies I've worked with and also learning alot everyday</p>
        </div>

        <div className="w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;