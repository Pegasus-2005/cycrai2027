// import uem from "../assets/image/uem.jpeg";

// export default function Venue() {
//   return (
//     <section
//       id="venue"
//       className="bg-[#FAF7F2] py-28 px-6 scroll-mt-22"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div
//           className="text-center mb-20"
//           data-aos="fade-up"
//         >
//           <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold">
//             Conference Venue
//           </p>
//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#051024]">
//             Institute of Engineering and Management, Kolkata, University Campus(Newtown)
//           </h2>

//           <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left Side - Image */}
//           <div data-aos="fade-right">

//             <img
//               src={uem}
//               alt="Institute of Engineering and Management"
//               className="
//                 w-full
//                 rounded-3xl
//                 shadow-2xl
//                 hover:scale-[1.02]
//                 transition-all
//                 duration-500
//               "
//             />

//           </div>

//           {/* Right Side */}
//           <div data-aos="fade-left">

//             <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
//               Kolkata, West Bengal, India
//             </div>

//             <h3 className="text-3xl md:text-4xl font-bold text-[#051024]">
//               Welcome to the Host Institution
//             </h3>

//             <p className="mt-6 text-lg text-gray-700 leading-relaxed">
//               Institute of Engineering and Management is one of the leading
//               engineering institutions in India, known for academic
//               excellence, innovation, research and industry engagement.
//             </p>

//             <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//               The campus offers modern infrastructure, advanced
//               laboratories, smart classrooms, auditoriums and a vibrant
//               environment for researchers, professionals and students.
//             </p>

//             {/* Feature Cards */}
//             <div className="grid sm:grid-cols-2 gap-4 mt-10">

//               <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
//                 🏛 Modern Infrastructure
//               </div>

//               <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
//                 🌳 Green Campus
//               </div>

//               <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
//                 🎓 Research Ecosystem
//               </div>

//               <div className="bg-white p-5 rounded-2xl border border-[#FFD700]/20 shadow-md">
//                 ✈ Easy Airport Access
//               </div>

//             </div>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap gap-4">

//               <a
//                 href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   px-8 py-4
//                   rounded-full
//                   bg-[#B8860B]
//                   text-white
//                   font-semibold
//                   hover:scale-105
//                   transition-all
//                   duration-300
//                 "
//               >
//                 View Location
//               </a>

//               <a
//                 href="https://iem.edu.in/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   px-8 py-4
//                   rounded-full
//                   border-2
//                   border-[#B8860B]
//                   text-[#6D071A]
//                   font-semibold
//                   hover:bg-[#B8860B]
//                   hover:text-white
//                   transition-all
//                   duration-300
//                 "
//               >
//                 Explore Campus
//               </a>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
import uem from "../assets/image/uem.jpeg";

import {
  FaMapMarkerAlt,
  FaUniversity,
  FaTree,
  FaFlask,
  FaPlaneArrival,
} from "react-icons/fa";

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#020817] py-28 scroll-mt-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              text-cyan-300
              uppercase
              tracking-[3px]
              text-sm
              font-semibold
            "
          >
            Conference Venue
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-black
              text-white
              font-['Orbitron']
            "
          >
            Institute of Engineering and Management
          </h2>

          <p className="mt-4 text-xl font-semibold text-cyan-300">
            University Campus • New Town • Kolkata • India
          </p>

          <p
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-lg
              leading-8
              text-slate-300
            "
          >
            Located in the heart of New Town, Kolkata, the Institute of
            Engineering and Management (IEM) University Campus offers an
            inspiring environment for researchers, academicians, industry
            experts, and students. Equipped with modern infrastructure,
            advanced laboratories, smart classrooms, and world-class
            conference facilities, the campus provides an ideal setting for
            CYCRAI 2027.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div
            data-aos="fade-right"
            className="
              relative
              rounded-3xl
              overflow-hidden
              border
              border-cyan-400/20
              bg-[#071326]/60
              backdrop-blur-xl
              p-3
              shadow-[0_0_40px_rgba(34,211,238,0.12)]
            "
          >

            <img
              src={uem}
              alt="Institute of Engineering and Management"
              className="
                w-full
                rounded-2xl
                transition-all
                duration-700
                hover:scale-[1.03]
              "
            />

          </div>

          <div data-aos="fade-left">

  {/* Location Badge */}

  <div
    className="
      inline-flex
      items-center
      gap-3
      px-5
      py-3
      rounded-full
      border
      border-cyan-400/20
      bg-cyan-500/10
      text-cyan-300
      font-semibold
    "
  >
    <FaMapMarkerAlt />
    Kolkata, West Bengal, India
  </div>

  {/* Title */}

  <h3 className="mt-8 text-4xl font-bold text-white">
    Welcome to the Host Institution
  </h3>

  <p className="mt-6 text-slate-300 text-lg leading-8">
    The Institute of Engineering and Management (IEM), Kolkata,
    is one of India's leading institutions recognized for excellence
    in engineering education, cutting-edge research, innovation,
    entrepreneurship, and strong industry collaborations. The
    university provides an ideal academic environment for hosting
    prestigious international conferences such as CYCRAI 2027.
  </p>

  <p className="mt-5 text-slate-300 text-lg leading-8">
    Located in New Town, Kolkata, the campus offers modern lecture
    halls, advanced laboratories, high-speed connectivity,
    spacious auditoriums, collaborative research spaces, and
    convenient access to hotels, the airport, and major city
    attractions.
  </p>

  {/* Feature Cards */}

  <div className="grid sm:grid-cols-2 gap-5 mt-10">

    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#071326]/70
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/60
      "
    >
      <FaUniversity className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
      <h4 className="text-white font-semibold">
        Modern Infrastructure
      </h4>
      <p className="text-slate-400 text-sm mt-2">
        Smart classrooms, auditoriums and conference facilities.
      </p>
    </div>

    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#071326]/70
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/60
      "
    >
      <FaTree className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
      <h4 className="text-white font-semibold">
        Green Campus
      </h4>
      <p className="text-slate-400 text-sm mt-2">
        Beautiful surroundings providing a vibrant learning atmosphere.
      </p>
    </div>

    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#071326]/70
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/60
      "
    >
      <FaFlask className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
      <h4 className="text-white font-semibold">
        Research Ecosystem
      </h4>
      <p className="text-slate-400 text-sm mt-2">
        Advanced laboratories supporting interdisciplinary research.
      </p>
    </div>

    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#071326]/70
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/60
      "
    >
      <FaPlaneArrival className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
      <h4 className="text-white font-semibold">
        Easy Airport Access
      </h4>
      <p className="text-slate-400 text-sm mt-2">
        Conveniently located near Netaji Subhas Chandra Bose International Airport.
      </p>
    </div>

  </div>

  {/* Buttons */}

  <div className="mt-10 flex flex-wrap gap-5">

    <a
      href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-8
        py-4
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        hover:scale-105
        transition-all
        duration-300
        shadow-[0_0_25px_rgba(34,211,238,0.35)]
      "
    >
      View on Google Maps
    </a>

    <a
      href="https://iem.edu.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-8
        py-4
        rounded-full
        border
        border-cyan-400
        text-cyan-300
        font-semibold
        hover:bg-cyan-400
        hover:text-[#020817]
        transition-all
        duration-300
      "
    >
      Visit IEM Website
    </a>

  </div>

</div>

</div>

</div>

</section>
  );
}