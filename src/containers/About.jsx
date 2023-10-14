import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-6 relative my-12"
    >
      {/*title*/}
      <div className="w-full flex items-center justify-center py-16 md:py-24 text-white">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-4 h-auto object-contain" alt="" />
          <p
            className="text-transparent bg-clip-text 
          bg-gradient-to-r from-primary to-secondary"
          >
            About
          </p>
          <img src={Leaf2} className="w-4 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/*main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*image section*/}
        <div className="w-full flex items-center justify-center px-8">
          <div
            className="w-full md:w-72 p-[2px] rounded-md 
          bg-gradient-to-br from-primary to-secondary relative"
          >
            <img
              src={about}
              alt=""
              className="w-full rounded-md h-auto object-contain"
            />
            <div
              className="absolute w-full h-full -top-3 -left-2 
            bg-gradient-to-br from-primary to-secondary rounded-sm blur-[5px] -z-10"
            ></div>
          </div>
        </div>
        {/*content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            I am a <b>Front-End Developer</b> with 2 years of experience in <b>ReactJs</b> and 
            website design. Strong creative and analytical skills. Team player with 
            an eye for detail. Recently I have done a specialization in <b>ReactJs</b> course 
            from Wap Institute, which has given me the latest skills and knowledge in the 
             <b> Front-End Development</b> industry.
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            My focus is on designing and developing websites that look great and work well. 
            I am skilled in a range of programming, technologies and platforms, including HTML, 
            CSS, Tailwind CSS, JavaScript, React, Redux, Material UI, Firebase, Axios, and Git.
            I have created website clones of famous industries, such as WhatsApp, Facebook, Gmail, 
            LinkedIn, Netflix, Google Drive and many more.
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            I enjoy working with other <b>Front-End Developers</b> and designers to 
            make websites that match the client's brand and business objectives. 
            I am committed to keeping up with the latest industry trends and best practices, 
            and I attend professional <b>Front-End Developer</b> courses to improve my skills.
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
            My goal is to create websites that are both visually appealing 
            and easy to use. I take pride in exceeding client expectations and 
            delivering projects on time.
          </p>
          <p className="text-texlight text-xs md:text-sm tracking-wide text-justify">
          If you are looking for a <b>Front-End Developer</b> with skills, please feel free to get in touch with me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
