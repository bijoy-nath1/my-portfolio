import programer1 from "../../assets/Programmer1.mp4";

export default function VideoBackground() {
  return (
    <video
      className="w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] h-auto max-h-80 object-cover rounded-lg"
      src={programer1}
      autoPlay
      loop
      muted
      playsInline
      poster="/fallback-image.jpg" // Add a lightweight fallback image
    />
  );
}
