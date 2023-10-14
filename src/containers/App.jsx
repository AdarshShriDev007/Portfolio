import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import { AnimatePresence } from "framer-motion";
import ParticlesContainer from "./ParticlesContainer";
import {resume} from "../assets";

const App = () => {
  return (
    <div className="w-full p-10 md:pr-32">

      {/* particles container */}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}

      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-xl tracking-wide text-texlight">Adarsh K. Shri.</p>
        <div className="flex items-center justify-center gap-10 mt-10">
          <AnimatePresence>
              {
                Socials && Socials.map((item,index)=>{
                  return <HomeSocialLinks key={index} data={item} index={index} />
                })
              }
          </AnimatePresence>
        </div>
        <div className="w-full font-sans flex flex-col text-sm justify-start items-center gap-1 mt-5">
        <address className="text-texlight text-center flex items-center gap-2"><address className="text-primary">Address : </address>New Delhi, India - 110045</address>
          <address className="text-texlight text-center flex items-center gap-2"><address className="text-primary">Email : </address>adarshshrivastava.dev@gmail.com</address>
          <address className="text-texlight text-center flex items-center gap-2"><address className="text-primary">Mobile : </address>+91 8368284349</address>
          <a href={resume} target="_blank" rel="noreferrer" style={{boxShadow:"inset 0px 0px 10px rgba(255,255,255,0.3)"}} className="mt-10 border border-[rgba(255,255,255,0.3)] 
          rounded-xl px-8 py-3 active:95 group hover:border-primary">
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text 
            group-hover:bg-gradient-to-r group-hover:from-primary
          group-hover:to-secondary text-sm">Hire Me</p>
          </a>
        </div>
      </div>

    </div>
  );
};

export default App;
