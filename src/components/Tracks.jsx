// const tracks = [
//   {
//     icon: "🤖",
//     title: "AI, Machine Learning, and Intelligence for Net-Zero Engineering",
//     desc: "Foundational and applied AI/ML, distributed and secure learning systems, and software engineering oriented toward sustainability and net-zero goals.",
//   },
//   {
//     icon: "📡",
//     title: "6G, Next-Gen Wireless, Networking & Sustainable Communication System",
//     desc: "Next-generation communication systems, networking, IoT, and energy-efficient connectivity.",
//   },
//   {
//     icon: "🏙️",
//     title: "Cyber-Physical Systems, Digital Twins & Sustainable Smart Infrastructure",
//     desc: "CPS architectures, digital twins, secure embedded intelligence, and smart infrastructure.",
//   },
//   {
//     icon: "⚡",
//     title: "Sustainable Electronics, Green Hardware, VLSI & Embedded Systems",
//     desc: "Electronic devices, circuits, VLSI, embedded systems, and low-power / green hardware design.",
//   },
//   {
//     icon: "🔌",
//     title: "Power Electronics, Smart Grids, and Industrial Automation",
//     desc: "Power systems, power electronics, smart grids, renewable integration, and Industry 4.0 / 5.0 automation.",
//   },
//   {
//     icon: "🦾",
//     title: "Robotics, Automation, Instrumentation, and Intelligent Control",
//     desc: "Robotics, automation, instrumentation, and intelligent control systems.",
//   },
//   {
//     icon: "⚛️",
//     title: "Photonics, Quantum Technologies, and Optical Intelligence",
//     desc: "Photonics, quantum technologies, optical computing, and optical sensing intelligence.",
//   },
//   {
//     icon: "🛰️",
//     title: "Sensors, Remote Sensing, Signal & Image Processing & Perception",
//     desc: "Sensors, remote sensing, advanced signal / image processing, and perception systems.",
//   },
//   {
//     icon: "🧬",
//     title: "Biomedical Engineering, Wearable Systems & Healthcare Technologies",
//     desc: "Biomedical engineering, wearables, and healthcare technologies.",
//   },
//   {
//     icon: "🛡️",
//     title: "Secure, Ethical Intelligence, Intelligent Mobility, and Applications for Social Good",
//     desc: "Secure / ethical / responsible AI, intelligent mobility and vehicular / transportation systems, and applications for social good and smart society enablement.",
//   },
// ];

// export default function Tracks() {
//   return (
//     <section
//       id="tracks"
//       className="bg-[#FAF7F2] py-24 px-6 scroll-mt-20"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         {/* Heading */}
//         <div
//           className="text-center mb-20"
//           data-aos="fade-up"
//         >
//           <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold text-sm mb-3">
//             Call For Papers
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#051024]">
//             Technical Tracks
//           </h2>

//           <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* 12-Column Custom Grid for Perfect Centering */}
//         <div className="grid grid-cols-12 gap-6 xl:gap-8">
//           {tracks.map((track, index) => (
//             <div
//               key={index}
//               data-aos="zoom-in"
//               data-aos-delay={(index % 4) * 100}
//               className={`
//                 /* Grid Column Span Logic */
//                 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3
                
//                 /* Centering the last 2 items on Desktop (xl) */
//                 ${index === 8 ? "xl:col-start-4" : ""}
                
//                 /* Centering the last item on Laptop (lg) and placing it next to 9th on Desktop (xl) */
//                 ${index === 9 ? "lg:col-start-5 xl:col-start-7" : ""}
                
//                 group
//                 relative
//                 bg-white
//                 rounded-3xl
//                 p-8
//                 border border-[#FFD700]/20
//                 shadow-lg
//                 overflow-hidden
//                 flex flex-col justify-center items-center text-center
//                 h-[320px] 
//                 hover:border-[#FFD700]/60
//                 hover:shadow-[0_20px_40px_rgba(255,215,0,0.15)]
//                 transition-all duration-500
//               `}
//             >
//               {/* Giant Background Number Watermark */}
//               <div className="absolute inset-0 flex items-center justify-center text-[180px] font-black text-black/[0.02] pointer-events-none z-0 group-hover:scale-110 transition-transform duration-700">
//                 {index + 1 < 10 ? `0${index + 1}` : index + 1}
//               </div>

//               {/* Hover Background Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//               {/* Content Wrapper (Shifts up on hover) */}
//               <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-10 flex flex-col items-center w-full">
//                 {/* Icon */}
//                 <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
//                   {track.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-[17px] md:text-lg font-bold text-[#051024] leading-snug group-hover:text-[#B8860B] transition-colors duration-300 px-2">
//                   {track.title}
//                 </h3>
//               </div>

