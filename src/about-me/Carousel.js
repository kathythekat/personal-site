import remyoat from "../images/remyoat.jpg";
import Description from "./Description";

const carouselContent = [<Description />, remyoat];

function Carousel() {
  return (
    <div className="container flex flex-col items-center my-12 lg:my-20">
      <div className="max-w-sm m-4 lg:my-8 border border-gray-300 rounded-lg shadow-lg p-8 lg:max-w-md">
        {" "}
        <img src={remyoat}></img>
      </div>
    </div>
  );
}

export default Carousel;
