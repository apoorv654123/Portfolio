"use client";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Chatty",
    description:
      "Designed and developed Chatty, a Real-Time chat application using the MERN stack, integrating Socket.IO for instant messaging and leveraging Gemini AI to assist users in Composing and Editing messages. Implemented Secure Authentication, Online presence detection, Theme switching, and Dynamic profile management for a seamless user experience.",
    stack: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Gemini AI" },
      { name: "Cloudinary" },
      { name: "Socket.io" },
      { name: "JWT" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/work/Chatty.png",
    live: "https://www.linkedin.com/posts/apoorv654123_mern-ai-react-activity-7344707039345954816--Nhv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfHruAB4KMlRbUrw8edoTEKLOkrzCTwe3o",
    github: "https://github.com/apoorv654123/Chatty",
  },
  {
    num: "02",
    category: "fullstack",
    title: "PassMAN",
    description:
      "Empower users to securely store, manage, and retrieve passwords with ease. Streamline credential organization, enable instant copying, and ensure data privacy through a responsive, intuitive interface.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "CORS" },
    ],
    image: "/assets/work/PassMAN.png",
    live: "https://www.linkedin.com/posts/apoorv654123_webdevelopment-frontend-backend-activity-7210656170364059648-1s9f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfHruAB4KMlRbUrw8edoTEKLOkrzCTwe3o",
    github: "https://github.com/apoorv654123/PassMan",
  },
  {
    num: "03",
    category: "fullstack",
    title: "RaposStore",
    description:
      "RaposStore is a full-stack product inventory app that leverages React, Vite, Express, and NeonDB. I engineered robust rate-limiting and bot-detection using Arcjet and Helmet, ensuring security and reliability. The app empowers users to seamlessly manage products with a modern, responsive UI built with Tailwind CSS and DaisyUI.",
    stack: [
      { name: "PostgreSQL" },
      { name: "Arcjet" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "CORS" },
    ],
    image: "/assets/work/RaposStore.png",
    live: "https://www.linkedin.com/posts/apoorv654123_react-nodejs-postgresql-activity-7346890071293181952-_Efz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfHruAB4KMlRbUrw8edoTEKLOkrzCTwe3o",
    github: "https://github.com/apoorv654123/RaposStore",
  },
  {
    num: "04",
    category: "fullstack",
    title: "BlogHERE",
    description:
      "Designed and implemented a full-stack blog application using React, Node.js, Express, and MongoDB. Enabled users to create, view, edit, and delete blog posts through an intuitive interface. Integrated RESTful APIs for seamless client-server communication and ensured responsive design for optimal user experience across devices.",
    stack: [
      { name: "React" },
      { name: "CSS 3" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "CORS" },
    ],
    image: "/assets/work/BlogHere.png",
    live: "https://www.linkedin.com/posts/apoorv654123_webdevelopment-frontend-backend-activity-7210664487589150721-ZRst?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfHruAB4KMlRbUrw8edoTEKLOkrzCTwe3o",
    github: "https://github.com/apoorv654123/BlogApp",
  },
  {
    num: "05",
    category: "frontend",
    title: "Snake Game",
    description:"Developed a dynamic Snake game using HTML, CSS, and JavaScript. Engineered smooth keyboard controls, integrated real-time score tracking, and implemented engaging sound effects. Optimized for responsive design and interactive gameplay.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/SnakeGame.png",
    live: "https://www.linkedin.com/posts/apoorv654123_webdevelopment-gamedev-html-activity-7210311910498402305-nE4j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfHruAB4KMlRbUrw8edoTEKLOkrzCTwe3o",
    github: "https://github.com/apoorv654123/SnakeGame",
  },
  {
    num: "06",
    category: "frontend",
    title: "Weather App",
    description:"Weather App empowers users to instantly retrieve real-time weather data by city name. Leveraging the OpenWeatherMap API, it dynamically displays temperature, weather conditions, wind speed, and humidity in a clean, responsive interface. Designed with React, the app streamlines user interaction and ensures a seamless experience across devices.",
    stack: [{ name: "React" }, { name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/WeatherApp.png",
    live: "https://www.linkedin.com/posts/apoorv654123_webdevelopment-frontend-react-activity-7210352545767018496-7wC3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfHruAB4KMlRbUrw8edoTEKLOkrzCTwe3o",
    github: "https://github.com/apoorv654123/WeatherApp",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center bg-white/5 group rounded-full">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center bg-white/5 group rounded-full">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 flex gap-2 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent w-[44px] h-[44px] flex items-center justify-center text-primary text-[22px] hover:bg-accent-hover transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