//               {/* Hidden Description (Fades in and slides up on hover) */}
//               <div className="absolute bottom-8 left-6 right-6 text-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-10 pointer-events-none">
//                 <div className="w-10 h-[2px] bg-[#FFD700] mx-auto mb-3 opacity-50"></div>
//                 <p className="text-[14px] text-gray-700 leading-relaxed font-medium">
//                   {track.desc}
//                 </p>
//               </div>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  FaShieldAlt,
  FaBrain,
  FaUserShield,
  FaCode,
  FaCloud,
  FaBroadcastTower,
  FaCity,
  FaRobot,
  FaAtom,
  FaMicrochip,
  FaBolt,
  FaSatellite,
  FaHeartbeat,
} from "react-icons/fa";

const tracks = [
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security, Digital Trust & Privacy",
    desc:
      "Cyber Security, Network Security, Cloud Security, Cryptography, Digital Forensics, Threat Intelligence, Zero Trust Architecture, Identity & Access Management, Blockchain Security and Critical Infrastructure Protection.",
  },

  {
    icon: <FaBrain />,
    title: "Responsible AI, Machine Learning & Foundation Models",
    desc:
      "Responsible AI, Explainable AI (XAI), Ethical AI, Machine Learning, Deep Learning, Large Language Models, Generative AI, Federated Learning, Reinforcement Learning and Intelligent Decision Systems.",
  },

  {
    icon: <FaUserShield />,
    title: "Privacy-Preserving Computing & Secure Intelligence",
    desc:
      "Differential Privacy, Secure Multi-Party Computation, Homomorphic Encryption, Privacy Enhancing Technologies, Confidential Computing, AI Security and Secure Data Analytics.",
  },

  {
    icon: <FaCode />,
    title: "Secure Software Engineering & DevSecOps",
    desc:
      "Secure Software Development, DevSecOps, Software Testing, Secure SDLC, Vulnerability Assessment, Application Security, Secure APIs, Software Quality and Automated Security Pipelines.",
  },

  {
    icon: <FaCloud />,
    title: "Cloud Computing, Edge AI & Distributed Intelligence",
    desc:
      "Cloud Computing, Edge Intelligence, Distributed AI, Container Technologies, Edge Computing, Fog Computing, Resource Optimization and Intelligent Distributed Systems.",
  },

  {
    icon: <FaBroadcastTower />,
    title: "6G, IoT & Next Generation Communication",
    desc:
      "6G Networks, Beyond 5G, Internet of Things, Wireless Sensor Networks, Software Defined Networking, Green Communication and Sustainable Networking Technologies.",
  },

  {
    icon: <FaCity />,
    title: "Cyber Physical Systems, Smart Cities & Digital Twins",
    desc:
      "Digital Twins, Smart Infrastructure, Intelligent Transportation, Industrial IoT, Smart Manufacturing, Smart Governance and Cyber Physical Systems.",
  },

  {
    icon: <FaRobot />,
    title: "Robotics, Autonomous Systems & Intelligent Automation",
    desc:
      "Autonomous Robots, Human Robot Interaction, Industrial Automation, Intelligent Control Systems, Robotics, Industry 5.0 and Smart Manufacturing.",
  },

  {
    icon: <FaAtom />,
    title: "Quantum Computing, Quantum Security & Photonics",
    desc:
      "Quantum Computing, Quantum Communication, Quantum Cryptography, Optical Computing, Photonics, Optical Networks and Future Computing Technologies.",
  },

  {
    icon: <FaMicrochip />,
    title: "Green Electronics, Embedded Systems & VLSI",
    desc:
      "Embedded Systems, VLSI Design, FPGA, ASIC, Semiconductor Technologies, Sustainable Electronics, Low Power Circuits and Hardware Security.",
  },

  {
    icon: <FaBolt />,
    title: "Smart Energy Systems & Industrial Technologies",
    desc:
      "Renewable Energy, Smart Grids, Electric Vehicles, Power Electronics, Energy Storage, Industrial Automation, Sustainable Energy Systems and Green Technologies.",
  },

  {
    icon: <FaSatellite />,
    title: "Computer Vision, Remote Sensing & Intelligent Perception",
    desc:
      "Computer Vision, Image Processing, Signal Processing, Remote Sensing, Pattern Recognition, Geospatial Intelligence and Intelligent Perception Systems.",
  },

  {
    icon: <FaHeartbeat />,
    title: "Biomedical Engineering & Healthcare Intelligence",
    desc:
      "Healthcare AI, Biomedical Devices, Wearable Systems, Medical Imaging, Bioinformatics, Digital Health, Smart Healthcare and Assistive Technologies.",
  },
];

