import madlibs from "./images/madlibs.png";
import petinder from "./images/petinder.png";

const PROJECT_IMAGES = [madlibs, petinder];

function Project() {
  return (
    <>
      <h1 className="text-center mt-4">Some things I've built</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-12 my-8">
        {PROJECT_IMAGES.map((img) => (
          <div className="w-72 lg:w-80 rounded-lg border shadow-lg">
            <img className="rounded-lg" src={img} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
