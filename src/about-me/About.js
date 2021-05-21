import kathuang from '../images/kathuang.JPG'

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-center my-4 lg:my-8 lg:p-8">
        <h1 className="my-4 text-center">Get to know me.</h1>
        <img className="rounded-full h-72" src={kathuang} alt="kathuang" />
        <p className="p-4 lg:text-lg text-left max-w-lg">
        <i class="fas fa-arrow-right"></i>{' '} SF Native 🌁 <br />
        <i class="fas fa-arrow-right"></i>{' '} Love building quality UI 👩🏻‍💻<br />
        <i class="fas fa-arrow-right"></i>{' '} Gravel cyclist 🚵‍♀️<br />
        <i class="fas fa-arrow-right"></i>{' '} Dog mom of 2 🐕 🐺<br />
        <i class="fas fa-arrow-right"></i>{' '} Was an ICU Nurse for 6 yrs 💉<br />
        </p>
      </div>
    </div>
  );
}

export default About;
