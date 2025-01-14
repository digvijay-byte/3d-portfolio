import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    link: "https://github.com/digvijay-byte",
  },
  {
    title: "React Developer",
    icon: mobile,
    link: "https://github.com/digvijay-byte",
  },
  {
    title: "Backend Developer",
    icon: backend,
    link: "https://github.com/digvijay-byte",
  },
  {
    title: "Content Creator",
    icon: creator,
    link: "https://medium.com/@digvijaysuryawanshiwork",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
 {
    testimonial: "Connect with me on LinkedIn:",
    name: "Digvijay Suryawanshi",
    link: "https://www.linkedin.com/in/digvijay-suryawanshi-844576229/",
    designation: "Full Stack Developer",
    company: "Linkedin Profile",
    image: "https://avatars.githubusercontent.com/u/84385232?s=400&u=fec29d7464e6f617ada80b167e4ea24387ab5a09&v=4",
  },
  {
    testimonial: "Connect with me on X:",
    name: "Digvijay-byte",
    link: "https://x.com/digvijay_byte",
    designation: "Full Stack Developer",
    company: "Twitter/X",
    image: "https://pbs.twimg.com/profile_images/1873946651368280064/Fqt6TyRW_400x400.jpg",
  },
  {
    testimonial: "Connect with me on Github:",
    name: "Digvijay-byte",
    link: "https://github.com/digvijay-byte",
    designation: "Full Stack Developer",
    company: "Github",
    image: "https://avatars.githubusercontent.com/u/84385232?s=400&u=fec29d7464e6f617ada80b167e4ea24387ab5a09&v=4",
  },
];

const projects = [
  {
    name: "Agrico",
    description:
      "Web-based platform that allows farmers and buyers to perform bid online , without including any midle people",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Web-Sockets",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/digvijay-byte",
  },
  {
    name: "Medwell",
    description:
      "Web application that enables Doctors and patients to interact online",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "APIS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/digvijay-byte/Medi-Co",
  },
  {
    name: "Image colorization",
    description:
      "image colorization using ML algorithms , converts black and white images to colour image , high accuracy and precision ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Neural Networks",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/digvijay-byte/Image-colorization-openCV-Nueral-networks",
  },
];

export { services, technologies, experiences, testimonials, projects };
