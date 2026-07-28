// import { useState } from "react";
// import { motion } from "framer-motion";

// import CommitteeTabs from "../components/CommitteeTabs";
// import MemberCard from "../components/MemberCard";
// import { committeeData } from "../data/committeeData";

// export default function Committee() {
//   const [activeCommittee, setActiveCommittee] = useState("organizing");

//   const currentCommittee = committeeData[activeCommittee];

//   return (
//     <div className="bg-[#FAF7F2] min-h-screen">

//       {/* ================= HERO ================= */}

//       <section className="relative overflow-hidden bg-[#092447] text-white">

//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#D4AF37]" />
//           <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-24">

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl md:text-6xl font-bold"
//           >
//             Conference Committee
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15 }}
//             className="mt-6 max-w-3xl text-lg text-gray-200 leading-8"
//           >
//             Meet the distinguished academicians, researchers and IEEE leaders
//             guiding CYCRAI 2027 towards a world-class international
//             conference.
//           </motion.p>

//         </div>

//       </section>

//       {/* ================= CONTENT ================= */}

//       <section className="max-w-7xl mx-auto px-6 py-16">

//         <CommitteeTabs
//           activeCommittee={activeCommittee}
//           setActiveCommittee={setActiveCommittee}
//         />

//         <motion.div
//           key={activeCommittee}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.35 }}
//         >

//           <h2 className="text-4xl font-bold text-[#092447] mb-12 text-center">
//             {currentCommittee.title}
//           </h2>

//           {currentCommittee.sections.map((section, index) => (
//             <div key={index} className="mb-20">

//               {/* Section Heading */}

//               <motion.div
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >

//                 <h3 className="text-3xl font-bold text-[#092447]">
//                   {section.title}
//                 </h3>

//                 <div className="w-24 h-1 bg-[#D4AF37] rounded-full mt-3 mb-10"></div>

//               </motion.div>

//               {/* Cards */}

//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

//                 {section.members.map((member, memberIndex) => (
//                   <MemberCard
//                     key={memberIndex}
//                     member={member}
//                   />
//                 ))}

//               </div>

//             </div>
//           ))}

//         </motion.div>

//       </section>

//     </div>
//   );
// }

// import { useState } from "react";
// import { motion } from "framer-motion";

// import CommitteeTabs from "../components/CommitteeTabs";
// import MemberCard from "../components/MemberCard";
// import { committeeData } from "../data/committeeData";

// export default function Committee() {
//   const [activeCommittee, setActiveCommittee] = useState("organizing");

//   const currentCommittee = committeeData[activeCommittee];

//   return (
//    <div className="min-h-screen bg-[#020817] text-white">
//             {/* ================= HERO ================= */}

//       <section className="relative overflow-hidden bg-[#020817] text-white">

//         {/* Grid Background */}
//         <div
//           className="
//             absolute
//             inset-0

//             bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)]
//             bg-[size:45px_45px]
//           "
//         />

//         {/* Glowing Orbs */}

//         <div className="absolute inset-0 overflow-hidden pointer-events-none">

//           <div
//             className="
//               absolute
//               -top-36
//               -left-32

//               w-[420px]
//               h-[420px]

//               rounded-full

//               bg-cyan-500/15

//               blur-[170px]
//             "
//           />

//           <div
//             className="
//               absolute
//               top-16
//               right-0

//               w-[320px]
//               h-[320px]

//               rounded-full

//               bg-blue-600/15

//               blur-[150px]
//             "
//           />

//           <div
//             className="
//               absolute
//               bottom-0
//               left-1/3

//               w-[260px]
//               h-[260px]

//               rounded-full

//               bg-sky-500/10

//               blur-[130px]
//             "
//           />

//         </div>

//         {/* Hero Content */}

//         <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-36">

//           {/* Badge */}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="
//               inline-flex
//               items-center

//               px-5
//               py-2

//               rounded-full

