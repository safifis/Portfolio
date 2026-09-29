// Content is adapted from the canonical record in resume-system/data/resume.yaml.
// Keep dates, titles, metrics, and technologies aligned with that file.
import {
  backend,
  creator,
  web,
  mobile,
  atlasnova,
  chatham,
  eyeque,
  gaTech,
  husky,
  threads,
  dishtorecipe,
  portfolio,
  evade,
  androidapp,
  github,
  linkedin,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "project", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const contacts = [
  { id: "github", title: "GitHub", link: "https://github.com/safifis", icon: github },
  { id: "linkedin", title: "LinkedIn", link: "https://www.linkedin.com/in/feifei-sun/", icon: linkedin },
];

export const services = [
  { title: "Backend Systems", icon: backend },
  { title: "Full-Stack Applications", icon: web },
  { title: "Cloud Infrastructure", icon: mobile },
  { title: "AI Workflows", icon: creator },
];

export const technologies = [
  { category: "Languages", items: ["C#", "Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  { category: "Backend & Web", items: [".NET", "Spring Boot", "React", "Node.js", "REST APIs", "Microservices"] },
  { category: "Cloud & Data", items: ["Azure", "AWS", "Cosmos DB", "PostgreSQL", "Docker", "Terraform"] },
  { category: "Quality & Observability", items: ["Playwright", "xUnit", "TestContainers", "CI/CD", "Grafana", "OpenTelemetry"] },
];

export const experiences = [
  {
    title: "Software Developer II",
    company_name: "Chatham Financial",
    stack: "C#/.NET · Azure · Cosmos DB",
    icon: chatham,
    iconBg: "#FAF9F7",
    date: "Feb 2026 - Present",
    points: [
      "Designed a market data architecture on Azure that reduced processing time from 8 seconds to 0.2 seconds.",
      "Led technical design discussions and defined event-driven architecture and monitoring practices across production services.",
      "Built monitoring, alerting, and distributed tracing with Grafana, Prometheus, and OpenTelemetry.",
    ],
  },
  {
    title: "Software Developer I",
    company_name: "Chatham Financial",
    stack: "C#/.NET · React · SQL Server",
    icon: chatham,
    iconBg: "#FAF9F7",
    date: "Jan 2025 - Jan 2026",
    points: [
      "Enhanced a valuation platform serving 300,000+ daily valuations and React interfaces used by 200+ financial professionals.",
      "Built REST API and event-driven integrations that reduced manual operational overhead by 40%.",
      "Diagnosed production incidents and reduced latency by 40% through caching, REST API design, and dependency-lifetime tuning.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Chatham Financial",
    stack: "Java · Spring Boot · React",
    icon: chatham,
    iconBg: "#FAF9F7",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Built a Spring Boot and React automation tool that replaced a legacy workflow and improved operational efficiency by 80%.",
      "Added unit, integration, and end-to-end tests with 90%+ coverage using Vitest, xUnit, Playwright, and TestContainers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "AtlasNova AI",
    stack: "Node.js · Express · React",
    icon: atlasnova,
    iconBg: "#383E56",
    date: "Nov 2023 - Mar 2024",
    points: [
      "Developed 20+ reusable React components with Tailwind CSS.",
      "Designed REST APIs with Node.js and Express, documented them with Swagger, and improved data processing performance by 20%.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "EyeQue Corporation",
    stack: "Python · MySQL · scikit-learn",
    icon: eyeque,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Extracted, validated, and analyzed millions of MySQL user records for downstream model training.",
      "Built a DBSCAN clustering model that achieved a 0.919 silhouette score for anomaly detection.",
    ],
  },
];

export const education = [
  {
    institution: "Georgia Institute of Technology",
    degree: "M.S. in Computer Science",
    date: "Aug 2022 - Dec 2024",
    gpa: "3.7/4.0",
    icon: gaTech,
  },
  {
    institution: "University of Washington",
    degree: "B.S. in Economics",
    date: "Sep 2016 - Mar 2020",
    gpa: "3.4/4.0",
    icon: husky,
  },
];

export const projects = [
  {
    name: "Dish to Recipe",
    description: "Production Next.js and TypeScript app with image preprocessing, structured JSON parsing, rate limiting, and Supabase Postgres storage.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: dishtorecipe,
    deployed_link: "https://www.dishtorecipe.com",
  },
  {
    name: "Financial Account Data API",
    description: "Spring Boot REST API that normalizes account data from multiple sources with JWT authentication and PostgreSQL persistence. Deployed on AWS EC2 with Docker.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: null,
  },
  {
    name: "Threads",
    description: "Full-stack social app with Next.js, React, TypeScript, Express APIs, and MongoDB data models.",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    image: threads,
  },
  {
    name: "3D Personal Portfolio",
    description: "Interactive React and Three.js portfolio with 360-degree model exploration, animation, and responsive layouts.",
    tags: ["React", "Tailwind CSS", "Three.js"],
    image: portfolio,
    deployed_link: "https://www.feifei-sun.com",
  },
  {
    name: "3D Game Development",
    description: "C# and Unity racing game with finite-state-machine behavior and greedy-algorithm decision logic for enemy cars.",
    tags: ["C#", "Unity"],
    image: evade,
    deployed_link: "https://drive.google.com/drive/folders/1r1fVowCOMVmSfF8hq8Qu4Tr0X6F6l9-h",
  },
  {
    name: "Job Comparison App",
    description: "Android app built with Java; JUnit tests reached 80% statement and branch coverage.",
    tags: ["Java", "Android Studio", "JUnit"],
    image: androidapp,
  },
];
