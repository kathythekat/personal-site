import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStrava,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="2x" />;
const stravaIcon = <FontAwesomeIcon icon={faStrava} size="2x" />;
const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" />;

const icons = [
  { icon: emailIcon, url: "mailto:khuang129@gmail.com" },
  { icon: githubIcon, url: "https://github.com/kathythekat" },
  { icon: instagramIcon, url: "https://www.instagram.com/kathythekat/" },
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/kat-huang-599b6a66/",
  },
  { icon: stravaIcon, url: "https://www.strava.com/athletes/46730453" },
  { icon: twitterIcon, url: "https://twitter.com/kathyiskat" },
];

function ConnectIcons() {
  return (
    <div className="flex flex-row justify-center items-center lg:text-lg">
      <p className="hidden lg:block">Connect with me: </p>
      {icons.map((i, idx) => (
        <div className="mx-2" key={idx}>
          <a className="fill-current hover:text-pink-400 " href={i.url}>
            {i.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ConnectIcons;
