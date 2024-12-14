import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  // navigate = useNavigate();

  return (
    <div className="bg-slate-500 h-full w-full">
    <div className="flex bg-[#171d32] h-auto pb-14  border-b-2 w-full overflow-hidden justify-between lg:mr-10 lg:px-[70px] items-center p-5 text-white">
      <div className="basis-1/2">
        <h1 className="mt-4 font-bold lg:text-3xl lg:mt-0 text-[25px]">
          Hello I'm Anjali
        </h1>
        <p className="mt-2 lg:text-xl ">
          Welcome to my portfolio! I'm a passionate frontend developer with a
          knack for creating visually stunning and user-friendly websites. With
          a strong foundation in HTML, CSS, JavaScript, tailwind CSS and react js, I
          bring designs to life and ensure seamless user experiences.
        </p>

        <Link to = '/contact'>
        <button
          className="px-2 py-2 lg:px-5 lg:py-3 lg:text-xl font-bold mt-4 bg-blue-800 rounded-xl outline-none transition-all duration-300 hover:text-blue-800 hover:bg-blue-400 hover:shadow-[0_0_1em_0.25em_rgb(100,100,255),0_0_4em_2em_rgba(0,0,255,0.781),inset_0_0_0.75em_0.25em_rgb(217,176,255)] 
    active:shadow-[0_0_0.6em_0.25em_rgb(0,0,255),0_0_2.5em_2em_rgba(0,0,255,0.781),inset_0_0_0.5em_0.25em_rgb(0,0,255)]
    "
        >
          <span className="absolute top-[120%] left-0 w-full h-full  opacity-70 blur-[2em] transform rotate-x-[35deg] scale-y-[0.6] pointer-events-none"></span>
          Contact Me
        </button>
        </Link>
      </div>
      <div className="">
        <img
          className="h-[200px] w-[200px] lg:h-[300px]
          lg:w-[300px] rounded-full"
          src="src/assets/myimage.jpg"
        />
      </div>
      </div>

      {/* about section */}

      <div className=" bg-[#171d32] p-5 pb-14 pt-10 text-white flex gap-x-5 ">
        <div>
          <img className="rounded-xl lg:ml-16 " 
          src="src/assets/image.avif" />
        </div>

        <div className="lg:ml-20 lg:text-center">
          <h2 className="text-3xl font-bold lg:text-4xl lg:mb-10">About Me</h2>
          <p className="lg:text-xl">
            Hello! I'm Anjali, a passionate frontend developer with a love for
            creating beautiful and functional websites. With a strong foundation
            in HTML, CSS and JavaScript and react Js, I specialize in bringing
            designs to life and ensuring seamless user experiences.
          </p>


          <Link to = '/about'>

          <button
          
            className="px-5 py-2 lg:px-5 lg:py-3 lg:mt-10 lg:text-xl font-bold mt-4 bg-blue-800 rounded-xl outline-none transition-all duration-300 hover:text-blue-800 hover:bg-blue-400 hover:shadow-[0_0_1em_0.25em_rgb(100,100,255),0_0_4em_2em_rgba(0,0,255,0.781),inset_0_0_0.75em_0.25em_rgb(217,176,255)] 
    active:shadow-[0_0_0.6em_0.25em_rgb(0,0,255),0_0_2.5em_2em_rgba(0,0,255,0.781),inset_0_0_0.5em_0.25em_rgb(0,0,255)]
    "
          >
            <span className="absolute top-[120%] left-0 w-full h-full  opacity-70 blur-[2em] transform rotate-x-[35deg] scale-y-[0.6] pointer-events-none"></span>
            See More
          </button>
          </Link>
        </div>
      </div>

     
<Skills/>
<Projects/>
<Contact/>
     
    </div>
    
  );
};

export default Home;
