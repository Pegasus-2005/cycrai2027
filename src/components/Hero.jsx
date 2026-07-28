

import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import LogoStrip from "./LogoStrip";
import heroBg from "../assets/image/bggg.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#010611]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
  src={heroBg}
  alt="Background"
  className="
    w-full
    h-full
    object-cover
    object-center
    pointer-events-none
    select-none
  "
/>
      </div>

      {/* Slight Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Logo Strip */}
        <div className="flex justify-center">
          <LogoStrip />
        </div>

        {/* Main Content */}
        <div className="text-center mt-6">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
            CYCRAI  2027
          </h1>

          {/* <h2 className="text-4xl md:text-5xl font-bold text-white mt-1">
            2027
          </h2> */}

          <p className="mt-1.6 text-white text-lg md:text-1.7xl uppercase tracking-[2px] font-semibold">
            AN IEEE INDIA COUNCIL CONFERENCE
          </p>

          <p className="mt-1.6 text-white/90 uppercase tracking-[2px] text-sm md:text-lg">
            IN ASSOCIATION WITH IEEE KOLKATA SECTION PRESENTS
          </p>

          {/* Conference Title */}
          <div className="flex justify-center mt-4">

            <div
              className="
                bg-[#041B40]/70

                backdrop-blur-md
                border-2
                border-cyan-400
                rounded-2xl
                px-8
                md:px-16
                py-6
                shadow-[0_0_35px_rgba(0,180,255,0.35)]
              "
            >
              <h3 className="text-white text-2xl md:text-5xl font-bold leading-tight">
                Cyber Security And
              </h3>

              <h3 className="text-white text-2xl md:text-5xl font-bold mt-2">
                Artificial Intelligence Conference
              </h3>

            </div>

          </div>

          {/* Date + Venue */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">

            <div
              className="
                flex items-center gap-4
                bg-[#041B40]/70
                backdrop-blur-md
                border border-cyan-400
                rounded-xl
                px-8
                py-4
              "
            >
              <FaCalendarAlt className="text-white text-2xl" />

              <span className="text-white text-lg md:text-xl font-semibold">
                18 – 20 December 2027
              </span>
            </div>

            <div
              className="
                flex items-center gap-4
                bg-[#041B40]/70
                backdrop-blur-md
                border border-cyan-400
                rounded-xl
                px-8
                py-4
              "
            >
              <FaLocationDot className="text-white text-2xl" />

              <span className="text-white text-lg md:text-xl font-semibold">
                University Of Engineering and Management,
                Kolkata, India
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/registration");
              }}
              className="
                px-10
                py-4
                rounded-full
                border-2
                border-cyan-400
                bg-[#041B40]/70
                text-white
                text-lg
                font-semibold
                hover:bg-cyan-500
                hover:border-cyan-500
                hover:scale-105
                transition
              "
            >
              Register Now
            </button>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/guidelines");
              }}
              className="
                px-10
                py-4
                rounded-full
                border-2
                border-cyan-400
                bg-[#041B40]/70
                text-white
                text-lg
                font-semibold
                hover:bg-cyan-500
                hover:border-cyan-500
                hover:scale-105
                transition
              "
            >
              Submit Paper
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}