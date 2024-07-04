"use client"
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import MyProfile from "@/public/profile-3.png";
import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <div className="flex flex-col h-screen md:flex-row flex-1 border-t-2 mt-6 border-cyan-600">
      <motion.div className="flex-1 flex justify-center items-center"  initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
        <Image
          src={MyProfile}
          width={350}
          height={300}
          alt="Picture of the author"
          className="border-cyan-500 rounded-full border-2 my-8 lg:my-0"
        />
      </motion.div>
      <motion.div className="h-[40rem] w-full rounded-md flex-1  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden items-center" initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}  >
        <Spotlight
          className="-top-40 flex left-0 md:left-60 md:-top-20 z-50 "
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-24 md:mt-48">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <span className="text-blue-500">About</span>
            <br /> <span className="text-blue-300">Me.</span>
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto px-8">
            𝐈 𝐚𝐦 𝐚 𝟐𝟏 𝐘𝐞𝐚𝐫 𝐨𝐥𝐝 𝐬𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 -- 🇲​​🇮​​🇸​​🇸​​🇮​​🇴​​🇳​
            ​🇹​​🇴​ ​🇹​​🇷​​🇦​​🇳​​🇸​​🇫​​🇴​​🇷​​🇲​ ​🇾​​🇴​​🇺​​🇷​
            ​🇻​​🇮​​🇸​​🇮​​🇴​​🇳 into reality​ ɴᴇᴇᴅ ᴀɴ ᴀᴘᴘ? ᴀɴʏ ᴡᴇʙꜱɪᴛᴇ ʙᴜɢꜱ?
            ᴡᴀɴᴛ ʙᴇᴛᴛᴇʀ ꜱᴇᴏ? ᴡᴀɴᴛ ʙᴇᴛᴛᴇʀ ʀᴇꜱᴘᴏɴꜱɪᴠᴇɴᴇꜱꜱ? ᴡᴀɴᴛ ꜱᴜᴘᴇʀ ᴄᴏᴏʟ
            ᴀɴɪᴍᴀᴛɪᴏɴꜱ ᴛʜᴀᴛ ʏᴏᴜʀ ᴄʟɪᴇɴᴛꜱ ᴅᴏɴ'ᴛ ᴛᴀᴋᴇ ᴛʜᴇ ᴇʏᴇ ꜰʀᴏᴍ ɪᴛ ᴀɴᴅ ꜱᴏ
            ᴍᴏʀᴇ.. ᴀɴᴅ ʏᴏᴜ ᴀʀᴇ ɪɴ ᴛʜᴇ ᴡʀɪᴛᴇ ᴘʟᴀᴄᴇ, ᴛʀᴜꜱᴛ ᴍᴇ ɪ ɢᴏᴛ ᴛʜɪꜱ !!!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
