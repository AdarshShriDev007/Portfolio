import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero,resume } from "../assets";
import {HeroTypeWritter, HomeSocialLinks} from "../components";
import {Socials} from "../utils/helper";


const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-6 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/*content section */}
        <div className="w-full h-full flex flex-col items-center md:items-start justify-center gap-4">
          <h4 className="text-xl md:text-2xl text-texlight">
            Hello, It's me
            <span className="block tracking-wider text-2xl md:text-3xl lg:text-5xl mt-1 md:mt-3 text-white">Adarsh K. Shri.</span>
          </h4>

          {/* typeWritter */}
          <h2 className="text-lg md:text-xl text-texlight mt-1">And I'm{" "}
            <HeroTypeWritter
              speed={100} 
              words={["a Frontend Developer...", "a React Developer...", "a UI Designer..."]} 
            />
          </h2>
          <p className="text-xs md:text-sm text-texlight mt-4 text-center md:text-left">
            I am a qualified and professional <b>Front-End Developer</b> with 2 years of experience in <b>ReactJs</b> and
            website design . Strong creative and analytical skills. Team player with an eye for detail.
            <br /><br />
            If you are looking for a <b>Front-End Developer</b> with skills, please feel free to get in touch with me.
          </p>

          {/* social media links*/}
          <div className="flex items-center justify-center gap-10 mt-10">
            <AnimatePresence>
                {
                  Socials && Socials.map((item,index)=>{
                    return <HomeSocialLinks key={index} data={item} index={index} />
                  })
                }
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a href={resume} target="_blank" rel="noreferrer" style={{boxShadow:"inset 0px 0px 10px rgba(255,255,255,0.3)"}} className="mt-10 border border-[rgba(255,255,255,0.3)] 
          rounded-xl px-8 py-3 active:95 group hover:border-primary">
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text 
            group-hover:bg-gradient-to-r group-hover:from-primary
          group-hover:to-secondary text-sm">Hire Me</p>
          </a>
        </div>
        {/*hero image */}
        <div className="w-full h-full flex items-center md:items-start justify-center">
          <motion.img 
           initial={{ y : 0 }}
           animate={{ y : [-10, 10, -10]}}
           transition={{
            repeat : Infinity,
            duration : 2,
            ease : "linear"
           }}

           src={Hero} className="w-[80%] h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
