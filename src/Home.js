import ConnectIcons from "./ConnectIcons";
import Montana from "./images/montana.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const stack = <FontAwesomeIcon icon={faLayerGroup} size="lg" />;

function Home() {
  return (
    <>
      <div className="my-12 lg:my-20 flex flex-col lg:flex-row justify-center items-center">
        <img
          className="w-10/12 max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
          alt="Montana"
          src={Montana}
        />
        <div className="flex flex-col p-8 lg:m-8 max-w-md lg:max-w-lg">
          <h1>Kat Huang</h1>
          <h4 className="my-2">Software engineer based in San Francisco, CA</h4>
          <h4 className="">
            {stack}: React, Node.JS, Express, Flask, SQLAlchemy, PostgreSQL,
            Python, Tailwind, Bootstrap, JQuery, Jest, Jasmine
          </h4>
        </div>
      </div>
      <ConnectIcons />
    </>
  );
}

export default Home;
