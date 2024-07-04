"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="mx-10">
      <div className="">
        <HeroParallax products={products} />
      </div>
      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer
          title="DreamZone Website Link"
          href="https://twitter.com/mannupaaji"
        >
          <motion.div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              DreamZone
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Find Your Dream Home
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </motion.div>
        </PinContainer>
      </div>
    </div>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
];
