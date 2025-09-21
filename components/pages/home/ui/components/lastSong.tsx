"use client";
import ModalVideo from "@/components/animated/modalVideo";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  url: string;
};

const LastSong = ({ title, url }: Props) => {
  const [isOpened, setOpened] = useState(false);
  return (
    <section className="overflow-hidden relative">
      <div className="container mx-auto py-20 font-martian max-sm:px-4">
        <div className="flex w-full items-center justify-between">
          <h5 className="font-extrabold text-5xl uppercase text-mainRed max-sm:text-4xl">
            {title}
          </h5>
          <p className="font-light text-3xl text-white max-sm:text-xl">
            (2025)
          </p>
        </div>
        <motion.div
          className="w-full mx-auto aspect-video bg-amber-700 mt-10 relative lg:max-w-[60%]"
          onClick={() => setOpened(true)}
          layoutId="lastSong"
          layout
        >
          <Image
            src="/img/cityWalls.png"
            alt="last song"
            quality={100}
            fill
            className="hover:border-4 object-cover hover:border-grayMain transition-all cursor-pointer "
          />
          <p className="bottom-[-40px] text-white/80 right-0 absolute max-sm:text-sm max-sm:bottom-[-50px]">
            Twenty One Pilots - City Walls (Official Video)
          </p>
        </motion.div>
      </div>
      <div className="bg-mainRed/50 blur-3xl size-[300px] rounded-full absolute -right-[150px] -top-[150px]" />
      <div className="bg-mainRed/50 blur-3xl size-[300px] rounded-full absolute right-[20%] bottom-[150px] -z-10" />

      <AnimatePresence>
        {isOpened && (
          <ModalVideo setOpened={setOpened} url={url} layoutId="lastSong" />
        )}
      </AnimatePresence>
    </section>
  );
};

export default LastSong;