//               bg-cyan-500/10

//               border
//               border-cyan-400/30

//               backdrop-blur-xl

//               text-cyan-300

//               font-medium
//               tracking-wide
//             "
//           >
//             IEEE • CYCRAI 2027
//           </motion.div>

//           {/* Title */}

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="
//               mt-8

//               text-5xl
//               md:text-7xl

//               font-black

//               leading-tight
//             "
//           >
//             <span className="text-white">
//               Conference
//             </span>

//             <br />

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-300
//                 via-sky-400
//                 to-blue-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Committee
//             </span>
//           </motion.h1>

//           {/* Subtitle */}

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="
//               mt-8

//               max-w-3xl

//               text-lg
//               md:text-xl

//               leading-9

//               text-slate-300
//             "
//           >
//             Meet the distinguished researchers, academicians, IEEE leaders,
//             and industry experts driving CYCRAI 2027 towards becoming a
//             globally recognized conference in Artificial Intelligence,
//             Cyber Security, and Emerging Technologies.
//           </motion.p>

//           {/* Decorative Line */}

//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: 160 }}
//             transition={{
//               delay: 0.4,
//               duration: 0.8,
//             }}
//             className="
//               mt-10

//               h-[4px]

//               rounded-full

//               bg-gradient-to-r
//               from-cyan-400
//               via-sky-500
//               to-blue-600
//             "
//           />

//         </div>

//       </section>

//       {/* ================= CONTENT ================= */}

//             {/* ================= CONTENT ================= */}

//       <section className="relative overflow-hidden py-24">

//         {/* Background Grid */}

//         <div
//           className="
//             absolute
//             inset-0

//             bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)]
//             bg-[size:45px_45px]
//           "
//         />

//         {/* Ambient Glow */}

//         <div className="absolute inset-0 pointer-events-none overflow-hidden">

//           <div
//             className="
//               absolute
//               top-20
//               left-0

//               w-96
//               h-96

//               rounded-full

//               bg-cyan-500/10

//               blur-[180px]
//             "
//           />

//           <div
//             className="
//               absolute
//               bottom-10
//               right-0

//               w-[450px]
//               h-[450px]

//               rounded-full

//               bg-blue-600/10

//               blur-[200px]
//             "
//           />

//         </div>

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* Committee Tabs */}

//           <CommitteeTabs
//             activeCommittee={activeCommittee}
//             setActiveCommittee={setActiveCommittee}
//           />

//           <motion.div
//             key={activeCommittee}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.35 }}
//             className="mt-16"
//           >

//             {/* Remaining content goes here */}
//                         {/* Committee Header */}

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="relative mb-20"
//             >

//               {/* Glow */}

//               <div
//                 className="
//                   absolute

//                   left-1/2
//                   top-1/2

//                   -translate-x-1/2
//                   -translate-y-1/2

//                   w-80
//                   h-80

//                   rounded-full

//                   bg-cyan-500/10

//                   blur-[120px]
//                 "
//               />

//               <div className="relative text-center">

//                 {/* Badge */}

//                 <div
//                   className="
//                     inline-flex
//                     items-center

//                     rounded-full

//                     border
//                     border-cyan-400/30

//                     bg-cyan-500/10

//                     backdrop-blur-xl

//                     px-5
//                     py-2

//                     text-sm
//                     font-medium

//                     tracking-wider

//                     text-cyan-300
//                   "
//                 >
//                   COMMITTEE DIRECTORY
//                 </div>

//                 {/* Heading */}

//                 <h2
//                   className="
//                     mt-8

//                     text-4xl
//                     md:text-6xl

//                     font-black

//                     leading-tight
//                   "
//                 >
//                   <span className="text-white">
//                     {currentCommittee.title}
//                   </span>
//                 </h2>

//                 {/* Divider */}

//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: 120 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8 }}
//                   className="
//                     mx-auto

//                     mt-7

//                     h-1

