import honPron from "../assets/img/honpron.jpg";

const projectData = [
  {
    title: "Honest Piranha",
    description: "A Wordpress site I build from scratch for my podcast and perhaps other projects down the line. Theme and plugins are all custom made by me. I prefer to code my custom posts myself rather than rely on pre-built plug-ins.",
    img: honPron,
    alt: "Screenshot of main page of HonestPiranha.com",
    buttons: [
      {
        text: "Check Out the Website!",
        link: "https://honestpiranha.com/"
      }
    ]
  },
  {
    title: "Some Other Project",
    description: "This is just a placeholder for now. There will actually be something here later. Promise!",
    img: "img/test.jpg",
    alt: "Placeholder image of a pretty summer painting.",
    buttons: [
      {
        text: "See on Github",
        link: "/"
      },
      {
        text: "View Demo on YouTube",
        link: "/"
      }
    ]
  }
];

export default projectData;