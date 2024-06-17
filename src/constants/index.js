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
    atlasnova,
    eyeque,
    GFEA,
    gaTech,
    husky,
    meta,
    starbucks,
    tesla,
    shopify,
    threads,
    todolist,
    tindog,
    portfolio,
    boardgame,
    kickwise,
    evade,
    androidapp,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    linkedin,
    zhanmo,
    zhening
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
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const contacts = [
    {
      id: "github",
      title: "GitHub",
      link: "https://github.com/safifis",
      icon: github,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/feifei-sun/",
      icon: linkedin,
    }
  ]
  
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
      title: "Software Developer Intern",
      company_name: "Atlas Nova AI",
      icon: atlasnova,
      iconBg: "#383E56",
      date: "November 2023 - Present",
      points: [
        "Worked with a diverse team to develop a robust full stack web application, focusing on optimizing client workflows.",
        "Utilized React.js and Tailwind CSS to create highly reusable components for a dynamic and responsive user interface.",
        "Led the development of the server-side logic with Node.js and Express.js, focusing on efficient data processing.",
        "Configured and maintained a DynamoDB database, optimizing data storage and retrieval processes for high-performance and reliability.",
        "Implemented Docker to containerize the application, significantly improving deployment efficiency and ensuring consistent performance across different environments."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "EyeQue Corporation",
      icon: eyeque,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Design and develop full stack web service for a highly customized patient intake workflows, facilitating streamlined prescription writing and patient information recording.",
        "Saving 40 hours per week in manual entry and prepare the project to scale up for millions of users.",
        "Improve the project scalability using reusable components through React.js and Tailwind CSS for styling.",
        "Integrate HTTP REST API with existing system in Java with Spring Boot and hosted on AWS.",
        "Output of intake workflows sends data to legacy scheduling and processing system that integrates with the existing business while remaining HIPPA compliant.",
        "Responsible for managing & analyzing data stored in MySQL, representing millions of customer records"
      ],
    },
    {
      title: "Georgia Institute of Technology",
      company_name: "MS in Computer Science",
      icon: gaTech,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - (Expected) Dec 2024",
      points: [
        "Member of Girls Who Code",
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
      company_name: "BS in Economics, Entrepreneur minor",
      icon: husky,
      iconBg: "#E6DEDD",
      date: "Sep 2016 - Mar 2020",
      points: [
        "Started my own retail company in Seattle building brand and selling Airpod cases.",
        "Designed and hosted stock competition in DyVest Investment Club.",
        "Theatre Club, Boardgame Club"
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
      image: zhening,
    },
    {
      testimonial:
      "Many thanks to Feifei for helping our research team technically! We really appreciate that she always accomplishes in a timely manner.",
      name: "Zhanmo Ni",
      designation: "Bioinformatician",
      company: "Johns Hopkins University",
      image: zhanmo,
    },
  ];
  
  const projects = [
    {
      name: "Threads Social Media",
      description:
        "This full stack social media app is developed using React to generate fast and user-friendly front-end, and Next.js to create modularized backend that supports server side rendering, leading to faster loading time. Utilized MongoDB as the database.",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/safifis/Threads",
      deployed_link: "https://threads-safifis.vercel.app/",
    },
    {
      name: "3D Portfolio Website",
      description:
        "This mobile friendly website has been crafted utilizing React and Tailwind CSS, with the incorporation of Three.js for the implementation of 3D graphics. Explore the models by simply swiping through them. ",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/safifis/Portfolio",
      deployed_link: "https://portfolio-z4ex.onrender.com/",
    },
    {
      name: "Betrayal of House on the Hill",
      description:
        "This website displays the probability of Dice rolls in the Boardgame Betrayal of House on the Hill. The data comes from simulations of 1000 times per chart instead of pure statistical calculations.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
      ],
      image: boardgame,
      source_code_link: "https://github.com/safifis/Boardgame",
      deployed_link: "https://boardgame-lebz.onrender.com/",
    },
    {
      name: "To Do List",
      description:
        "Full Stack application that allows users to create and manage their to do lists for various purposes. Note that the deployed website might take up to one minute to load. Database is recorded. Leave a message :)",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
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
      name: "EVADE",
      description:
        "A 3D video game made with C# and Unity. Checkout the trailer and gameplay video! Designed AI interactions between game objects using Finite State Machine.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "GitHub",
          color: "pink-text-gradient",
        },
      ],
      image: evade,
      source_code_link: "https://github.com/safifis",
      deployed_link: "https://drive.google.com/drive/folders/1r1fVowCOMVmSfF8hq8Qu4Tr0X6F6l9-h",
    },
    {
      name: "KickWise",
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
      image: kickwise,
      source_code_link: "https://github.com/safifis/Druid",
      deployed_link: "https://safifis.github.io/Druid/",
    },
    {
      name: "Job Compare",
      description:
        "This Android Application allows users to compare their job opportunities efficiently. Back-end is not deployed due to school policy.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "JUnit",
          color: "pink-text-gradient",
        },
      ],
      image: androidapp,
      source_code_link: "https://github.com/safifis",
      deployed_link: "https://safifis.github.io/Druid/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
