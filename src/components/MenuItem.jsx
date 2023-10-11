import React, { useState } from "react";
import {AnimatePresence,motion} from "framer-motion";

const MenuItem = ({menu,index}) => {

  const [isHoverred,setIsHoverred] = useState(false);

  return (
    <a href={menu.uri} className="w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer 
    hover:bg-gradient-to-br hover:from-primary hover:to-secondary relative" 
      onMouseEnter={()=>setIsHoverred(true)}
      onMouseLeave={()=>setIsHoverred(false)}
    >

      <menu.Icon className={`text-texlight group-hover:text-bgPrimary text-sm 2xl:text-lg`} />

      {/* tooltip */}
      <AnimatePresence>
        {
          isHoverred && (
            <motion.div
              initial={{opacity:0, x: -25 }}
              animate={{opacity:1, x: 0}}
              exit={{opacity:0,x: -25}}
              className="hidden md:block absolute bg-white rounded-md text-center w-[70px] py-1 -left-[95px]
              after:absolute after:-right-1 after:top-[6px] after:w-3 after:h-3 after:bg-white
              after:rotate-45" 
            >

              <p className="text-bgPrimary text-xs">{menu?.name}</p>

            </motion.div>
        )}
      </AnimatePresence>

    </a>
  );
};

export default MenuItem;
