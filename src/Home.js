import ConnectIcons from "./ConnectIcons";
import Montana from "./images/montana.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Resume from './resume/KatHuang_Resume.pdf'

const stack = <FontAwesomeIcon icon={faLayerGroup} size="2x" />;

function Home() {
  return (
    <div className="h-screen d-flex flex-col items-center justify-center">
      <div className="lg:h-1/2 mt-10 mb-6 lg:my-20 flex flex-col lg:flex-row justify-center items-center">
        <img
          className="w-10/12 max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
          alt="Montana"
          src={Montana}
        />
        <div className="flex flex-col p-8 lg:m-8 max-w-md lg:max-w-xl">
          <h1 className="lg:text-5xl">Kat Huang</h1>
          <h4 className="lg:text-lg my-4">Software Engineer based in San Francisco, CA</h4>
          <h4 className="lg:text-lg">
            <p className="my-2">Languages: JavaScript, Python, SQL, CSS, HTML</p>
            <span className="text-purple-500 text-sm lg:text-lg">{stack}</span>: React, TypeScript, GraphQL, Node, Express, Flask, SQLAlchemy, PostgreSQL,
            Python, Tailwind, Sass, Bootstrap, JQuery, Jest, Jasmine
          </h4>
          <a href={Resume} target="_blank">
        <button className="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-400 hover:text-white active:bg-blue-600 font-bold text-md mt-4 px-6 py-3 rounded-lg outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-500 animate-wiggle" type="button"
        >
         Want me on your team? <i class="fas fa-laptop"></i>
        </button>
        </a>
        </div>
      </div>
      <ConnectIcons />
    </div>
  );
}

export default Home;
