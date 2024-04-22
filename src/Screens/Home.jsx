import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import Img from "../assets/banner.svg";
import Img1 from "../assets/brand1.svg";
import Img2 from "../assets/brand2.svg";
import Img3 from "../assets/brand3.svg";
import Img4 from "../assets/brand4.svg";
import Img5 from "../assets/consult.svg";
import Img6 from "../assets/home.svg";
import Img7 from "../assets/thumb.svg";

const Home = () => {
  return (
    <div className="lg:p-20 p-10">
      <section className="">
        <div className="bg-tertiary rounded-2xl p-3 w-fit">
          <p className="font-trispace announce">
            Announcing our newly improved services
          </p>
        </div>
        <div className="lg:w-3/5 lg:mt-10 mt-5">
          <p className="font-inter banner-text">
            Where timeless brand identities are built.
          </p>
        </div>
        <div className="lg:inline-flex mt-10 md:inline-flex gap-6">
          <button className="font-trispace mt-5 inline-flex item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-4 lg:py-3 py-1  font-semibold leading-7 text-black bg-white ring-1 ring-black hover:ring-black">
            <span className="mr-3 font-trispace text-xs lg:text-base leading-7">
              Build an Identity
            </span>

            <MdOutlineArrowForward className="text-center m-auto" />
          </button>
          <button className="font-trispace mt-5 inline-flex item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-4 lg:py-3 py-1  font-semibold leading-7 text-black bg-tertiary ring-1 hover:ring-black ring-transparent">
            <span className="mr-3 font-trispace text-xs lg:text-base leading-7">
              Build an Identity
            </span>

            <MdOutlineArrowForward className="text-center m-auto" />
          </button>
        </div>
      </section>
      <section className="mt-10 lg:mt-20">
        <img src={Img} alt="Banner" className="w-full" />
      </section>
      <section className="mt-10 lg:mt-20">
        <p className="help lg:w-3/5 font-inter">
          Help your audience connect better with your brand. Build a timeless
          brand identity that reflect your brand values and offerings.
        </p>
      </section>
      <section className="mt-10 lg:mt-20">
        <div className="grid lg:grid-cols-4 grid-cols-2">
          <img src={Img1} alt="Brand 1" className="flex-auto h-6 lg:h-12" />
          <img src={Img2} alt="Brand 2" className="flex-auto h-6 lg:h-12" />

          <img
            src={Img3}
            alt="Brand 3"
            className="flex-auto h-6 lg:h-12 mt-5 lg:mt-0 "
          />
          <img
            src={Img4}
            alt="Brand 4"
            className="flex-auto h-6 lg:h-12 mt-5 lg:mt-0"
          />
        </div>
      </section>
      <section className="mt-10 lg:mt-20">
        <p className="help lg:w-3/5 font-inter">
          Build a future for your brand here!
        </p>
        <div className="lg:mt-20 mt-5 grid lg:grid-cols-2 gap-10 font-inter">
          <div className="p-5 lg:p-10 bg-grey w-full rounded-xl">
            <img src={Img5} alt="" className="mt-5 lg:mt-5" />
            <p className="text-xl mt-10">Book a consultation session</p>
            <p className="card-text w-10/12 mt-5">
              Allow your customers connect with your brand and its value
              offerings.
            </p>
          </div>
          <div className="p-5 lg:p-10 bg-tertiary h-fit rounded-xl">
            <p className="card-text w-3/4">
              Bring your audience to one place with a landing page design.
            </p>
            <img src={Img6} alt="" className="h-full mt-10" />
          </div>
        </div>
      </section>
      <section className="bg-primary rounded-xl lg:grid grid-cols-9 lg:p-14 p-8 gap-3 mt-10">
        <div className="col-span-6 text-left">
          <p className="brand-banner-head text-inter text-white">
            Brand Identity Design
          </p>
          <p className="text-inter mt-5 text-white brand-banner">
            Take a step into the future of your brand.
          </p>
          <p className="text-inter text-white brand-banner">
            Get your brand a timeless brand identity.
          </p>
          <button className="font-trispace mt-5 inline-flex item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-4 py-3  font-semibold leading-7 text-black bg-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <span className="mr-3 font-trispace text-xs lg:text-base leading-7">
              Build an Identity
            </span>

            <MdOutlineArrowForward className="text-center m-auto" />
          </button>
        </div>

        <div className="col-span-3 justify-self-start lg:block hidden">
          <img src={Img7} alt="link" />
        </div>
      </section>
      <section className="mt-10 lg:mt-20">
        <p className="lg:w-3/5 brand-banner text-black m-auto text-center font-inter">
          Your business would be perceived and received differently
        </p>
        <div className=" lg:w-3/5 m-auto">
          <div className="grid grid-cols-4 gap-10">
            <button className="switch-buttons font-trispace mt-5 item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-2 py-3  font-semibold leading-7 text-white bg-primary ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <p className=" text-xs lg:text-base leading-7">E-commerce</p>
            </button>
            <button className="switch-buttons font-trispace mt-5 item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-2 py-3  font-semibold leading-7 text-black bg-white hover:ring-1  hover:ring-gray-900/20">
              <p className=" text-xs lg:text-base leading-7">Technology</p>
            </button>
            <button className="switch-buttons font-trispace mt-5 item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-2 py-3  font-semibold leading-7 text-black bg-white hover:ring-1  hover:ring-gray-900/20">
              <p className=" text-xs lg:text-base leading-7">Housing</p>
            </button>
            <button className="switch-buttons font-trispace mt-5 item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-2 py-3  font-semibold leading-7 text-black bg-white hover:ring-1  hover:ring-gray-900/20">
              <p className=" text-xs lg:text-base leading-7">FMCG</p>
            </button>
          </div>
        </div>
        <div className="lg:grid font-inter md:grid grid-cols-3 gap-10 mt-20">
          <div>
            <img src={Img1} alt="Brand" className="lg:h-12 h-8" />
            <p className="testimonies">
              Dynamic Graphiks exceeded our expectations, crafting an identity
              that perfectly embodies Calidad’s essence. Their expertise and
              creativity set a new standard for our brand. We highly recommend
              them for their unmatched professionalism and vision.
            </p>
          </div>
          <div className="lg:mt-0 md:mt-0 mt-8">
            <img src={Img2} alt="Brand" className="lg:h-12 h-8" />
            <p className="testimonies">
              “Dynamic Graphiks brilliantly captured the essence of Edwin’s care
              support brand with their innovative design. Their professionalism
              and attention to detail truly elevated our brand identity. We
              highly endorse Dynamic Graphiks for their exceptional work and
              vision.
            </p>
          </div>
          <div className="lg:mt-0 md:mt-0 mt-8">
            <img src={Img3} alt="Brand" className="lg:h-12 h-8" />
            <p className="testimonies">
              Dynamic Graphiks flawlessly translated the complexity of Grasp
              IQ’s AI and Biometric platform into a visually compelling
              identity. Their expertise and creativity brought our vision to
              life with precision. We highly recommend Dynamic Graphiks for
              their exceptional design prowess.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
