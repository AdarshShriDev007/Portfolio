import React, { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import Alert from "./Alert"; 

import {addDoc,collection} from "firebase/firestore";
import {db} from "../config/firebase.config";

const Contact = () => {

  const [data,setData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    message : ""
  });

  const [alert,setAlert] = useState({
    isAlert: false,
    message : "",
    status : null
  });

  const handleTextChange = (e)=>{
    const {name,value} = e.target;
    
    setData((prevData)=>({...prevData, [name]:value}))
  }

  const sendMessage = async ()=>{
    if(data.email === "" || data.email === null)
    {
      setAlert({
        isAlert: true, 
        message: "Required fields cannot be empty", 
        status: "warning"
      });

      setInterval(()=>{
        setAlert({
          isAlert: false, 
          message: "", 
          status: null
        });
      },4000);
    }
    else{
      await addDoc(collection(db, "messages"), {...data})
      .then(()=>{
        setData({firstname : "", lastname: "", email: "", message: ""});
        setAlert({
          isAlert: true, 
          message: "Thanks for contacting me", 
          status: "success"
        });
  
        setInterval(()=>{
          setAlert({
            isAlert: false, 
            message: "", 
            status: null
          });
        },4000);
      })
      .catch((err)=>{
        setAlert({
          isAlert: true, 
          message: `Error : ${err.message}`, 
          status: "danger"
        });
  
        setInterval(()=>{
          setAlert({
            isAlert: false, 
            message: "", 
            status: null
          });
        },4000);
      })
    }
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-6 relative my-12"
    >
      {/*toast alert notification*/}
      <AnimatePresence>
        {
          alert.isAlert && (
            <Alert status={alert.status} message={alert.message} />
          )
        }
      </AnimatePresence>
      
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
            Contact Me
          </p>
          <img src={Leaf2} className="w-4 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/*main content */}
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full md:w-[600px] py-2 flex flex-col items-center justify-start gap-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name"
                name="firstname"
                value={data.firstname}
                onChange={handleTextChange}
                autoComplete="off" 
                className="w-full px-4 py-3 rounded-md 
                border border-[rgba(255,255,255,0.3)] 
                bg-transparent focus:border-primary outline-none text-sm text-white"  
              />

              <input 
                type="text" 
                placeholder="Last Name"
                name="lastname"
                value={data.lastname}
                onChange={handleTextChange}
                autoComplete="off" 
                className="w-full px-4 py-3 rounded-md 
                border border-[rgba(255,255,255,0.3)] 
                bg-transparent focus:border-primary outline-none text-sm text-white" 
              />
            </div>

            {/* email field*/}
              <input 
                type="email" 
                placeholder="Type your email here"
                name="email"
                value={data.email}
                onChange={handleTextChange}
                autoComplete="off" 
                className="w-full px-4 py-3 rounded-md 
                border border-[rgba(255,255,255,0.3)] 
                bg-transparent focus:border-primary outline-none text-sm text-white" 
              />
              <textarea 
                name="message"
                value={data.message}
                onChange={handleTextChange} 
                id="" 
                cols="0" 
                rows="10" 
                placeholder="Message here..."
                className="w-full px-4 py-3 rounded-md 
                border border-[rgba(255,255,255,0.3)] 
                bg-transparent focus:border-primary outline-none text-sm text-white"
              ></textarea>

              <div className="w-full flex items-center justify-center md:justify-end">
                <button 
                  className="px-8 text-sm py-2 bg-gradient-to-br from-primary to-secondary
                  rounded-md w-full md:w-auto hover:bg-gradient-to-br
                hover:from-black hover:to-black hover:text-primary border border-primary" 
                  onClick={sendMessage}
                >Send</button>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
