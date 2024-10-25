import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  illustrator,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  metaversus,
  brainwave,
  luffi,
  git,
  figma,
  docker,
  meta,
  starbucks,
  threads,
  tesla,
  shopify,
  carrent,
  motion,
  jobit,
  flashai,
  tripguide,
  threejs,
  davinci,
  photoshop,
  next,
  lucas,
  iphone,
  ciclo,
  bathouse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Framer Motion",
    icon: motion,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Davinci",
    icon: davinci,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Gino proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Gino does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gino optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lucas Zagarra Web",
    description:
      "A portfolio showcasing the work of a video editor, highlighting his creative projects and editing skills with cutting-edge technology to display a variety of visual projects",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lucas,
    source_code_link: "https://github.com/ginopastran/Flash-AI",
    live_demo_link: "https://lucaszagarra.vercel.app/",
  },
  {
    name: "iPhone 15 Clone",
    description:
      "A clone of the iPhone 15 presentation page, designed to replicate the user experience and visual style of Apple’s official website.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/ginopastran/threads-app",
    live_demo_link: "https://iphone15web-clone.vercel.app/",
  },

  {
    name: "Brainwave",
    description:
      "A mock page of a fictional AI platform that simulates integration with other apps, featuring an attractive design that highlights advanced frontend skills",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/ginopastran/brainwave-app",
    live_demo_link: "https://brainwave-app-wine.vercel.app/",
  },
  {
    name: "Ciclo Web",
    description:
      "The website of a company providing software solutions. Built with Next.js and React.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
    ],
    image: ciclo,
    source_code_link: "https://github.com/ginopastran/veterinaria-store",
    live_demo_link: "https://www.ciclosoluciones.com/",
  },
  {
    name: "Bathouse",
    description:
      "A web app featuring a landing page and a pricing calculator for building a house, TailwindCSS, and Next.js for a dynamic and professional visual experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: bathouse,
    source_code_link: "https://github.com/ginopastran/metaversus",
    live_demo_link: "https://www.bathouse.ar/",
  },
];

export { services, technologies, experiences, testimonials, projects };
