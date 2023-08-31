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
    mongodb,
    git,
    GE,
    LRS,
    GSA,
    rutgers,
    GSAmapproject,
    PennaProject,
    Photo,
    Chess,
    NewBeginnings
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
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
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
      iconBg: "#FFFFFF",
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
      name: "Android Chess App",
      description:
        "The Android Chess App is exactly what it says: a mobile application that allows you to play chess either by yourself or with a friend. A 2D representation of the board is created with corresponding pieces in the correct colors. All functionalities such as movement of pieces, choosing to resign/draw, and undoing past movements is handled by touch. This app also allows for you to play against an AI and record your previous games.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "gray-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
      ],
      image: Chess,
      source_code_link: "https://github.com/ItsMeeSeanLee337/Android",
    },
    {
      name: "Photo Library Replica App",
      description:
        "Just like Google Photos and Apple iCloud, The Photo Library app allows you to store all your favorite memories and create new albums. An admin account allows for for users to be created and deleted. Non-admin users can create albums, add photos, and associate tags/locations with images. Photos, users, and albums are also saved and serialized upon closing the app. An initial GUI storyboard and UML diagram was created to set a roadmap for this project.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "gray-text-gradient",
        },
        {
          name: "UML",
          color: "orange-text-gradient",
        },
        {
          name: "VS Code",
          color: "green-text-gradient",
        },
      ],
      image: Photo,
      source_code_link: "https://github.com/ItsMeeSeanLee337/Photos",
    },
    {
      name: "Personal Portfolio",
      description:
        "My personal portfolio website that you are on right now that was developed using HTML, JavaScript, and CSS. To allow for interactivity the React library was used in this project. The 3D models and animations are courtesy of the Three.JS library. Stylization of the website utilized the Tailwind CSS framework. This website is still ongoing and being updated freqeuntly.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "gray-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Photo,
      source_code_link: "https://github.com/ItsMeeSeanLee337/ItsMeeSeanLee337.github.io",
    },
    {
      name: "Enactus: New Beginnings Mobile App",
      description:
        "As a volunteer mobile application developer for Enactus: New Beginnings, I helped create the profile page that users will first see when logging in. The New Beginnings mobile app helps formerly incarcerated individuals secure employment, establish strong relationships with mentors, and gain access to local resources in order to ease their transition from prison. The application was developed using Flutter and the Dart programming language in Android Studio",
      tags: [
        {
          name: "Dart",
          color: "blue-text-gradient",
        },
        {
          name: "Flutter",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "gray-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
      ],
      image: NewBeginnings,
      source_code_link: "https://github.com/Enactus-New-Beginnings/mobile-app-flutter",
    },
    {
      name: "Ground Standard Agency Explorer Map",
      description:
        "Using HTML, JavaScript, and CSS, I redesigned the Ground Standard Agency Explorer map. All bugs and broken links from the original explorer map are fixed, along with changing formating, text alignment, and incorrect logos. The explorer map allows for users to view which martial arts gyms are supported by Ground Standard Agency. Users can also see class times, find directions, and schedule an available free class for corresponding gyms. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "VS Code",
          color: "green-text-gradient",
        },
      ],
      image: GSAmapproject,
      source_code_link: "https://github.com/ItsMeeSeanLee337/Gym_explorer_map",
    },
    {
      name: "Election Database API Project",
      description:
        "Using election data for the 2020 presidential election, I created utilized MySQL script to build multiple API calls. User are able to use these API calls to compare election data between the two presidential candidates, specifically in regards to vote count and leading precincts. Users are able to see which candidate had the most votes in each precinct, compare timestamps to view when voting activity was highest, and view when precincts were flipped to support the leading candidate.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL Workbench",
          color: "green-text-gradient",
        },
      ],
      image: PennaProject,
      source_code_link: "https://github.com/ItsMeeSeanLee337/CS_336_Code/tree/main/Penna%20Project",
    },
  ];
  
  export { technologies, experiences, projects };