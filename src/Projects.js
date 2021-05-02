import madlibs from "./images/madlibs.png";
import petinder from "./images/petinder.png";
import Popover from "./Popover";

const PROJECTS = [
  {
    name: "Madlibs",
    tools: "React, Bootstrap",
    description:
      "Given some prompts, users fill out a form and create some silly or imaginative short stories!",
    image: madlibs,
    demo: "http://madlibs.surge.sh/",
    github: "https://github.com/kathythekat/react-madlibs",
  },
  {
    name: "PeTinder",
    tools: "React, Tailwind",
    description:
      "Like Tinder, but for pets. Using the Petfinder API, users are given a random pet.",
    image: petinder,
    demo: "http://petinder.surge.sh/",
    github: "https://github.com/kathythekat/petfinder",
  },
];

function Projects() {
  return (
    <>
      <h1 className="text-center mt-4 p-2">Some things I've built</h1>
      <h3 className="text-center text-lg p-2">
        Click on each project to find out more!
      </h3>
      <div className="flex flex-col items-center justify-center lg:space-x-12 lg:my-8 lg:flex-row ">
        {PROJECTS.map((p) => (
          <Popover project={{ ...p }} />
        ))}
      </div>
    </>
  );
}

export default Projects;
