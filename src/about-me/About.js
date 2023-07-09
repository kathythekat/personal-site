import kathuang from "../images/kathuang.JPG";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-center my-4 lg:my-8 lg:p-8">
        <h1 className="my-4 text-center">Get to know me.</h1>
        <img className="rounded-full h-72" src={kathuang} alt="kathuang" />
        <p className="p-4 lg:text-lg text-left max-w-lg">
          <i className="fas fa-arrow-right"></i> SF Native 🌁 <br />
          <i className="fas fa-arrow-right"></i> Problem solver with a creative
          spark 💡
          <br />
          <i className="fas fa-arrow-right"></i> Builder of UI with a curiosity
          in DevOps 🐳
          <br />
          <i className="fas fa-arrow-right"></i> Avid cyclist 🚵‍♀️
          <br />
          <i className="fas fa-arrow-right"></i> Shelter dog volunteer 🐕 🐺
          <br />
          <i className="fas fa-arrow-right"></i> Seamstress for bike bags 🧵
          <br />
        </p>
      </div>
    </div>
  );
}

export default About;