export default function Tracks() {
  return (
    <section
      id="tracks"
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
            Call For Papers
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
            Technical Tracks
          </h2>

          <p
            className="
              mt-8
              max-w-5xl
              mx-auto
              text-lg
              leading-8
              text-slate-300
            "
          >
            CYCRAI 2027 invites original and unpublished research
            contributions from researchers, academicians, industry
            professionals, practitioners and students working in
            Cyber Security, Responsible Artificial Intelligence,
            Intelligent Systems and next-generation digital
            technologies. The conference encourages interdisciplinary
            research addressing secure, ethical, resilient and
            sustainable technological innovations.
          </p>

        </div>

        {/* Technical Track Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {tracks.map((track, index) => (
            <div
  key={index}
  data-aos="zoom-in"
  data-aos-delay={(index % 3) * 100}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-cyan-400/20
    bg-[#071326]/70
    backdrop-blur-xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-cyan-400/60
    hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]
  "
>
  {/* Glow */}
  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

  {/* Watermark */}
  <span
    className="
      absolute
      top-4
      right-5
      text-7xl
      font-black
      text-white/[0.03]
      select-none
    "
  >
    {String(index + 1).padStart(2, "0")}
  </span>

  {/* Icon */}
  <div
    className="
      relative
      z-10
      w-18
      h-18
      rounded-2xl
      flex
      items-center
      justify-center
      text-3xl
      text-cyan-300
      bg-cyan-500/10
      border
      border-cyan-400/20
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:rotate-6
    "
  >
    {track.icon}
  </div>

  {/* Title */}
  <h3
    className="
      relative
      z-10
      mt-8
      text-2xl
      font-bold
      text-white
      leading-snug
      transition-colors
      duration-300
      group-hover:text-cyan-300
    "
  >
    {track.title}
  </h3>

  {/* Divider */}
  <div
    className="
      relative
      z-10
      mt-5
      w-16
      h-[3px]
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      to-blue-500
    "
  />

  {/* Description */}
  <p
    className="
      relative
      z-10
      mt-6
      text-slate-300
      leading-8
      text-[15px]
    "
  >
    {track.desc}
  </p>

  {/* Keywords */}
  <div
    className="
      relative
      z-10
      mt-8
      flex
      flex-wrap
      gap-2
    "
  >
    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs">
      Research
    </span>

    

    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs">
      IEEE
    </span>
  </div>

  {/* Animated Bottom Border */}
  <div
    className="
      absolute
      bottom-0
      left-0
      h-1
      w-0
      bg-gradient-to-r
      from-cyan-400
      via-sky-400
      to-blue-500
      transition-all
      duration-700
      group-hover:w-full
    "
  />
</div>
          ))}
        </div>
                {/* Conference Highlights */}

        <div
          className="mt-24"
          data-aos="fade-up"
        >
          <div
            className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-[#071326]/70
              backdrop-blur-xl
              p-10
            "
          >
            <div className="text-center">

              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Why Submit to CYCRAI 2027?
              </h3>

              <p className="mt-5 text-slate-300 max-w-4xl mx-auto leading-8">
                CYCRAI 2027 provides an international platform for presenting
                high-quality research in Cyber Security, Responsible AI,
                Intelligent Systems and emerging digital technologies.
                Authors will have the opportunity to interact with leading
                researchers, industry experts and IEEE professionals from
                across the globe.
              </p>

            </div>

            {/* Highlights */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

              <div className="rounded-2xl bg-cyan-500/5 border border-cyan-400/20 p-6 text-center">

                <div className="text-4xl mb-4">📄</div>

                <h4 className="text-white font-bold">
                  IEEE Xplore
                </h4>

                <p className="mt-3 text-slate-400 text-sm leading-7">
                  Accepted and presented papers will be submitted for
                  inclusion in the IEEE Xplore Digital Library,
                  subject to IEEE quality standards.
                </p>

              </div>

              <div className="rounded-2xl bg-cyan-500/5 border border-cyan-400/20 p-6 text-center">

                <div className="text-4xl mb-4">👨‍⚖️</div>

                <h4 className="text-white font-bold">
                  Peer Review
                </h4>

                <p className="mt-3 text-slate-400 text-sm leading-7">
                  Every submission undergoes a rigorous double-blind
                  peer review by experts from academia and industry.
                </p>

              </div>

              <div className="rounded-2xl bg-cyan-500/5 border border-cyan-400/20 p-6 text-center">

                <div className="text-4xl mb-4">🎤</div>

                <h4 className="text-white font-bold">
                  Global Networking
                </h4>

                <p className="mt-3 text-slate-400 text-sm leading-7">
                  Connect with international researchers,
                  keynote speakers, innovators and IEEE volunteers.
                </p>

              </div>

              <div className="rounded-2xl bg-cyan-500/5 border border-cyan-400/20 p-6 text-center">

                <div className="text-4xl mb-4">🏆</div>

                <h4 className="text-white font-bold">
                  Best Paper Awards
                </h4>

                <p className="mt-3 text-slate-400 text-sm leading-7">
                  Outstanding research contributions will be
                  recognized through conference Best Paper Awards.
                </p>

              </div>

            </div>

            {/* Bottom Note */}

            <div className="mt-14 border-t border-cyan-400/20 pt-10 text-center">

              <p className="text-slate-400 leading-8 max-w-5xl mx-auto">

                Authors are encouraged to submit original, unpublished
                and high-quality research contributions aligned with the
                conference themes. Papers demonstrating interdisciplinary
                innovations in Cyber Security, Responsible AI and
                Sustainable Digital Technologies are especially welcome.

              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}