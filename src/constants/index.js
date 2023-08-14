import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    springboot,
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
    GFEA,
    gaTech,
    husky,
    meta,
    starbucks,
    tesla,
    shopify,
    todolist,
    tindog,
    portfolio,
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
      title: "Experience",
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
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Georgia Institute of Technology",
      company_name: "MS in Computer Science",
      icon: gaTech,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - (Expected) Dec 2024",
      points: [
        "Achieved and maintained a perfect GPA, while also actively participating in collaborative projects with peers.",
        "Coursework: Data Structure & Algorithm, Object Oriented Programming, Human Computer Interact, Software Development Process, Information Security, Machine Learning",
        "Hobby: Tennis, Video Game, Boardgame"
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Golden Financial Exploration Association",
      icon: GFEA,
      iconBg: "#383E56",
      date: "Sep 2020 - May 2021",
      points: [
        "Worked with financial manager who gave pay-to-listen lectures, resulting in ~ $10,000 per lecture, focused on creating KPI metadata reports for conversion pipelines to increase revenue.",
        "Created Python script that consumed CSVs from survey data from attendees, along with show/no show metrics, to ultimately aggregate data, identify trends, and store in a SQLite database.",
        "Direct efforts resulted in 20% reduction in marketing costs while maintaining same level of revenue, in addition to being able to identify the performance of restarting lectures post COVID.",
      ],
    },
    {
      title: "University of Washington",
      company_name: "BS in Economics",
      icon: husky,
      iconBg: "#E6DEDD",
      date: "Sep 2016 - Mar 2020",
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
        "I've never thought about publishing our report on a beautiful website. Thanks to Feifei for building the platform!",
      name: "Zhening Zhang",
      designation: "Data Scientist",
      company: "New York Life Insurance",
      image: "https://media.licdn.com/dms/image/D5635AQHpPwzhiKc_BA/profile-framedphoto-shrink_200_200/0/1687993194997?e=1692320400&v=beta&t=CGrS580WDnJRpw3-H8HxmPpmvG4Biil213VwsQ3DsJc",
    },
    {
      testimonial:
      "Many thanks to Feifei for helping our research team technically! We really appreciate that she always accomplishes in a timely manner.",
      name: "Zhanmo Ni",
      designation: "Bioinformatician",
      company: "Johns Hopkins University",
      image: "https://media.licdn.com/dms/image/C5103AQFus08Stx1_mA/profile-displayphoto-shrink_200_200/0/1535677477802?e=1697673600&v=beta&t=CRfaNnfOPdvjdvWMOXDSG59hZqXt-R51nfqQJ_OY9Oo",
    },
    {
      testimonial:
      "Future Testimonials",
      name: "Future collaborators",
      designation: "Someone",
      company: "Company",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio Website",
      description:
        "This mobile friendly website has been crafted utilizing React and Tailwind CSS, with the incorporation of Three.js for the implementation of 3D graphics. Explore the models by simply swiping through them. ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/safifis/Portfolio",
      deployed_link: "https://portfolio-z4ex.onrender.com/",
    },
    {
      name: "To Do List",
      description:
        "Full Stack application that allows users to create and manage their to do lists for various purposes. Note that the deployed website might take up to one minute to load. Database is recorded. Leave a message :)",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "render",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/safifis/ToDoList",
      deployed_link: "https://todolist-jk4a.onrender.com/",
    },
    {
      name: "TinDog",
      description:
        "Tinder for dogs! Front-end web design using Bootstrap. Developed with mobile-friendly user interface. If you think the design is great, leave a message below in contact section to reach out!",
      tags: [
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/safifis/TinDog",
      deployed_link: "https://safifis.github.io/TinDog/",
    },
        {
      name: "Kickwise",
      description:
        "Checkout this article about data analysis on expected goals in soccar! Static Web page implemented with HTML, CSS, and BootStrap.",
      tags: [
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/safifis/Druid",
      deployed_link: "https://safifis.github.io/Druid/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
