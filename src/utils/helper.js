import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser
} from "react-icons/fa6";
import {
  WhatsappClone,
  DriveClone,
  LinkedInClone,
  NetflixClone,
  GmailClone,
  FacebookClone,
  UberClone,
  ServEdu_UI,
  Weather_App
} from "../assets";

export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/adarsh-k-shri-dev/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/AdarshShriDev007",
    color: "#fff",
  },
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/profile.php?id=100094396703846",
    color: "#1877F2",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `whatsApp-${Date.now()}`,
    name: "WhatsApp Clone",
    imgSrc: WhatsappClone,
    gitURL: "https://github.com/AdarshShriDev007/WhatsApp-clone",
    domainURL : "https://whatsapp-clone-8abe7.web.app/"
  },
  {
    id: `googleDrive-${Date.now()}`,
    name: "Google Drive Clone",
    imgSrc: DriveClone,
    gitURL: "https://github.com/AdarshShriDev007/Google-drive-clone",
    domainURL : "https://drive-clone-5bc6a.web.app/"
  },
  {
    id: `linkedIn-${Date.now()}`,
    name: "LinkedIn Clone",
    imgSrc:  LinkedInClone,
    gitURL: "https://github.com/AdarshShriDev007/linkedIn-Clone",
    domainURL : "https://linkedin-clone-c42a1.web.app/"
  },
  {
    id: `netflix-${Date.now()}`,
    name: "Netflix Clone",
    imgSrc: NetflixClone,
    gitURL: "https://github.com/AdarshShriDev007/Netflix-clone",
    domainURL : "https://netflix-clone-8a1d8.web.app/"
  },
  {
    id: `gmail-${Date.now()}`,
    name: "Gmail Clone",
    imgSrc: GmailClone,
    gitURL: "https://github.com/AdarshShriDev007/GmailClone",
    domainURL : "https://clone-cc937.web.app/"
  },
  {
    id: `facebook-${Date.now()}`,
    name: "Facebook Clone",
    imgSrc: FacebookClone,
    gitURL: "https://github.com/AdarshShriDev007/facebook-clone",
    domainURL : "https://github.com/AdarshShriDev007/facebook-clone"
  },
  {
    id: `uber-${Date.now()}`,
    name: "Uber Clone UI",
    imgSrc: UberClone,
    gitURL: "https://github.com/AdarshShriDev007/Uber-Clone-UI",
    domainURL : "https://uber-clone-ui.web.app/"
  },
  {
    id: `serveEduUI-${Date.now()}`,
    name: "ServEdu UI",
    imgSrc: ServEdu_UI,
    gitURL: "https://github.com/AdarshShriDev007/ServEdu-design",
    domainURL : "https://servedu-ui.web.app/"
  },
  {
    id: `weatherApp-${Date.now()}`,
    name: "Weather App",
    imgSrc: Weather_App,
    gitURL: "https://github.com/AdarshShriDev007/Weather-app",
    domainURL : "https://github.com/AdarshShriDev007/Weather-app"
  },
];
