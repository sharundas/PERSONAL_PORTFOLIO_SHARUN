"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col h-screen md:flex-row justify-center items-center gap-6 flex-1 mx-9 my-16">
      <motion.div
        className="flex flex-grow justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased border-r-2 border-cyan-400">
          <div className="max-w-2xl mx-auto p-4 items-center flex flex-col justify-center">
            <div
              aria-label="Orange and tan hamster running in a metal wheel"
              role="img"
              className="wheel-and-hamster "
            >
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Join the waitlist
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
             Hi , If You liked My profile you can email me at sharund034@gmail.com and i happy to reply.
            </p>
          </div>
          <BackgroundBeams />
        </div>
      </motion.div>

      {/* // contact form */}
      <motion.div
        className="flex flex-col flex-grow-[2] justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* <div className="form-container ">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea id="textarea" name="textarea" rows="10" cols="50" required />
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div> */}
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="form-container">
          <div className="form">
            <span className="heading">Get in touch</span>
            <input placeholder="Name" type="text" className="input" />
            <input
              placeholder="Email"
              type="email"
              className="input"
              id="mail"
            />
            <textarea
              placeholder="Say Hello"
              rows="10"
              cols="30"
              id="message"
              className="textarea"
            ></textarea>
            <div className="button-container">
              <button className="send-button">Send</button>
              <div className="reset-button-container">
                <button id="reset-btn" className="reset-button" type="button">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
