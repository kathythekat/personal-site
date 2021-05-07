import ConnectIcons from "./ConnectIcons";
import Montana from "./images/montana.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const stack = <FontAwesomeIcon icon={faLayerGroup} size="2x" />;

function Home() {
  return (
    <div className="h-screen">
      <div className="lg:h-1/2 my-12 lg:my-20 flex flex-col lg:flex-row justify-center items-center">
        <img
          className="w-10/12 max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
          alt="Montana"
          src={Montana}
        />
        <div className="flex flex-col p-8 lg:m-8 max-w-md lg:max-w-xl">
          <h1 className="lg:text-5xl">Kat Huang</h1>
          <h4 className="lg:text-lg my-4">Software engineer based in San Francisco, CA</h4>
          <h4 className="lg:text-lg">
            <span className="text-purple-500 text-sm lg:text-lg">{stack}</span>: React, Typescript, GraphQL, Node, Express, Flask, SQLAlchemy, PostgreSQL,
            Python, Tailwind, Bootstrap, JQuery, Jest, Jasmine
          </h4>
        </div>
      </div>
      <ConnectIcons />
    </div>
  );
}

export default Home;
