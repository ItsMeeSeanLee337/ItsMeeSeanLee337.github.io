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
    Cypress,
    Jest,
    JUnit,
    ThreeJS,
    Linux,
    GE,
    LRS,
    GSA,
    rutgers,
    GSAmapproject,
    NutriProproject,
    Photo,
    Chess,
    NewBeginnings,
    portfolio
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
      name: "ThreeJS",
      icon: ThreeJS,
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
        "Developed and implemented a full stack application using Python that integrates with an RFID scanner to verify employee badges against a company dataframe.",
        "Front-end GUI development utilizing CSS to modernize the look and feel of company applications.",
        "Responsible for updating technical documentation to keep up with the development cycle. Recorded instructional videos for training new users and showcase the capabilities of company software.",
      ],
    },
    {
      title: "IT Support Technician",
      company_name: "Rutgers Business School",
      icon: rutgers,
      iconBg: "#FFFFFF",
      date: "September 2021 - May 2023",
      points: [
        "Provided IT assistance for Business school building, troubleshooting issues ranging from Firmware reimaging to resolve printing issues.",
        "Worked with an inhouse ticket system to report completed and in-progress service requests.  Escalated to higher support if needed.",
        "Employed  knowledge for various OS’s (Windows, Linux, Android, iOS) to resolve hardware and software issues.",
      ],
    },
    {
      title: "Software Engineer/ Data Science Internship",
      company_name: "Ground Standard Agency",
      icon: GSA,
      iconBg: "#FFFFFF",
      date: "May 2022 - Oct 2022",
      points: [
        "Developed an internal application with Python and Pandas library to clean data from 40,000 businesses to filter relevant information for the agency’s marketing team.",
        "Used R programming language to create data visualization around the datasource.  Analyze provided data to showcase the growth in business across different regions (Eastern, Central, Western of United State).",
        "Developed Front-end UI for internal mapping website using JavaScript, HTML, and CSS for an improved user experience and allowing new users to view locations and class times of businesses utilizing the Agency’s software.",
      ],
    },
    {
      title: "Computer Science Instructor",
      company_name: "Concorde Education",
      icon: GE,
      iconBg: "#FFFFFF",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Taught computer science fundamentals and Python basics to students from 7 - 11 years old in a classroom setting of 15+ students in a format of 4 lessons for 10 weeks.",
        "Prepared presentations to communicate lesson plans to fellow instructors and integrate skills across different classes.",
        "Prepared 40 reusable lesson plans that challenged students to use problem solving and reasoning skills while also teaching computer logic, basic algorithms, and data structures.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "NutriPro Web Application",
      description:
        "Nutritional website that was built in React and utilizes the Spoonacular API. If you are wondering what to cook using the ingredients inside your fridge, our website can help you!. This website also has convenience features such as a meal planner, nutritional information search, and ingredient replacement search. All the recipes and nutritional information are taken from the Spoonacular API, user information is stored in a mariaDB server. Unit and system testing was conducted using Cypress, Postman, and Jest",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "gray-text-gradient",
        },
        {
          name: "Agile",
          color: "gray-text-gradient",
        },
      ],
      image: NutriProproject,
      source_code_link: "https://github.com/ItsMeeSeanLee337/Software-Engineering-Project",
    },
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
      name: "Personal Portfolio",
      description:
        "My personal portfolio website that you are on right now, developed using HTML, JavaScript, and CSS. To allow for interactivity the React library was used in this project. The 3D models and animations are courtesy of the Three.JS library. Stylization of the website utilized the Tailwind CSS framework. This website is still ongoing and being updated regularly.",
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
      image: portfolio,
      source_code_link: "https://github.com/ItsMeeSeanLee337/ItsMeeSeanLee337.github.io",
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
    }
  ];
  
  export { technologies, experiences, projects };