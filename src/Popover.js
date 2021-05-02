import { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

const Popover = ({ color }) => {
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
            className={
              "bg-" +
              color +
              "-500 text-white active:bg-" +
              color +
              "-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            bottom {color}
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-" +
              color +
              "-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  "bg-" +
                  color +
                  "-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function PopoverRender() {
  return (
    <>
      return <Popover color="gray" />
    </>
  );
}
