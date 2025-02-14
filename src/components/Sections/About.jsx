import developerImg from "../../assets/developerImg.png";
import VideoBackground from "./introVideo";

function About() {
  return (
    <section id="About">
      <div className="w-full grid grid-cols-2 p-6 gap-5 items-center">
        <div className=" h-full flex flex-col items-center justify-center ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-black leading-tight">
            Hye, I am <span className="text-purple-500">Bijay</span> and <br />{" "}
            I am a Frontend <br /> Developer
          </h1>
          <VideoBackground />
        </div>
        <div className=" h-full flex justify-center ">
          <img
            src={developerImg}
            alt="oops Image Not Found"
            className="max-w-[50vw] max-h-[50vh] "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
