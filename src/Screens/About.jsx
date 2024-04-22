import React from "react";
import Img from "../assets/banner-about.svg";
import Img1 from "../assets/value1.svg";
import Img2 from "../assets/value2.svg";
import Img3 from "../assets/value3.svg";
import Img4 from "../assets/value4.svg";
import Img5 from "../assets/value5.svg";
import Img6 from "../assets/value6.svg";

const About = () => {
  return (
    <div className="lg:p-20 lg:pb-0 pb-0 p-10">
      <section className="relative">
        <div>
          <img src={Img} alt="Banner" className="w-full" />
        </div>
        <div
          className="absolute bottom-20 left-16 text-white font-inter font-semibold"
          style={{ fontSize: "40px" }}
        >
          <p className="lg:block hidden">
            Connecting business <br /> to their ideal audience
          </p>
        </div>
      </section>
      <section className="font-inter mt-10">
        <p className="about-head">What we are about</p>
        <p className="about-text mt-10">
          "At Dynamic Graphiks, we understand the pivotal role that a compelling
          brand identity plays in today's competitive landscape. Our mission is
          to empower businesses and individuals to stand out and succeed in a
          crowded marketplace. We specialize in crafting bespoke brand
          identities that not only captivate audiences but also effectively
          communicate the essence and values of our clients' brands.
        </p>
      </section>
      <section className="bg-grey lg:p-20 p-5 mt-20 rounded-lg">
        <p className="values-head">What makes us special</p>
        <div className="lg:grid md:grid grid-cols-2 gap-20 mt-10">
          <div>
            <img src={Img2} />
            <p className="font-trispace values">Creativity</p>
            <p className="values-text font-inter">
              At Dynamic Graphiks, creativity is our cornerstone. We believe in
              the power of innovative thinking to transform ideas into
              remarkable brand identities that captivate and inspire.
            </p>
          </div>
          <div>
            <img src={Img1} className="lg:mt-0 md:mt-0 mt-10" />
            <p className="font-trispace values">Authenticity</p>
            <p className="values-text font-inter">
              Authenticity lies at the heart of everything we do. We strive to
              create brand identities that reflect the true essence of our
              clients, ensuring each design is genuine, meaningful, and
              resonates with their audience.
            </p>
          </div>
          <div>
            <img src={Img6} className="lg:mt-0 md:mt-0 mt-10" />
            <p className="font-trispace values">Collaboration</p>
            <p className="values-text font-inter">
              Collaboration fuels our creativity. We work closely with our
              clients, listening to their vision, understanding their goals, and
              combining our expertise to craft brand identities that exceed
              expectations and drive success.
            </p>
          </div>
          <div>
            <img src={Img3} className="lg:mt-0 md:mt-0 mt-10" />
            <p className="font-trispace values">Excellence</p>
            <p className="values-text font-inter">
              Excellence is non-negotiable. From concept to execution, we uphold
              the highest standards of quality and craftsmanship, delivering
              brand identity designs that stand out for their precision,
              elegance, and effectiveness.
            </p>
          </div>
          <div>
            <img src={Img4} className="lg:mt-0 md:mt-0 mt-10" />
            <p className="font-trispace values">Empathy</p>
            <p className="values-text font-inter">
              Empathy is key to our approach. We put ourselves in our clients'
              shoes, understanding their challenges, aspirations, and audience,
              to create brand identities that not only look exceptional but also
              resonate deeply with their target demographic.
            </p>
          </div>
          <div>
            <img src={Img5} className="lg:mt-0 md:mt-0 mt-10" />
            <p className="font-trispace values">Innovation</p>
            <p className="values-text font-inter">
              We embrace emerging trends and technologies, pushing the
              boundaries of design to deliver forward-thinking brand identities
              that make a lasting impact in an ever-evolving marketplace.
            </p>
          </div>
        </div>
        <div className="  mt-20">
          <div className="lg:grid md:grid grid-rows-2 grid-flow-col gap-10">
            <div className="bg-ash row-span-2 rounded-lg team-big"></div>
            <div
              className="bg-ash lg:mt-0 md:mt-0 mt-5 rounded-lg team-normal"
              style={{ height: "330px" }}
            ></div>
            <div
              className="bg-ash lg:mt-0 md:mt-0 mt-5 rounded-lg team-normal"
              style={{ height: "330px" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
