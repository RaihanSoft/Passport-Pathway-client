import { useEffect, useState } from "react";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";

import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const AnimatedSlider = () => {
  const sliders = [
    {
      img: one,
      title: "Simplify Your Visa Application",
    },
    {
      img: two,
      title: "Track Visa Applications Globally",
    },
    {
      img: three,
      title: "Global Visa Information",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlider((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    }, 5000); // Slide transition every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-11/12 mt-10   sm:rounded-tr-[170px] sm:rounded-bl-[170px]  mx-auto h-[600px] md:h-[550px] overflow-hidden">
      <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={sliders[currentSlider].img}
            alt={`Slider ${currentSlider}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Adds overlay */}
        </div>

        {/* Text Content */}
        <div className="absolute bottom-16 left-6 sm:left-12 z-10 max-w-2xl px-4 sm:px-6">
          <Slide direction="up" delay={500}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              <Typewriter
                words={[sliders[currentSlider].title]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={3000}
              />
            </h1>
          </Slide>
          <Fade delay={800}>
          </Fade>
        </div>

        {/* Thumbnail Indicators */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 hidden lg:flex flex-col gap-4 z-20">
          {sliders.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlider(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                currentSlider === index
                  ? "bg-yellow-500 transform scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>

        {/* Mobile Thumbnail Indicators */}
        <div className="absolute bottom-6 flex justify-center items-center w-full lg:hidden gap-4 z-20">
          {sliders.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlider(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentSlider === index
                  ? "bg-yellow-500 transform scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedSlider;
