/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdul Quddous",
  title: "Hi, I'm Abdul Quddous",
  subTitle:
    "Full-Stack Engineer having Entrepreneurship passion with a drive for innovation of developing impactful solutions. Combining technical expertise with entrepreneurial mindset to innovate solutions that solve real-world problems.",
  resumeLink: "https://www.linkedin.com/in/kudos112/", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kudos112",
  linkedin: "https://www.linkedin.com/in/kudos112/",
  gmail: "quddoux112@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/Mian.Abdul.kuddoos",
  discord: "https://discordapp.com/users/1056230162208919562",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Develop highly secure, scalable and reliable backends using everyone's favourite NodeJs and MongoDB",
    "Follow international coding standards and ethics",
    "Integration of third party services such as Social Logins / Firebase/ AWS / Digital Ocean"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "COMSATS University Islamabad, Lahore Campus",
      logo: require("./assets/images/comsats.jpg"),
      subHeader: "Bachelors of Science in Software Engineering",
      duration: "September 2018 - July 2022",
      desc: "",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "99%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "99%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Walqalum Technologies",
      companylogo: require("./assets/images/walqalum.png"),
      date: "Jan 2022 – April 2022",
      desc: "Being in professionals means a lot to learn. Same gone with me, learned a lot team building, team work, ethical behavior, resource sharing, and hands on experience on technologies like",
      descBullets: ["Java", "ReactJs", "NextJS", "React-Native"]
    },
    {
      role: "Full Stack Engineer",
      company: "Freelancer",
      companylogo: require("./assets/images/feature-image.png"),
      date: "Jan 2022 – Present",
      desc: "Believe in Self Learning, Working with people from all over the world, is an nourishing experience for me. ALways seeking for good oppurtunity where I can use my skills to be beneficial. Strongly believe in team work.",
      descBullets: [
        "MERN Stack",
        "NodeJs",
        "Express",
        "ReactJs",
        "NextJs",
        "Redux TK",
        "Context Api"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank Problem Solving (Basic)",
      subtitle: "Credential ID: 3BF6FF3B0F22",
      image: require("./assets/images/hackerrank_logo.svg"),
      imageAlt: "Hacker Rank Logo",
      footerLink: [
        {
          name: "Click to View Certificate",
          url: "https://www.hackerrank.com/certificates/3bf6ff3b0f22"
        }
      ]
    },
    {
      title: "Javascrpit Advanced Certification Course",
      subtitle: "Credential ID: 1625594972779",
      image: require("./assets/images/programing_hub2.jpeg"),
      imageAlt: "Programming Hub Logo",
      footerLink: [
        {
          name: "Click to View Certificate",
          url: "https://drive.google.com/file/d/1YlXm5tu-3os2EJJTtEXudW32rYDEzCbM/view?usp=sharing"
        }
      ]
    },
    {
      title: "React Development Certification Course",
      subtitle: "Credential ID: 1626672541613",
      image: require("./assets/images/programing_hub2.jpeg"),
      imageAlt: "Programming Hub Logo",
      footerLink: [
        {
          name: "Click to View Certificate",
          url: "https://drive.google.com/file/d/16kyvb9A6Y_PvAof0iY9IjDTMs9mGL7vh/view?usp=sharing"
        }
      ]
    },
    {
      title: "Software Testing Certification Course",
      subtitle: "Credential ID: 1626753445227",
      image: require("./assets/images/programing_hub2.jpeg"),
      imageAlt: "Programming Hub Logo",
      footerLink: [
        {
          name: "Click to View Certificate",
          url: "https://drive.google.com/file/d/1TqluOPjs9XLoSSAtJp7Heil2uMnvkOQM/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@kudos112/date-in-yesterday-today-or-tomorrows-format-using-moment-js-ff74b6f096d0",
      title: "Date in Yesterday, Today, or Tomorrow’s format using moment.js",
      description: "Trying to Explain Moment.js working with examples."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const aboutSection = {
  title: "About Me ",
  subtitle: "I LOVE TO CREATE SCALABLE BACKENDS USING NODEJS",

  // Please Provide with Your Podcast embeded Link
  description1: `As a MERN Stack Engineer with an entrepreneurial mindset, I am passionate about solving real-world problems through innovative technology solutions. With my strong background in developing full-stack applications using MERN (MongoDB, Express, React, Node.js) technology, I have the skills and experience necessary to bring any project to life.`,
  description2: `I understand the importance of building solutions that not only meet the needs of businesses and consumers but also create positive social impact. This is why I am committed to utilizing my technical skills to develop software that solves real-world problems and improves people's lives.`,
  description3: `As an entrepreneur, I am not afraid to take risks and explore new ideas. I am constantly seeking out opportunities to learn and grow, both as a developer and as a businessperson. I believe that by staying curious and embracing innovation, I can help drive positive change in the world.`,
  description4: `In short, I am a mid-level MERN Stack developer with an entrepreneurial mindset who is passionate about using technology to solve real-world problems. If you are looking for a developer who can bring innovative solutions to your business or organization, then look no further than me. Let's work together to make a positive impact on the world.`,

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3099091509",
  email_address: "quddoux112@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "kudos112_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  aboutSection,
  contactInfo,
  twitterDetails,
  isHireable
};
