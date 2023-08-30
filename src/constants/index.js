import {
    javascript,
    html,
    css,
    python,
    java,
    Cprogramming,
    flutter,
    dart,
    mysql,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    GE,
    LRS,
    GSA,
    rutgers,
    carrent,
    jobit,
    tripguide,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: Cprogramming,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Systems Engineering Intern",
      company_name: "Levi, Ray, & Shoup, Inc.",
      icon: LRS,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Developed small programs using Python, CSS, and Powershell to integrate LRS products into clients’ business environments and create custom splash pages.",
        "Supported the Enterprise Output Management (EOM) sales team by understanding and answering technical questions for prospective customers",
        "Responsible for rewriting outdated documentation and recording guide videos to act as a guide for onboarding new users and to demonstrate the capabilities of LRS software",
      ],
    },
    {
      title: "IT Support Technician",
      company_name: "Rutgers Business School",
      icon: rutgers,
      iconBg: "#E6DEDD",
      date: "September 2021 - May 2023",
      points: [
        "Responsible for responding to and troubleshooting urgent technical and network issues within the Business School",
        "Accustomed to handling service requests for Windows, Linux, Android, Apple devices",
        "Responsible for conducting computer system maintenance checks every week and replacing defective hardware",
      ],
    },
    {
      title: "Software Engineer/ Data Science Internship",
      company_name: "Ground Standard Agency",
      icon: GSA,
      iconBg: "#383E56",
      date: "May 2022 - Oct 2022",
      points: [
        "Utilized Python to clean data from 40,000 businesses to filter relevant information for the agency’s marketing team",
        "In charge of developing three data visualizations utilizing R aimed at showcasing the business growth within our database across the Eastern, Central, and Western regions of the United States.",
        "Tasked with redesigning a mapping website for an improved user experience and allowing new users to view locations and class times of businesses utilizing the Agency’s software",
      ],
    },
    {
      title: "Computer Science Instructor",
      company_name: "Concorde Education",
      icon: GE,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Taught computer science principles and Python basics to students from 7 - 11 years old in a classroom setting of 15+ students in a format of 4 lessons for 10 weeks",
        "Prepared 40 reusable lesson plans that challenged students to use problem solving and reasoning skills while also engaging them and teaching valuable computer science skills",
        "Participated in meetings with 3 other instructors to coordinate lesson plans and integrate skills learned in other classes",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologies, experiences, projects };