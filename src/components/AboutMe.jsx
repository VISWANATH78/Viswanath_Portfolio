import React from "react";

const About = () => {
  return (
    <div
      name="About Me"
      className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold my-20"
    >
      <div className="max-w-screen-lg p-7 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-4 justify-end">
          I am an aspiring data scientist with a passion for learning and applying data science methods to solve challenging problems. I have completed a few React and Data Science projects and am currently learning more about data science to further my knowledge. I am eager to take on new projects and contribute to the data science community.
        </p>
        <p className="text-xl justify-end mt-4">
        I am also a self-starter and have the ability to quickly pick up new skills, such as programming languages. I am highly motivated to learn more about data science and use it to develop efficient solutions to real-world problems. I am confident that my knowledge and experience will be a great asset to any team.
        </p>
      </div>
    </div>
  );
};

export default About;
