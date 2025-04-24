import React from "react";
import { useSelector } from "react-redux";
import LeetCode from "./Leetcode";
import Gfg from "./GFG/Gfg";
import { leetcode, gfg, codechef, cf } from "../../../../public/svgs/image";
import Codeforces from "./Codeforces/Codeforces";
import Codechef from './/Codechef/Codechef'
import ParticlesBackground from '../../ParticlesBackground.jsx'

function CodingProfile() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div
        className={`flex flex-col relative z-10 md:flex-row items-center justify-center pb-11 md:pb-0 px-5 mx-auto text-center md:text-left 
        ${darkMode ? "bg-black text-white" : "bg-white text-gray-800"} 
        min-h-screen gap-5 md:gap-9`}
      >
        {/* Particles only inside this section */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* Leetcode */}
        <div className="flex flex-col mt-11 justify-center items-center w-full md:w-auto">
          <div className="flex gap-2 mb-3 justify-center items-center">
            <img src={leetcode} alt="leetcode" className="h-10 w-10" />
            <h1 className="text-2xl font-bold mt-2 text-[#dda225]">Leetcode</h1>
          </div>
          <LeetCode username="ankush017" />
          <a
            href="https://leetcode.com/u/ankush017/"
            target="_blank"
            className="bg-[#541274] text-white px-4 py-2 rounded-3xl mt-3"
          >
            Visit Profile
          </a>
        </div>

        {/* GeeksForGeeks */}
        <div className="flex flex-col justify-center mt-14 items-center w-full md:w-auto">
          <div className="flex gap-2 mb-3 justify-center items-center">
            <img src={gfg} alt="gfg" className="h-10 mt-3 w-10" />
            <h1 className="text-2xl font-bold mt-2 text-[#1d9629]">GeeksForGeeks</h1>
          </div>
          <Gfg username="ankush017" />
          <a
            href="https://www.geeksforgeeks.org/user/ankush017/"
            target="_blank"
            className="bg-[#541274] text-white px-4 py-2 rounded-3xl mt-3"
          >
            Visit Profile
          </a>
        </div>
        {/* Codechef */}
        <div className="flex flex-col justify-center mt-14 items-center w-full md:w-auto">
          <div className="flex gap-2 mb-1 justify-center items-center">
            <img src={codechef} alt="gfg" className="h-13 w-13" />
            <h1 className="text-2xl font-bold ml-[-20px] mt-2 text-[#bec925]">Codechef</h1>
          </div>
          <Codechef username="ankush0001" />
          <a
            href="https://www.codechef.com/users/ankush0001"
            target="_blank"
            className="bg-[#541274] text-white px-4 py-2 rounded-3xl mt-3"
          >
            Visit Profile
          </a>
        </div>
        {/* CodeForces */}
        <div className="flex flex-col justify-center items-center mt-7 w-full md:w-auto">
          <div className="flex gap-2 mb-3 justify-center items-center">
            <img src={cf} alt="gfg" className="h-10 w-10" />
            <h1 className="text-2xl font-bold mt-2 text-[#f732f4]">CodeForces</h1>
          </div>
          <Codeforces username="ak4001497" />
          <a
            href="https://www.codechef.com/users/ankush0001"
            target="_blank"
            className="bg-[#541274] text-white px-4 py-2 rounded-3xl mt-3"
          >
            Visit Profile
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <ParticlesBackground />
      </div>
    </>
  );
}

export default CodingProfile;