import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="bg-[#171d32] pt-8 pr-1  pl-5 pb-5 border-t-2 ">
      <div className="text-white text-3xl pb-10  font-bold">
        Skills & Experience{" "}
      </div>

      <div className="flex overflow-x-scroll lg:overflow-x-hidden ">
        <div className=" flex basis-1/2  flex-wrap items-center justify-center gap-x-14 gap-y-0 text-7xl">
          <div>
            <FaHtml5 className=" bg-blue-400 p-1 rounded-xl " />
          </div>
          <div>
            <FaCss3Alt className="bg-blue-400 p-1 rounded-xl" />
          </div>
          <div>
            <FaJsSquare className="bg-blue-400 p-1 rounded-xl" />
          </div>
          <div>
            <RiTailwindCssFill className="bg-blue-400 p-1 rounded-xl " />
          </div>
          <div>
            <RiReactjsLine className="bg-blue-400  p-1 rounded-xl " />
          </div>
        </div>

        <div className="flex">
          <div className="text-white text-3xl ml-10">
            <FaArrowRight />
          </div>
          <div className="text-white ">
            <div className="text-xl pl-1 font-bold">
              {" "}
              Neelgai Bootcamp Participant
            </div>

            <ul className="list-disc pt-5 pl-5">
              <li className="mb-2">
                Participated in an intensive 3-month bootcamp focused on
                frontend development.
              </li>
              <li className="mb-2">
                Gained hands-on experience with HTML, CSS, JavaScript,tailwind
                Css and React.js.
              </li>
              <li className="mb-2">
                Completed various projects, including building responsive
                websites and web applications.
              </li>
              <li className="mb-2">
                Collaborated with peers and mentors to enhance coding skills and
                problem-solving abilities.
              </li>
            </ul>
          </div>

          {/* hackathon experience  */}


          <div className="flex">
            <div className="text-white text-3xl"><FaArrowRight /></div>

          <div className="text-white ">
            <div className="text-xl pl-1 font-bold"> Hackathon Participant</div>

            <ul className="list-disc pt-5 pl-5">
              <li className="mb-2">
                Participated in a competitive hackathon organized by Neelgai.
              </li>
              <li className="mb-2">
                Collaborated with a team to develop innovative solutions within
                a limited timeframe.
              </li>
              <li className="mb-2">
                Utilized skills in frontend development, including HTML, CSS,
                JavaScript,tailwind CSS and React.js.
              </li>
              <li className="mb-2">
                Presented the project to a panel of judges and received
                constructive feedback.
              </li>

              <li className="mb-2">
                Gained valuable experience in problem-solving, teamwork, and
                project management.
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
