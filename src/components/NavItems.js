import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const PageItems = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 4,
    url: "/products",
    text: "Products",
  },
  {
    id: 5,
    url: "/career",
    text: "Career",
  },
];
const SocialItems = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://twitter.com/",
    icon: <FaTwitterSquare />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/",
    icon: <FaGithubSquare />,
  },
];

export { PageItems, SocialItems };
