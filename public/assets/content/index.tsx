import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

// Nav, MobileNav
export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

// Social
export const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/RIFATozen",
    label: "Open my GitHub profile in a new tab",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/r%C4%B1fat-%C3%B6zen-879536171",
    label: "Open my LinkedIn profile in a new tab",
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/RIFATozn",
    label: "Open my X profile in a new tab",
  },
];

// Stats
export const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 11,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 120,
    text: "Code commits",
  },
];

// services
export const services = [
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

// resume
export const resume = {
  about: {
    title: "About me",
    description:
      "Hi, I'm Rıfat. My passion for software development drives me to constantly explore new technologies and create innovative solutions. I specialize in frontend development. My problem-solving skills and creativity allow me to find simple and effective solutions to complex problems.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Rıfat Özen",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+90) 538 233 9956",
      },
      {
        fieldName: "Experience",
        fieldValue: "2+ Years",
      },
      {
        fieldName: "Email",
        fieldValue: "rfatozenn@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Turkish",
      },
    ],
  },
  experience: {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
      "Although I don't have so much professional work experience, I have undertaken many personal projects related to software development during my university years. I developed applications using React which helped me gain experience in frontend development. I have also kept my technological knowledge and skills up-to-date by taking online courses.",
    items: [
      {
        company: "Freelance",
        position: "Frontend Developer",
        duration: "2022 - Present",
      },
    ],
  },
  education: {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
      "My mechanical engineering background has equipped me with strong analytical and problem-solving skills, which I am effectively applying to frontend development.",
    items: [
      {
        institution: "Dokuz Eylul University",
        degree: "Mechanical Engineering",
        duration: "2025",
      },
    ],
  },
  skills: {
    title: "My skills",
    description:
      "As a frontend developer, I have experience impressive and high-performance web applications using popular frameworks like React and Next.js. I have successfully implemented complex user interfaces with clean, scalable code written in TypeScript. By leveraging Framer Motion, I have created engaging animations to enhance user experience. I am skilled in utilizing tools like Git, npm, and VS Code to deliver high-quality projects in a team environment.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <SiTypescript />,
        name: "typescript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind",
      },
      {
        icon: <SiFramer />,
        name: "framer motion",
      },
    ],
  },
};

// work
export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "A film site interface where people can watch movies and TV series",
    stack: [{ name: "Next.js" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://rfatozen-movie-art.vercel.app/",
    github: "https://github.com/RIFATozen/movieArt",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "A fully responsive modern ui/ux website in react.js",
    stack: [{ name: "React.js" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "https://rifatozen-gpt3.surge.sh/",
    github: "https://github.com/RIFATozen/gpt3",
  },
];

// contact
export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+90) 538 233 9956",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rfatozen1@gmail.com",
  },
];
