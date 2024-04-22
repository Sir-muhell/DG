import React from "react";
import Img from "../assets/link.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineArrowForward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="lg:p-32 lg:pb-10 p-10">
        <section className="bg-secondary rounded-xl lg:grid grid-cols-9 lg:p-14 p-8">
          <div className="col-span-6 text-left">
            <p className="text-inter text-white brand-banner">
              Ready for the world to start connecting with your brand offering?
            </p>
            <button className="font-trispace mt-5 inline-flex item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-4 py-3  font-semibold leading-7 text-black bg-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="mr-3 font-trispace text-xs lg:text-base leading-7">
                Build an Identity
              </span>

              <MdOutlineArrowForward className="text-left m-auto" />
            </button>
          </div>

          <div className="col-span-3 justify-self-center lg:block hidden">
            <img src={Img} alt="link" />
          </div>
        </section>
        <section className="lg:mt-20 mt-10 text-left p-5">
          <p className="font-trispace lg:text-2xl sm:text-base font-semibold">
            <NavLink to="/">Dynamic Graphiks</NavLink>
          </p>
          <div className="grid lg:grid-cols-10 grid-cols-2 mt-5 font-inter font-base">
            <div className="col-span-4">
              <div className="text-xs lg:text-base grid grid-cols-2">
                <div>
                  <p className=" font-bold">Company</p>
                  <ul className="list-none">
                    <li className="mt-3">
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li className="mt-3">Career</li>
                    <li className="mt-3">Blogs</li>
                  </ul>
                </div>
                <div>
                  <p className=" font-bold">Services</p>
                  <ul className="list-none">
                    <li className="mt-3">Brand Identity</li>
                    <li className="mt-3">Create Art Direction</li>
                    <li className="mt-3">Brand Positioning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:mt-0 mt-5">
              <div className="text-xs lg:text-base grid lg:grid-cols-3 grid-cols-2">
                <div>
                  <p className=" font-bold">Resources</p>
                  <ul className="list-none">
                    <li className="mt-3">Support</li>
                    <li className="mt-3">Consultation</li>
                  </ul>
                </div>
                <div>
                  <p className=" font-bold">Legal</p>
                  <ul className="list-none">
                    <li className="mt-3">
                      <NavLink to="/privacy">Privacy Policy </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 lg:mt-0">
                  <p className=" font-bold">
                    <NavLink to="/contact">Contact</NavLink>
                  </p>
                  <ul className="list-none">
                    <li className="mt-3">hello@dynamicgraphiks.com</li>
                    <li className="mt-3">IG TW</li>
                    <li className="mt-3">+234 703 064 7319</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:p-20 pt-0 pb-0 p-10 ">
        <hr></hr>
        <p className="font-inter lg:font-normal lg:text-base text-xs text-left lg:mt-10 mt-8 pb-5">
          All Rights Reserved. © 2024 DynamicGraphiks
        </p>
      </div>
    </>
  );
};

export default Footer;
