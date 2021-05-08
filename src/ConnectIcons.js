import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";

const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="2x" />;
const stravaIcon = <FontAwesomeIcon icon={faStrava} size="2x" />;

const icons = [
  { icon: githubIcon, url: "https://github.com/kathythekat" },
  { icon: instagramIcon, url: "https://www.instagram.com/kathythekat/" },
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/kat-huang-599b6a66/",
  },
  { icon: stravaIcon, url: "https://www.strava.com/athletes/46730453" },
];

function ConnectIcons() {
  return (
    <div className="flex flex-row justify-center lg:text-lg">
      Connect with me:{" "}
      {icons.map((i, idx) => (
        <div className="mx-2" key={idx}>
          <a className="fill-current hover:text-purple-500 " href={i.url}>
            {i.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ConnectIcons;
