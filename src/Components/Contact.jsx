import React from "react";
import Swal from 'sweetalert2'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5f831f8-2f0a-4c3c-bee3-a5c0e789386d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Successs!",
        text: "Message sent successfully",
        icon: "success"
      });


    }
  };

  return (
    <div className="bg-[#171d32] text-white lg:pb-10 lg:flex lg:border-t-2">
      <div className="">
        <div className="pt-10 pl-5 text-3xl font-bold pb-10 lg:text-4xl lg:ml-10">
          Contact
        </div>
        <div className="mx-16 border-2 lg:w-fit shadow-slate-400 shadow-2xl h-fit p-7 pb-4">
          <form onSubmit={onSubmit}>
            <label className="text-[22px]">
              Name:
              <div>
                <input
                  className="bg-slate-500 outline-none mt-3 mb-3 w-[450px] h-10 text-[18px] p-4 rounded-xl"
                  type="text"
                  min="3"
                  max="25"
                  placeholder="Enter Your Name Here" name = "name" required
                />
              </div>
            </label>
            <label className="text-[22px]">
              Phone No:
              <div>
                <input
                  className="bg-slate-500 mt-3 mb-3 w-[450px] h-10 text-[18px] p-4 outline-none rounded-xl"
                  type="number"
                  placeholder="Enter Your Phone No. Here" name = "phone"
                />
              </div>
            </label>
            <label className="text-[22px]">
              Email:
              <div>
                <input
                  className="bg-slate-500 mt-3 mb-3 outline-none w-[450px] h-10 text-[18px] p-4 rounded-xl"
                  type="email"
                  placeholder="Enter Your Email Here" name = "email"
                />
              </div>
            </label>
            <label className="text-[22px]">
              Message:
              <div>
                <input
                  className="bg-slate-500 outline-none mt-3 w-[450px] h-20 text-[18px] p-4 rounded-xl"
                  type="text"
                  placeholder="Enter Your Message Here" name = "message"
                />
              </div>
            </label>
            <div className="px-32 py-10">
              <button 
               className="bg-blue-600 text-xl shadow-2xl shadow-sky-900 rounded-2xl w-full h-10">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-10 bg-slate-600 mt-20 lg:h-fit lg:rounded-xl lg:mt-[180px]">
        <div className="text-2xl mb-5">Feel free to reach out</div>
        <div className="flex gap-x-5 items-center italic text-xl">
          <FaGithub className="text-3xl" />
          <Link to="https://github.com/Anjali-2652">
            <div className="cursor-pointer">https://github.com/Anjali-2652</div>
          </Link>
        </div>
        <div className="flex gap-x-5 items-center mt-5 italic text-xl">
          <FaLinkedin className="text-3xl" />
          <Link to="https://www.linkedin.com/in/anjali-gupta-671a66286/">
            <div className="cursor-pointer">
              https://www.linkedin.com/in/anjali-gupta-671a66286/
            </div>
          </Link>
        </div>
        <div className="flex gap-x-5 items-center mt-5 italic text-xl">
          <HiOutlineMail className="text-3xl" />
          <div className="cursor-pointer">anjalirauniyar716@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
