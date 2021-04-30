import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="2x" />;

const icons = [
  { icon: githubIcon, url: "https://github.com/kathythekat" },
  { icon: instagramIcon, url: "https://www.instagram.com/kathythekat/" },
  ,
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/kat-huang-599b6a66/",
  },
];

function ConnectIcons() {
  return (
    <div className="flex flex-row justify-center">
      Connect with me:{" "}
      {icons.map((i) => (
        <div className="mx-2">
          <a className="fill-current hover:text-purple-400 " href={i.url}>
            {i.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ConnectIcons;
