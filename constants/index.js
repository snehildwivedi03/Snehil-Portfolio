import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import { color } from "framer-motion";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
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
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    // {
    //   name: "TypeScript",
    //   icon: "/assets/tech/typescript.svg",
    //   link: "https://www.typescriptlang.org/",
    // },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/Cpp.png",
      link: "https://cplusplus.com/doc/",
    },
    // {
    //   name: "Python",
    //   icon: "/assets/tech/python.svg",
    //   link: "https://www.python.org/",
    // },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Bootstrap",
      icon: "/assets/tech/bootstrap.png",
      link: "https://getbootstrap.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Canva",
      icon: "/assets/tech/canva.png",
      link: "https://www.canva.dev/docs/apps/",
    },
    // {
    //   name: "Postman",
    //   icon: "/assets/tech/postman.svg",
    //   link: "https://www.postman.com/",
    // },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    // {
    //   name: "Docker",
    //   icon: "/assets/tech/docker.svg",
    //   link: "https://www.docker.com/",
    // },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "SQL",
      icon: "/assets/tech/sql.png",
      link: "https://www.w3schools.com/sql/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Frontend Freelancer Developer",
    company_name: "Swadha Organics",
    icon: "/assets/company/swadha-logo.png", // same as reference
    iconBg: "#E6DEDD",
    date: "April 2025",
    points: [
      "Designed and developed a responsive frontend prototype using Javascript, Bootstrap, and CSS animations.",
      "Collaborated closely with the founders to build the UI for a pitch presentation during a startup hackathon.",
      "Delivered a polished MVP under tight deadlines, helping the team secure ₹10 Lakh in initial funding.",
      "Implemented smooth UI/UX flow, reusable components, and a design consistent with the brand identity.",
    ],
  },

  {
    title: "Content Editor Intern",
    company_name: "Icy Tales",
    icon: "/assets/company/IcyTales.png", // same as reference, replace with actual icon if needed
    iconBg: "#D1E8FF",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Edited and optimized 80+ articles for grammar, SEO, and readability using WordPress CMS.",
      "Led a team of 10 content writing interns, ensuring consistent quality and on-time submissions.",
      "Collaborated closely with the editorial team to enforce content guidelines and publishing standards.",
      "Enhanced overall article performance by improving structure, meta descriptions, and visual formatting.",
    ],
  },
  {
    title: "GFG Profile",
    company_name: "GeeksforGeeks",
    icon: "/assets/company/gfg.png",
    iconBg: "#E6F4E6",
    date: "Present",
    company_website: "https://www.geeksforgeeks.org/user/snehil01dwivedi/",
    points: [
      "Solved 200+ DSA problems in topics like arrays, trees, strings, graphs, etc.",
      "Participated in coding contests and built foundational knowledge through articles and guides.",
      "Used GFG’s editorials to learn multiple approaches and optimize solutions.",
    ],
  },
  {
    title: "LeetCode Profile",
    company_name: "LeetCode",
    icon: "/assets/company/leetcode.png",
    iconBg: "#D1E8FF",
    date: "Present",
    company_website: "https://leetcode.com/u/snehildwivedi03/",
    points: [
      "Solved 150+ problems across key topics like arrays, strings, dynamic programming, and graphs.",
      "Improved algorithmic thinking and problem-solving consistency through daily challenge participation.",
      "Applied refined DSA skills to optimize personal projects and enhance edge case handling.",
    ],
  },
  ,
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Swadha Organics",
    description:
      "Swadha Organics is the MVP of a sustainability-focused platform that won ₹10 Lakhs funding at a university hackathon. Built with HTML, CSS, JavaScript, and SCSS, it showcases a clean and accessible design for promoting organic living and eco-friendly practices.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "mvp",
        color: "green-text-gradient",
      },
      {
        name: "UI",
        color: "purple-text-gradient",
      },
      {
        name: "UX",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/swadha-organics.png",
    source_code_link: "https://github.com/snehildwivedi03/Swadha-Orgnanics",
    deployed_link: "https://swadha-organics.netlify.app/",
  },

  {
    name: "JavaScript Portfolio",
    description:
      "This is a portfolio based on OPerating System Design and it showcase my other 29 JavaScript projects, including an eCommerce website, OOPs-based mini apps, a color generator, and more. It implements various ES6+ features, APIs, and DOM manipulation concepts.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "es6",
        color: "blue-text-gradient",
      },
      {
        name: "dom",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "web portfolio",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/javasript-portfolio.png",
    source_code_link: "https://github.com/snehildwivedi03/JavaScript-Projects",
    deployed_link: "https://snehil-js-portfolio.netlify.app/",
  },

  {
    name: "C++ Projects",
    description:
      "A collection of core C++ projects showcasing my expertise in object-oriented programming, file handling, and system-level design. These include a Library Management System with student/admin roles, a Unix-style Mini Shell supporting piping and redirection, a DSA Visualizer for algorithm animations, a multithreaded Chat Application using TCP/UDP sockets, and a Bank Management System with file persistence. Together, they reflect my problem-solving ability and hands-on experience with building real-world C++ applications.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "file-handling",
        color: "pink-text-gradient",
      },
      {
        name: "system-programming",
        color: "orange-text-gradient",
      },
      {
        name: "sockets",
        color: "purple-text-gradient",
      },
    ],
    image: "/assets/Cpp-Card.png",
    source_code_link: "https://github.com/snehildwivedi03/Cpp-Projects",
    deployed_link: "",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/snehildwivedi03",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/snehil-dwivedi-/",
  },
];

const heroTexts = [
  "Freelancer",
  500,
  "Full-Stack Developer",
  500,
  "Problem Solver",
  500,
  "Constant Learner",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
