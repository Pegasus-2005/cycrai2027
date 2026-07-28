// const dates = [
//   {
//     date: "22 June 2027",
//     title: "Submission Start Date",
//   },
//   {
//     date: "31 August 2027",
//     title: "Submission Deadline",
//   },
//   {
//     date: "02 November 2027",
//     title: "Acceptance Notification",
//   },
//   {
//     date: "10 November 2027",
//     title: "Registration Deadline",
//   },
//   {
//     date: "16 November 2027",
//     title: "Camera Ready Submission",
//   },
//   {
//     date: "18–20 Dec 2027",
//     title: "Conference Dates",
//   },
// ];

// export default function ImportantDates() {
//   return (
//     <section
//       id="dates"
//       className="bg-[#FAF7F2] py-28 px-6 scroll-mt-40"
//     >
//       <div className="max-w-7xl mx-auto">

//         <div
//           className="text-center mb-20"
//           data-aos="fade-up"
//         >
//           <p className="text-[#B8860B] uppercase tracking-[4px] font-semibold">
//             Conference Schedule
//           </p>

//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#051024]">
//             Important Dates
//           </h2>

//           <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>
//         </div>

//         <div className="relative">

//           {/* Timeline Line */}
//           <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#D4AF37]"></div>

//           <div className="grid md:grid-cols-6 gap-10">

//             {dates.map((item, index) => (
//               <div
//                 key={index}
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//                 className="relative text-center"
//               >
//                 <div className="hidden md:flex w-6 h-6 bg-[#FFD700] rounded-full mx-auto mb-8 border-4 border-white shadow-lg"></div>

//                 <div
//                   className="
//                   bg-white
//                   p-6
//                   rounded-2xl
//                   shadow-lg
//                   border
//                   border-[#FFD700]/20

//                   hover:-translate-y-3
//                   hover:shadow-2xl

//                   transition-all
//                   duration-500
//                   "
//                 >
//                   <h3 className="font-bold text-[#B8860B] text-lg">
//                     {item.date}
//                   </h3>

//                   <p className="mt-3 text-[#051024] font-semibold">
//                     {item.title}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import {
  FaCalendarPlus,
  FaFileUpload,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaMicrophoneAlt,
} from "react-icons/fa";

const dates = [
  {
    icon: <FaCalendarPlus />,
    date: "22 June 2027",
    title: "Paper Submission Opens",
    badge: "IMPORTANT",
  },
  {
    icon: <FaFileUpload />,
    date: "31 August 2027",
    title: "Paper Submission Deadline",
    badge: "DEADLINE",
  },
  {
    icon: <FaCheckCircle />,
    date: "02 November 2027",
    title: "Acceptance Notification",
    badge: "RESULT",
  },
  {
    icon: <FaUserCheck />,
    date: "10 November 2027",
    title: "Author Registration Deadline",
    badge: "REGISTRATION",
  },
  {
    icon: <FaFileAlt />,
    date: "16 November 2027",
    title: "Camera Ready Submission",
    badge: "FINAL",
  },
  {
    icon: <FaMicrophoneAlt />,
    date: "18–20 December 2027",
    title: "Conference Dates",
    badge: "EVENT",
  },
];

export default function ImportantDates() {
  return (
    <section
      id="dates"
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
            Conference Timeline
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
            Important Dates
          </h2>

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
            Stay informed about the important milestones for paper
            submission, peer review, registration and conference
            participation. Authors are requested to follow the
            schedule below for timely submissions.
          </p>

        </div>

        {/* Date Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {dates.map((item, index) => (
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
  {/* Hover Glow */}
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

  {/* Status Badge */}
  <div className="relative z-10 flex justify-between items-center">

    <div
      className="
        w-16
        h-16
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
      {item.icon}
    </div>

    <span
      className="
        px-3
        py-1
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-400/20
        text-cyan-300
        text-xs
        tracking-widest
        font-semibold
      "
    >
      {item.badge}
    </span>

  </div>

  {/* Date */}

  <h3
    className="
      relative
      z-10
      mt-8
      text-2xl
      font-bold
      text-cyan-300
    "
  >
    {item.date}
  </h3>

  {/* Divider */}

  <div
    className="
      relative
      z-10
      mt-5
      h-[3px]
      w-16
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      to-blue-500
    "
  />

  {/* Title */}

  <p
    className="
      relative
      z-10
      mt-6
      text-lg
      font-semibold
      text-white
      leading-8
    "
  >
    {item.title}
  </p>

  {/* Bottom Border */}

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
        {/* Submission Notice */}

        <div
          className="mt-24"
          data-aos="fade-up"
        >

          <div
            className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-r
              from-cyan-500/5
              via-blue-500/5
              to-cyan-500/5
              backdrop-blur-xl
              p-10
            "
          >

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left */}

              <div>

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    text-cyan-300
                    uppercase
                    tracking-[3px]
                    text-xs
                    font-semibold
                  "
                >
                  Submission Guidelines
                </span>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  Prepare Your Paper for CYCRAI 2027
                </h3>

                <p className="mt-6 text-slate-300 leading-8">
                  Authors are invited to submit original, unpublished
                  research contributions aligned with the conference
                  themes. All submissions will undergo a rigorous
                  peer-review process conducted by domain experts.
                  Accepted and presented papers will be considered for
                  publication in the IEEE Xplore Digital Library,
                  subject to IEEE quality standards and compliance
                  requirements.
                </p>

              </div>

              {/* Right */}

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

                  <h4 className="text-4xl font-black text-cyan-300">
                    IEEE
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Xplore Publication*
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

                  <h4 className="text-4xl font-black text-cyan-300">
                    100%
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Peer Review
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

                  <h4 className="text-4xl font-black text-cyan-300">
                    Oral
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Presentation
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

                  <h4 className="text-4xl font-black text-cyan-300">
                    Best
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Paper Awards
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Note */}

            <div className="mt-10 pt-8 border-t border-cyan-400/20">

              <p className="text-center text-slate-400 leading-8">

                <span className="text-cyan-300 font-semibold">
                  Note:
                </span>{" "}
                Authors should strictly follow the IEEE manuscript
                template and submission guidelines. Papers must present
                original work that has not been previously published or
                simultaneously submitted to another conference or
                journal.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}