import Carousel from "./Carousel";

function About() {
  return (
    <div className="container flex flex-col items-center my-12 lg:my-20">
      <div className="max-w-sm m-4 lg:my-8 border border-gray-300 rounded-lg shadow-lg p-8 lg:max-w-md">
        <h1 className="my-2">Get to know me.</h1>
        <p>
          I am a SF native who recently discovered a newfound love for coding.
          I'm especially drawn to building beautiful, minimalistic, and
          UI-focused frontend things. Before this path, I was a critical care
          nurse for 6 years. Outside of coding, I am passionate about
          mountain/gravel biking, exploring the outdoors, and spending time with
          my 2 dogs, Remy and Oatmeal.
        </p>
      </div>
    </div>
  );
}

export default About;
