"use client";

import { Swiper as SwiperCore } from "swiper";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/public/assets/content";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperCore) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      id="maincontent"
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                <li className="text-xl text-accent">
                  {project.stack.map((item) => item.name).join(", ")}
                </li>
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {[...Array(2)].map((_, index) => {
                  return (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          asChild
                          aria-label={
                            index === 0
                              ? "Open the live project in a new tab"
                              : "Open the github repository of the project in a new tab"
                          }
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <Link
                            href={index === 0 ? project.live : project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="text-white text-3xl group-hover:text-accent">
                              {index === 0 ? <BsArrowUpRight /> : <BsGithub />}
                            </div>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {index === 0 ? "Live project" : "Github repository"}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              role="region"
              aria-label="Work projects slider"
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full cursor-grab active:cursor-grabbing"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={
                            `Screenshot of ${project.description} project` ||
                            "Project screenshot"
                          }
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
