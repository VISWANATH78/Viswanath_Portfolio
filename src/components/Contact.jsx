import React from "react";

//https://getform.io/f/c181daf0-a7a2-4c04-9b76-b06c531a3118
const Contact = () => {
 
  return (
    <div
      name="Contact Me"
     
    >  
      <div className="w-full h-screen    bg-slate-50 text-black">
      <div className="flex flex-col p-5 justify-center max-w-screen-lg mx-auto h-full">
        <div className="object-bottom">
          
          <p className="text-4xl   my-auto  mt-10 font-bold border-b-4 border-blue-500 p-2 inline">
            Contact Me
          </p>
          
          <p className="py-6 text-grey-500">Submit the form below to get in touch with me and make alot of Projects</p>
       
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/c181daf0-a7a2-4c04-9b76-b06c531a3118"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2  bg-white rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2  bg-white rounded-md text-black  focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md bg-white  text-black  focus:outline-none"
            ></textarea>

            <button className=" bg-grey-500  rounded-md shadow-lg shadow-cyan-400 text-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center  hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        </div>
      
    </div>
    </div>
    </div>
  );
};

export default Contact;
