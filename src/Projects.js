import madlibs from "./images/madlibs.png";
import petinder from "./images/petinder.png";
import Popover from "./Popover";
import jobly from "./images/jobly.png";
import hatchways from "./images/hatchway.png";

const PROJECTS = [
  {
    name: "PeTinder",
    tools: "React, Tailwind",
    description:
      'Like Tinder, but for pet adoption! Using the Petfinder API, users can select through random pets until they find "the one."',
    image: petinder,
    demo: "http://petinder.surge.sh/",
    github: "https://github.com/kathythekat/petfinder",
  },
  {
    name: "Jobly",
    tools: "React, Node, Express, PostgreSQL, Bootstrap",
    description:
      "A full stack app where users can search for jobs/companies, apply to jobs, sign up, login, and edit their profiles.",
    image: jobly,
    demo: "http://kat-jobly.surge.sh",
    github: "https://github.com/kathythekat/React-Jobly",
  },
  {
    name: "Student Directory",
    tools: "React, CSS",
    description:
      "A FE take home assessment: Students are obtained from an API. Users can search for students by name, add tags, and search by tags as well. Students' scores can be toggled with the +/- icon.",
    image: hatchways,
    demo: "http://hatchways-kat.surge.sh/",
    github: "https://github.com/kathythekat/",
  },
  {
    name: "Madlibs",
    tools: "React, Bootstrap",
    description:
      "A fun app to bring back childhood imagination. Given some prompts, users fill out a form and create some funny short stories!",
    image: madlibs,
    demo: "http://madlibs.surge.sh/",
    github: "https://github.com/kathythekat/react-madlibs",
  },
];

function Projects() {
  return (
    <>
      <h1 className="text-center mt-4 p-2">Things I've built</h1>
      <div className="flex flex-col items-center justify-center lg:space-x-12 lg:my-8 lg:flex-row lg:flex-wrap">
        {PROJECTS.map((p, i) => (
          <Popover key={i} project={{ ...p }} />
        ))}
      </div>
    </>
  );
}

export default Projects;
