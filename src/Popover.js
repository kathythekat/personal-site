import { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import ProjectImage from "./ProjectImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;

function Popover({ project }) {
  const { name, image, description, tools, demo, github } = project;
  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = useRef();
  const popoverRef = useRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom",
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            <ProjectImage img={image} />
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-gray-500 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  "flex items-center justify-between bg-gray-500 text-white font-semibold p-2 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                }
              >
                <div className="flex">
                  <span>{name}</span>
                </div>
                <div className="flex items-center justify-end">
                  <a href={demo} className="text-green-300 hover:text-purple-300">
                    demo
                  </a>
                  <a href={github} className="text-purple-300 hover:text-green-300 pl-3">
                    {githubIcon}
                  </a>
                </div>
              </div>
              <div className="text-white p-3">
                <p className="p-1">Built with {tools}</p>
                <p className="p-1">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popover;
