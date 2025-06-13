import developerImg from "../../assets/developerImg.png";
// import VideoBackground from "./introVideo";

function About() {
  return (
    <section id="About" className="w-full p-4 sm:p-6 md:p-10">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5 items-center">
        {/* Text & Video Section */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold text-black leading-tight">
            Hye, I am <span className="text-purple-500">Bijay</span> and <br />
            I am a Frontend <br /> Developer
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={developerImg}
            alt="oops Image Not Found"
            className="  w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl   "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
