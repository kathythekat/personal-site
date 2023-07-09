import { useRef } from "react";
import ConnectIcons from "./ConnectIcons";
import bikePacking from "./images/bike2023.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Resume from "./resume/Kat Goo Dev Resume.pdf";

const stack = <FontAwesomeIcon icon={faLayerGroup} size="2x" />;

function Home() {
  const animateRef = useRef(null);

  function wiggleButton(e) {
    animateRef.current.classList.add("animate-wiggle");
  }
  function stopWiggle(e) {
    animateRef.current.classList.remove("animate-wiggle");
  }

  return (
    <div className="h-screen d-flex flex-col items-center justify-center">
      <div className="lg:h-1/2 mt-10 mb-6 lg:my-20 lg:p-8 flex flex-col lg:flex-row justify-center items-center">
        <img
          className="w-10/12 max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
          alt="biking in Marin"
          src={bikePacking}
        />
        <div className="flex flex-col p-8 lg:m-8 max-w-md lg:max-w-xl">
          <h1 className="lg:text-5xl">Kat Goo</h1>
          <h4 className="lg:text-lg my-4">
            Software Engineer based in San Francisco, CA
          </h4>
          <a href={Resume} target="_blank" rel="noreferrer" className="w-40">
            <button
              ref={animateRef}
              className="text-white bg-orange-400 hover:bg-orange-500 hover:text-white active:bg-orange-500 text-sm mt-2 mb-4 p-3 rounded-lg outline-none focus:outline-none mr-2 items-center w-56"
              type="button"
              onMouseEnter={wiggleButton}
              onMouseLeave={stopWiggle}
              onClick={() =>
                window.dataLayer.push({ "button-event": "hire-clicked" })
              }
            >
              Let's work together! <i className="far fa-file"></i>
            </button>
          </a>
          <h4 className="lg:text-lg">
            <span className="text-pink-400 text-sm lg:text-lg">{stack}</span>:
            React, TypeScript, GraphQL, Node, Express, Jest, React Testing
            Library, Postgres, NestJS, TypeORM, Material UI, Tailwind, Docker,
            Kubernetes, Github Actions
          </h4>
        </div>
      </div>
      <ConnectIcons />
    </div>
  );
}

export default Home;
