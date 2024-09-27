"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    href: "/contact",
    description:
      "I develop custom and responsive websites using the latest technologies. I create intuitive interfaces and optimize code for maximum performance.",
  },
  {
    num: "02",
    title: "SEO",
    href: "/contact",
    description:
      "Increase your website's visibility on search engines through expert keyword analysis, optimized content, and strategic link building.",
  },
];

const Services = () => {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <Link href={service.href} key={index}>
                <div className="flex-1 flex flex-col justify-center gap-6 group">
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <div
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </div>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
