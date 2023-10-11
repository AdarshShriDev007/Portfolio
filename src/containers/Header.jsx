import React from "react";
import {Menus} from "../utils/helper";
import MenuItem from "../components/MenuItem";

const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 md:top-0 w-full h-auto md:h-screen md:w-32 
    flex justify-center items-end md:items-center pb-8 md:pb-0 z-50">

      <div 
        className="2xl:px-4 px-2 py-2 lg:py-5 2xl:py-12 rounded-full border border-[rgba(255,255,255,0.3)] 
        flex flex-row md:flex-col items-center justify-center gap-2 2xl:gap-12 duration-200 backdrop-blur-md" 
        style={{boxShadow:"inset 0px 0px 10px rgba(255,255,255,0.4)"}}
      >
            {
              Menus && Menus.map((item,index)=>{
                return <MenuItem key={index} menu={item} index={index} />
              })
            }
      </div>

    </div>
  );
};

export default Header;
