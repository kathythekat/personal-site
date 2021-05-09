import kathuang from '../images/kathuang.JPG'

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-center m-4 lg:my-8 lg:p-8">
        <h1 className="my-4 text-center">Get to know me.</h1>
        <img className="rounded-full h-72" src={kathuang} alt="kathuang" />
        <p className="p-4 lg:text-lg text-left max-w-lg">
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
