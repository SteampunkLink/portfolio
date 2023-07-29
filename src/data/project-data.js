import honPron from "../assets/img/honpron.jpg";
import testImg from "../assets/img/test.jpg";

const projectData = [
  {
    title: "Honest Piranha",
    description: "A Wordpress site I build from scratch for my podcast and perhaps other projects down the line. Theme and plugins are all custom made by me. I prefer to code my custom posts myself rather than rely on pre-built plug-ins.",
    img: honPron,
    alt: "Screenshot of main page of HonestPiranha.com",
    buttons: [
      {
        type: "button",
        text: "Check Out the Website!",
        link: "https://honestpiranha.com/"
      }
    ]
  },
  {
    title: "Fun Demos",
    description: "A bunch of small projects to play around with. All hosted right here on this site.",
    img: "",
    alt: "",
    buttons: [
      {
        type: "Link",
        text: "View the demo index.",
        link: "/demo"
      }
    ]
  },
  {
    title: "Some Other Project",
    description: "This is just a placeholder for now. There will actually be something here later. Promise!",
    img: testImg,
    alt: "Placeholder image of a pretty summer painting.",
    buttons: [
      {
        type: "button",
        text: "See on Github",
        link: "/"
      },
      {
        type: "button",
        text: "View Demo on YouTube",
        link: "/"
      }
    ]
  }
];

export default projectData;