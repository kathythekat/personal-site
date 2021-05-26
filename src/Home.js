import { useRef } from "react";
import ConnectIcons from "./ConnectIcons";
import Montana from "./images/montana.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Resume from "./resume/KatHuang_Resume.pdf";

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
          alt="Montana"
          src={Montana}
        />
        <div className="flex flex-col p-8 lg:m-8 max-w-md lg:max-w-xl">
          <h1 className="lg:text-5xl">Kat Huang</h1>
          <h4 className="lg:text-lg my-4">
            Software Engineer based in San Francisco, CA
          </h4>
          <a href={Resume} target="_blank" rel="noreferrer">
            <button
              ref={animateRef}
              className="text-white bg-seagreen hover:bg-forest hover:text-white active:bg-green-500 text-md mt-2 mb-4 px-5 py-3 rounded-lg outline-none focus:outline-none mr-2 items-center"
              type="button"
              onMouseEnter={wiggleButton}
              onMouseLeave={stopWiggle}
              onClick={() =>
                window.dataLayer.push({ "button-event": "hire-clicked" })
              }
            >
              Hire me! <i className="far fa-file"></i>
            </button>
          </a>
          <h4 className="lg:text-lg">
            <p className="my-2">
              Languages: JavaScript, Python, SQL, CSS, HTML
            </p>
            <span className="text-purple-500 text-sm lg:text-lg">{stack}</span>:
            React, TypeScript, GraphQL, Node, Express, Jest, Cypress,
            PostgreSQL, Flask, SQLAlchemy, Tailwind, Sass, Bootstrap, jQuery
          </h4>
        </div>
      </div>
      <ConnectIcons />
    </div>
  );
}

export default Home;
