import React from "react";
import HeroImage from "../assets/m1e.png";
import { RxDownload } from "react-icons/rx"


const Home = () => {
  return (
    <div
      name="Home"
      
    >
      <div className="h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl sm:text-14xl font-bold text-black">
            I'm a Data Scientist & Web Developer
          </h2>
          <p className="text-gray-500 py-3 max-w-md justify">
            I have experience in building and desgining software.<br/>
            I love to work on Data science and web application using 
            technologies like Python,TensorFlow, Matplotlib,Power Bi and React.
          </p>

          <div>
          <div ></div>
          <a href="https://drive.google.com/file/d/1s2BVAy7b1FCPWJEJ-s2pdvfjAMayxxSq/view?usp=share_link" target="_blank" rel="noreferrer">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-md hover:scale-110 duration-300">
              My Resume
              <span className=" hover:drop y-10 ">
                <RxDownload size={15} className="ml-2" />
              </span>
              </button>
              </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
