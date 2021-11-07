const Projects = [
  {
    id: 1,
    project: "Home automation (Sensibo remote control)",
    technologies:
      "React, MUI and NodeJS with Express (+ alternative backend server with Django and Python)",
    description:
      "Home automation project that currently allows a user to control Sensibo AC remotes. At this stage, it is usable only for testing purposes (the Sensibo API key is saved for one session only).",
    image: "../project-home-automation.png",
    githubFrontend:
      "https://github.com/eavior/react-material-ui-home-automation",
    githubBackend: "https://github.com/eavior/home-automation-nodejs-server",
    deployment: "https://home-automation-app.netlify.app/",
  },
  {
    id: 2,
    project: "Pet adoption site",
    technologies: "React, Bootstrap, NodeJS with Express and MySQL ",
    description:
      "Pet adoption site. Users can register, search pets and foster or adopt them.",
    image: "../project-pet-adoption.png",
    githubFrontend: "https://github.com/eavior/itc-pet-adoption-front-end",
    githubBackend: "https://github.com/eavior/itc-pet-adoption-back-end",
    deployment: "https://pet-adoption-eavior.herokuapp.com/",
  },
  {
    id: 3,
    project: "Tweet app",
    technologies: "React",
    description: "A basic tweet app.",
    image: "../project-itc-tweet-app.png",
    githubFrontend:
      "https://github.com/eavior/itc-react-tweet-app-on-itc-server",
    githubBackend: "",
    deployment: "",
  },
  {
    id: 4,
    project: "Note app",
    technologies: "React",
    description: "A basic note app.",
    image: "../project-notes.png",
    githubFrontend: "https://github.com/eavior/itc-react-note-app",
    githubBackend: "",
    deployment: "",
  },
  {
    id: 5,
    project: "Fibonacci calculator",
    technologies: "HTML, CSS and Javascript",
    description: "This app returns the fibonacci number.",
    image: "../project-fibonacci.png",
    githubFrontend: "https://github.com/eavior/itc-js-fibonacci",
    githubBackend: "",
    deployment: "",
  },
  {
    id: 6,
    project: "Portfolio app",
    technologies: "React and MUI",
    description:
      "Last but not least, this portfolio site. A responsive portfolio web application.",
    image: "../project-portfolio.png",
    githubFrontend: "https://github.com/eavior/itc-js-fibonacci",
    githubBackend: "",
    deployment: "",
  },
];

export default Projects;
