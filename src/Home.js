import ConnectIcons from "./ConnectIcons";
import Montana from "./images/montana.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const stack = <FontAwesomeIcon icon={faLayerGroup} size="lg" />;

function Home() {
  return (
    <>
      <div className="container my-12 flex flex-col lg:flex-row justify-center items-center">
        <img className="w-10/12 md:max-w-sm h-auto rounded-lg" src={Montana} />
        <div className="container flex flex-col m-8 max-w-md">
          <h1>Kat Huang</h1>
          <h4 className="my-2">Software engineer based in San Francisco, CA</h4>
          <h4>
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
