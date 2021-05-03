function ProjectImage({ img }) {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center rounded-lg w-80 h-60 lg:w-96 lg:h-72 shadow-lg my-4 transform lg:hover:translate-y-1"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
}

export default ProjectImage;
