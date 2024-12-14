import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-[#171d32] p-10  h-auto w-full text-white overflow-hidden pt-[50px] text-xl">
      <div>

      Hello! I'm <span className="italic text-blue-300">Anjali Kumari Gupta</span> , a passionate frontend developer with a
      love for creating beautiful and functional websites. With a strong
      foundation in HTML, CSS, and JavaScript, I specialize in bringing designs
      to life and ensuring seamless user experiences. My journey into web
      development began with a curiosity for how websites work and a desire to
      create something impactful. Over the months, I've honed my skills through
      various projects, learning and growing with each challenge.
      </div>

      <p className="mt-5 mb-5 ">
        <div className="italic text-blue-300 mb-3"> Why I Love
      What I Do</div>
      I believe that a well-designed website can make a significant
      difference in how users interact with and perceive a brand. I take pride
      in my attention to detail and my commitment to delivering high-quality
      work that meets the needs of my clients.
      </p>
      <p className="italic  text-blue-300">
      Let's Connect I'm always open to
      new opportunities and collaborations.
      </p>
      <p className="italic pl-10  text-blue-300">Feel free to reach out to me for any
      projects or just to say hi!</p>
      
    </div>
  );
};

export default About;
