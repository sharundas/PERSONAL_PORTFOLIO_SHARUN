"use client";

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import MyProfile from "@/public/profile-mine.png";

import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

export default function HeroSection() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/sharun-das-619b2b25b/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://www.linkedin.com/in/sharun-das-619b2b25b/",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/sharun-das-619b2b25b/",
      label: "Twitter",
      Icon: SiTwitter,
    },
  ];
  return (
    
    <motion.div
      className="flex flex-col md:flex-row max-w-[1600px] m-auto mx-3 flex-1 mt-[100px] gap-10 items-stretch relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="w-full flex flex-col order-last md:order-first">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            SHARUNDAS <br /> Full Stack Web Developer
          </motion.h1>

          <div className="flex gap-8 mt-5 order-first md:order-last">
            {socials.map((social, index) => {
              const Icons = social.Icon;
              return (
                <Link
                  className="hover:text-blue-500 text-2xl"
                  href={social.link}
                  key={index}
                  aria-label={social.label}
                >
                  <Icons />
                </Link>
              );
            })}
          </div>
        </LampContainer>
      </div>

      <motion.div
        className="w-full  flex items-center justify-center bg-neutral-950 py-[80px] "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Image
          className="mt-[] herosection rounded-3xl  lg:absolute  lg:top-16 "
          src={MyProfile}
          height={350}
          width={400}
          alt="Picture of the author"
        />
      </motion.div>
    </motion.div>
  );
}
