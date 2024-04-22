import React from "react";
import Img1 from "../assets/project-1.svg";
import Img2 from "../assets/project-2.svg";
import Img3 from "../assets/project-3.svg";
import Img4 from "../assets/project-4.svg";
import Img5 from "../assets/project-sm-1.svg";
import Img6 from "../assets/project-sm-2.svg";
import Img7 from "../assets/project-sm-3.svg";
import Img8 from "../assets/project-sm-4.svg";
import { MdOutlineArrowForward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="lg:p-20 lg:pb-10 p-10">
      <section className="lg:w-2/3 font-inter">
        <p className="project-head text-black">
          Check out some case studies of some recent projects.
        </p>
      </section>
      <section className="mt-20 lg:block hidden">
        <img src={Img4} alt="projects" className="w-full" />
        <img src={Img3} alt="projects" className="mt-10 w-full" />
        <img src={Img2} alt="projects" className="mt-10 w-full" />
        <img src={Img1} alt="projects" className="mt-10 w-full" />
      </section>
      <section className="mt-20 lg:hidden block">
        <img src={Img8} alt="projects" className="w-full" />
        <img src={Img7} alt="projects" className="mt-10 w-full" />
        <img src={Img6} alt="projects" className="mt-10 w-full" />
        <img src={Img5} alt="projects" className="mt-10 w-full" />
      </section>
      <section className="flex item-center mt-5 justify-between">
        <p className="justify-self-start mt-6 text-xs	">Page 1 of 2</p>
        <div className="justify-self-end">
          <button className="font-trispace mt-5 inline-flex item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-4 lg:py-3 py-1  font-semibold leading-7 text-black bg-white ring-1 ring-black hover:ring-black">
            <span className="mr-3 font-trispace text-xs lg:text-base leading-7">
              Load more pages
            </span>

            <MdOutlineArrowForward className="text-center m-auto" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
