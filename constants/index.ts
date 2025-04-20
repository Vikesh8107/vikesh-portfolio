import {  FaYoutube, FaFacebook, FaLinkedin,  } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  

] as const;

export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo ,
    link: "https://github.com/Vikesh8107",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/vikesh-laharpure-925a04263",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/vikeshhhh",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Vikkeshhhh",
  },
] as const;

export const FRONTEND_SKILL = [
  
  
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
 
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GCP",
    image: "gcp.png",
    width: 80,
    height: 80,
  },
  
 
] as const;

export const FULLSTACK_SKILL = [
 

 
] as const;

export const OTHER_SKILL = [
  
  
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Canva",
    image: "canva.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Netlify",
    image: "netlify.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 90,
  },
  {
    skill_name: "Jira",
    image: "jira.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Slack",
    image: "slack.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Gitpod",
    image: "gitpod.png",
    width: 80,
    height: 80,
  },
 
] as const;

// constants/index.ts
export const PROJECTS = [
  {
    title: "IPO Saathi (Mobile App)",
    description:
      "A React Native app for real-time IPO tracking with Google Sign‑In authentication. Live on Play Store with optimized UI and performance.",
    image: "/projects/ipoSaathi.png",
    link: "https://play.google.com/store/apps/details?id=com.iposaathi",
    // mobile app, no iframe
    iframeLink: "https://play.google.com/store/apps/details?id=com.iposaathi", // live embed
  },
  {
    title: "IPO Saathi (Admin Portal)",
    description:
      "An Admin Panel built with Next.js, TypeScript & Tailwind, connected to Firebase Firestore. Allows manual IPO data entry, search & sorting for real‑time updates.",
    image: "/projects/ipo-saathi-admin.png",
    link: "https://iposaathi.netlify.app",
    iframeLink: "https://iposaathi.netlify.app", // live embed
  },
  {
    title: "CryptoDunia",
    description:
      "A crypto dashboard fetching live data from CoinGecko API, with interactive Recharts-powered graphs, search/sort filters & currency conversion feature.",
    image: "/projects/cryptodunia.png",
    link: "https://cryptoduniaforall.netlify.app",
    iframeLink: "https://cryptoduniaforall.netlify.app", // live embed
    // no iframe for this one
  },
  {
    title: "UniStock",
    description:
      "Full‑stack platform for UniStock built in Astro & React. Integrated Google AdSense, privacy policies, and collaborated on frontend leading to 15% engagement boost.",
    image: "/projects/unistock.png",
    link: "https://unistockin.vercel.app",
    iframeLink: "https://unistockin.vercel.app", // live embed
  },
  {
    title: "CodeCrush",
    description:
      "Frontend at CodeCrush: Integrated Clerk auth, WhatsApp & Discord APIs, redesigned DB queries for 30% faster response times (500ms → 300ms).",
    image: "/projects/codecrush.png",
    link: "https://codecrush-bussiness.vercel.app",
    iframeLink: "https://codecrush-bussiness.vercel.app", // live embed
  },
] as const;


export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/channel/UCb1syYf6E8k1t6YL4C6T67A",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Vikesh8107",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/channels/1216133115353759784/1216144137200341052",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/vikeshhhh",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/Vikkeshhhh",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/vikesh-laharpure-925a04263",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://www.youtube.com/channel/UCb1syYf6E8k1t6YL4C6T67A",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://www.linkedin.com/in/vikesh-laharpure-925a04263",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:vikeshlaharpure@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Experience",
    link: "#experience",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const educations = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    duration: "2021 - 2025",
    institution: "Bennett University Noida",
  },
  // {
  //   id: 2,
  //   title: "Higher Secondary Certificate",
  //   duration: "2018 - 2020",
  //   institution: "",
  // },
  // {
  //   id: 3,
  //   title: "Secondary School Certificate",
  //   duration: "2008 - 2018",
  //   institution: "Baitus Saif Islamia Madrasah",
  // }
]

export const experiences = [
  {
    id: 1,
    title: 'Software Engineer I',
    company: "Teton Private Ltd.",
    duration: "(Jan 2022 - Present)"
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Fiverr (freelance)",
    duration: "(Jun 2021 - Jan 2022)"
  },
  {
    id: 3,
    title: "Self Employed",
    company: "Code and build something in everyday.",
    duration: "(Jan 2018 - Present)"
  }
]
