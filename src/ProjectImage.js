function ProjectImage({ img }) {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center rounded-lg w-96 h-72 shadow-xl my-4"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
}

export default ProjectImage;