//                     rounded-full

//                     bg-gradient-to-r
//                     from-cyan-400
//                     via-sky-500
//                     to-blue-600
//                   "
//                 />

//                 {/* Description */}

//                 <p
//                   className="
//                     mx-auto

//                     mt-8

//                     max-w-3xl

//                     text-lg

//                     leading-8

//                     text-slate-400
//                   "
//                 >
//                   Meet the dedicated committee members who are
//                   contributing their expertise and leadership to
//                   organize, review, coordinate, and deliver an
//                   internationally recognized conference experience
//                   for CYCRAI 2027.
//                 </p>

//               </div>

//             </motion.div>
            
//           </motion.div>

//         </div>

//       </section>

//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import CommitteeTabs from "../components/CommitteeTabs";
import MemberCard from "../components/MemberCard";
import { committeeData } from "../data/committeeData";

export default function Committee() {
  const [activeCommittee, setActiveCommittee] = useState("organizing");
  const currentCommittee = committeeData[activeCommittee];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Use the redesigned Hero from earlier phases */}
      <section className="relative overflow-hidden bg-[#020817] text-white">

        {/* Grid Background */}
        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)]
            bg-[size:45px_45px]
          "
        />

        {/* Glowing Orbs */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div
            className="
              absolute
              -top-36
              -left-32

              w-[420px]
              h-[420px]

              rounded-full

              bg-cyan-500/15

              blur-[170px]
            "
          />

          <div
            className="
              absolute
              top-16
              right-0

              w-[320px]
              h-[320px]

              rounded-full

              bg-blue-600/15

              blur-[150px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-1/3

              w-[260px]
              h-[260px]

              rounded-full

              bg-sky-500/10

              blur-[130px]
            "
          />

        </div>

        {/* Hero Content */}

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-36">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center

              px-5
              py-2

              rounded-full

              bg-cyan-500/10

              border
              border-cyan-400/30

              backdrop-blur-xl

              text-cyan-300

              font-medium
              tracking-wide
            "
          >
            IEEE • CYCRAI 2027
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mt-8

              text-5xl
              md:text-7xl

              font-black

              leading-tight
            "
          >
            <span className="text-white">
              Conference
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-sky-400
                to-blue-500

                bg-clip-text
                text-transparent
              "
            >
              Committee
            </span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-8

              max-w-3xl

              text-lg
              md:text-xl

              leading-9

              text-slate-300
            "
          >
            Meet the distinguished researchers, academicians, IEEE leaders,
            and industry experts driving CYCRAI 2027 towards becoming a
            globally recognized conference in Artificial Intelligence,
            Cyber Security, and Emerging Technologies.
          </motion.p>

          {/* Decorative Line */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              mt-10

              h-[4px]

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              via-sky-500
              to-blue-600
            "
          />

        </div>
        </section>
      <section className="relative overflow-hidden py-24">
        <div className="relative max-w-7xl mx-auto px-6">
          <CommitteeTabs
            activeCommittee={activeCommittee}
            setActiveCommittee={setActiveCommittee}
          />

          <motion.div
            key={activeCommittee}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mt-16"
          >
            <div className="relative mb-20 text-center">
              <h2 className="text-5xl font-black text-white">
                {currentCommittee.title}
              </h2>
            </div>

            {currentCommittee.sections.map((section, index) => (
              <div key={index} className="mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 rounded-3xl border border-cyan-400/20 bg-[#071326]/80 p-8 backdrop-blur-2xl"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[4px] text-cyan-300">
                        Committee Section
                      </p>
                      <h3 className="mt-3 text-3xl font-bold text-white">
                        {section.title}
                      </h3>
                    </div>

                    <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">
                      {section.members.length} {section.members.length === 1 ? "Member" : "Members"}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  layout
                  className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10"
                >
                  {section.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: memberIndex * 0.08 }}
                    >
                      <MemberCard member={member} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
