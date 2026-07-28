// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// import Footer from "../components/Footer";



// export default function Guidelines() {
//     const [showSubmitPopup, setShowSubmitPopup] = useState(false);
// const [agreed, setAgreed] = useState(false);
//   return (
//     <>
//     <section className="min-h-screen bg-gradient-to-b from-[#faf8f2] to-white py-32 px-6">

//       <div className="max-w-7xl mx-auto">

//         {/* Hero */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <p className="text-[#C89B00] uppercase tracking-[4px] font-semibold">
//             CYCRAI 2027
//           </p>

//           <h1 className="text-5xl md:text-6xl font-bold text-[#051024] mt-3">
//             Guidelines & Policies
//           </h1>

//           <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-relaxed">
//             Authors are requested to carefully review all submission,
//             formatting, review, publication, and presentation policies
//             before preparing and submitting their manuscripts to
//             CYCRAI 2027.
//           </p>

//           <div className="w-24 h-1 bg-[#F4D03F] mx-auto mt-5 rounded-full"></div>
//         </motion.div>

//         {/* General Guidelines */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             General Guidelines to Authors
//           </h2>

//           <p className="text-gray-700 leading-relaxed">
//             CYCRAI 2027 welcomes original research contributions
//             from academia, industry, and research organizations.
//             Authors are encouraged to submit high-quality manuscripts
//             aligned with the conference themes and technical tracks.
//             All submissions must comply with IEEE standards and follow
//             the conference formatting and review requirements.
//           </p>
//         </motion.div>

//         {/* Originality + Submission */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-8">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20"
//           >
//             <h3 className="text-2xl font-bold text-[#051024] mb-5">
//               Originality of Submitted Papers
//             </h3>

//             <ul className="space-y-4 text-gray-700 leading-relaxed">
//               <li>
//                 • Papers must contain original and unpublished research work.
//               </li>

//               <li>
//                 • Manuscripts must not be under review or submitted to
//                 any other conference, journal, or publication venue.
//               </li>

//               <li>
//                 • IEEE anti-plagiarism policies apply to all submissions.
//               </li>

//               <li>
//                 • Authors are fully responsible for ensuring the originality
//                 and authenticity of their work.
//               </li>

//               <li>
//                 • Papers violating publication ethics may be rejected
//                 without review.
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20"
//           >
//             <h3 className="text-2xl font-bold text-[#051024] mb-5">
//               Paper Submission Requirements
//             </h3>

//             <ul className="space-y-4 text-gray-700 leading-relaxed">
//               <li>
//                 • Papers must be prepared in IEEE standard
//                 two-column conference format.
//               </li>

//               <li>
//                 • Manuscripts must be written in English.
//               </li>

//               <li>
//                 • Papers should be between four and six pages,
//                 including references and figures.
//               </li>

//               <li>
//                 • Literature-review-only papers are not accepted, and any submission exceeding six pages will be rejected. 
//               </li>

//               <li>
//                 • Submitted papers must NOT list any author names, affiliations, or other personally identifiable information, and must not include page numbers. 
//               </li>
              
//               <li>
//                 • Detailed format information is available on the IEEE website <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank"
//   rel="noopener noreferrer"
//   className="text-blue-600 underline hover:text-blue-800">(IEEE conference templates)</a>.
//               </li>

//               <li>
//                 • Submissions exceeding the page limit may be rejected.
//               </li>
              
//             </ul>
//           </motion.div>

//         </div>
        
        

//   <div className="flex justify-center gap-4 mt-12 mb-12">

//   <a
//     href="https://www.ieee.org/conferences/publishing/templates"
//     target="_blank"
//     className="
//       border-2 border-[#051024]
//       text-[#051024]
//       px-8 py-4
//       rounded-full
//       font-semibold
//       hover:bg-[#051024]
//       hover:text-white
//       transition
//     "
//   >
//     Download Template
//   </a>
// </div>



//         {/* Upload Instructions */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             Paper Upload Instructions
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">

//             <div>
//               <ul className="space-y-4 text-gray-700 leading-relaxed">
//                 <li>
//                   • All papers must be submitted through the Microsoft
//                   Conference Management Toolkit (CMT).
//                 </li>

//                 <li>
//                   • Submitting authors may need to create a CMT account before uploading. Authors should provide a complete paper title
//                   and abstract of no more than 250 words during submission.
//                 </li>

//                 <li>
//                   • Abstracts should clearly summarize the contribution
//                   and significance of the work.
//                 </li>

//                 <li>
//                   • Authors must verify all metadata before final submission.
//                 </li>

//                 <li>
//                   • All submitted papers are peer-reviewed by the Technical Program Committee (TPC).
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <ul className="space-y-4 text-gray-700 leading-relaxed">
//                 <li>
//                   • All accepted papers that are registered and presented at the conference will be sent for possible inclusion in IEEE Xplore.
//                 </li>

//                 <li>
//                   • Authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of the online submission process. 
//                 </li>

//                 <li>
//                   • Accepted and presented papers will be considered
//                   for submission to IEEE Xplore.
//                 </li>

//                 <li>
//                   • The Microsoft CMT service is used to manage the peer-review process for this conference. 
//                 </li>

//                 <li>
//                   • The Microsoft CMT service was used for managing the peer-reviewing
//               process for this conference. This service was provided for free by
//               Microsoft and they bore all expenses, including costs for Azure
//               cloud services as well as for software development and support.
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </motion.div>

//         <div 
//             className="mt-10 bg-[#FFF9E8] border border-[#F4D03F]/30 rounded-2xl p-6 transform transition-all duration-300 hover:shadow-md hover:border-[#F4D03F]/50 reveal-on-scroll flex justify-center gap-4 mt-12 mb-12"
//             style={{ animationDelay: '0.5s' }}
//           >
//             <p className="text-[15px] text-gray-700 leading-relaxed font-bold text-center md:text-left">
//               The Microsoft CMT service was used for managing the peer-reviewing
//               process for this conference. This service was provided for free by
//               Microsoft and they bore all expenses, including costs for Azure
//               cloud services as well as for software development and support.
//             </p>
//           </div>
          
//                 {/* Manuscript Guidelines */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             Manuscript Preparation Guidelines
//           </h2>

//           <ul className="space-y-4 text-gray-700 leading-relaxed">
//             <li>• Submitted manuscripts must be structured as <b>technical papers</b>. They must represent original, unpublished research that is <b>NOT currently under review </b>for any other conference or journal.</li>
//             <li>• Manuscripts must be a maximum of <b>six pages</b>; single-spaced, double-column, using 10-point font on 8.5×11-inch pages (IEEE conference style), including figures, tables, and references.</li>
//             <li>• <b>The IEEE conference style templates</b> for MS Word and LaTeX, provided by IEEE eXpress Conference Publishing, are available for download. Papers not following the style guidelines may be rejected without review.</li>
//             <li>• Electronic submissions must be a readable PDF file.</li>
//             <li>• Submitted manuscripts undergo mandatory <b>plagiarism screening </b>per IEEE guidelines. Papers violating ethics will be desk-rejected and the authors’ parent organizations informed.</li>
//             <li>• All submitted manuscripts are reviewed by the Program Committee :</li>
// 	        <li>      - Submitted papers must NOT list any author names, affiliations, or other personally identifiable information.</li>
// 	<li> - Authors should NOT identify themselves or their organization in the paper, either explicitly or by implication (e.g., through references or acknowledgments). References to one’s own work should be in the third person.</li>
// 	<li> - Submissions are judged on correctness, originality, technical strength, significance, potential impact, quality of presentation, and relevance to the conference scope.</li>

//             <li>• <b>The author list and order at the time of submission is considered final </b>— no co-authors may be added, removed, or re-ordered after the submission deadline or upon acceptance (no exceptions).</li>
//           <li>• Manuscripts that DO NOT follow these guidelines (size, formatting, and anonymization requirements) will be rejected without review.</li>
//           <li>• A paper may be accepted for the track in which it is submitted, or as a WIP/Poster paper if it does not meet the requisite depth. In the latter case, authors will have one week to submit a shorter version for the proceedings.</li>
//           <li>• Upon acceptance, <b>at least one author must register</b> for the conference and present the paper. Every accepted paper requires an individual author registration.</li>
//           <li>• Per IEEE policy, authors of every published paper must sign a copyright transfer agreement. Instructions will be shared with authors after acceptance.</li>
//           <li text-bold>• <b>All manuscripts must be submitted through the submit button provided at the bottom of this document.</b></li>
//           <li text-bold>• <b>All accepted and presented papers will be submitted for inclusion in IEEE Xplore, subject to meeting IEEE Xplore’s scope and quality requirements.</b></li>

//           </ul>
//         </motion.div>

//         {/* Review Process */}
//         <div className="bg-[#051024] rounded-3xl p-10 text-white mb-8">

//           <h2 className="text-3xl font-bold text-center mb-8">
//             Review Process
//           </h2>

//           <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

//             {[
//               "Plagiarism Screening",
//               "Double-Blind Review",
//               "Technical Evaluation",
//               "Acceptance Decision",
//               "Camera Ready",
//               "Conference Presentation"
//             ].map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 className="bg-white/10 rounded-2xl p-5 text-center"
//               >
//                 <div className="text-2xl font-bold text-[#F4D03F] mb-2">
//                   {index + 1}
//                 </div>

//                 <p>{step}</p>
//               </motion.div>
//             ))}
//           </div>

//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             Review Process
//           </h2>

//           <ul className="space-y-4 text-gray-700 leading-relaxed">
//             <li>• Submitted manuscripts undergo mandatory plagiarism screening per IEEE guidelines. Papers violating ethics will be desk-rejected and the authors’ parent organizations informed.</li>
//             <li>• All submitted manuscripts will be reviewed by the Program Committee under a double-blind review process
// </li>
//             <li> -Submitted papers should NOT list any author names, affiliations or any other personally identifiable information.
// </li>
//             <li> -As an author, you should not identify yourself or your organization in the paper, either explicitly or by implication (e.g., through the references or acknowledgments). References to your own work should be in the third-person.
// </li>
//             <li> -Submissions will be judged on correctness, originality, technical strength, significance, potential impact, quality of presentation, and interest and relevance to the conference scope.
// </li>
//             <li>• The author list and order at the time of submission is considered final – no co-authors can be added or removed or re-ordered after the submission deadline or upon acceptance (no exceptions).
// </li>
//             <li>• Submitted manuscripts that DO NOT follow these guidelines (i.e., do not meet the size, formatting, and anonymization requirements ) will be rejected without review.
// </li>
//             <li>• Paper may be accepted for the track it is submitted in, or may be accepted as a WIP/Poster paper in case it does not meet the requisite depth. In case of the latter, authors will have 1 week to submit a shorter version of the paper to appear in the proceedings.
// </li>

            

//           </ul>
//         </motion.div>

//         {/* Publication Policy */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             Publication Policy
//           </h2>

//           <ul className="space-y-4 text-gray-700 leading-relaxed">
//             <li>• Upon paper acceptance, at least one author must register for the conference and present the paper. Every accepted paper must have an individual author registration.

// </li>
//             <li>• As per IEEE policy, authors of every published paper needs to sign a copyright transfer agreement. The instructions for the copyright agreement will be shared with the author after acceptance of the paper.

// </li>
//             <li>• <b>All accepted and presented papers will be submitted for inclusion into IEEE Xplore, subject to meeting IEEE Xplore’s scope and quality requirements.</b>

// </li>
//           </ul>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             IEEE Author Center
//           </h2>

//           <ul className="space-y-4 text-gray-700 leading-relaxed">
//             <li>• IEEE is a trusted source for researchers in academia, industry, and government. By publishing with IEEE, you will get the global prestige that high-quality research deserves. All you need to know to publish in IEEE is <a href="https://ieeeauthorcenter.ieee.org/">here</a>.

// </li>
//             <ul className="list-circle pl-10 mt-4 space-y-3">
//             <li>- <b>Become an IEEE Conference Author: IEEE offers guidance and best practices on the conference publishing process.</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/" className="text-blue-600 underline hover:text-blue-800">here</a>.

// </li>
//             <li>- <b>Author Ethics: Ethical guidelines are required in scientific publishing.</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/" className="text-blue-600 underline hover:text-blue-800">here</a>.

// </li>
//             <li>- <b>Write your Paper:</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/write-your-paper/" className="text-blue-600 underline hover:text-blue-800">here</a>.

// </li>
//             <li>- <b>Understand Peer Review:</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/" className="text-blue-600 underline hover:text-blue-800">here</a>

// </li>
//             <li>- <b>Get Published:</b> Refer <a href="https://conferences.ieeeauthorcenter.ieee.org/get-published/" className="text-blue-600 underline hover:text-blue-800">here</a>.

// </li>
// </ul>
//           </ul>
//         </motion.div>

//         {/* Camera Ready */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-8"
//         >
//           <h2 className="text-3xl font-bold text-[#051024] mb-5">
//             Camera Ready and Copyright
//           </h2>
//             <h2 className="mb-5">Authors are requested to upload the camera ready. Authors need to complete the following steps:
// </h2>

//           <ul className="space-y-4 text-gray-700 leading-relaxed">
//             <li>• All final paper submissions must be electronic, using IEEE Xplore compliant PDF format (*.pdf). Failure to do so may result in the rejection of the paper. Authors are requested to upload the camera ready in CMT
// </li>
//             <li>• Type 3 fonts (bitmaps) will not be accepted. Authors can use the IEEE PDF eXpress to generate compliant PDF Files for final submission.
// </li>
//             <li>• Prepare final manuscript STRICTLY according to IEEE template. Failing which, we will not submit your manuscript to Xplore. Template can be found here. Preferably, use US Letter. Manuscript Templates for Conference Proceedings: <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline hover:text-blue-800">https://www.ieee.org/conferences/publishing/templates.html</a>.
// </li>
//             <li>• Length of manuscript should be maximum 6 pages
// </li>
//             <li>• Format and verify your manuscript using IEEE PDF eXpress™ to generate IEEE Xplore®-compliant PDF. RESOURCES IEEE PDF eXpress: A freely available online tool designed to assist conference organizers and authors in complying with the IEEE PDF requirements <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline hover:text-blue-800">https://www.ieee.org/conferences/publishing/pdfexpress.html</a>  (In case, you need conference id to use PDFXpress, please use this – #72446)
// </li>
            
//             <li>• Get and upload your IEEE Electronic Copyright Form (eCF) to CMT.
// </li>
//             <li>• Upload your camera-ready paper (IEEE Xplore®-compliant PDF or Microsoft Word Document) to CMT, your respective track.
// </li>
//             <li>• Register for the conference with payment. Registration should be done before camera ready upload.
// </li>
 
//           </ul>
//         </motion.div>


//         {/* Important Dates */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F4D03F]/20 mb-9">

//           <h2 className="text-3xl font-bold text-[#051024] mb-6">
//             Important Dates
//           </h2>

//           <div className="overflow-x-auto">

//             <table className="w-full border-collapse">

//               <thead>
//                 <tr className="bg-[#051024] text-white">
//                   <th className="p-4 text-left">Milestone</th>
//                   <th className="p-4 text-left">Date</th>
//                 </tr>
//               </thead>

//               <tbody>

//                 <tr className="border-b">
//                   <td className="p-4">Submission Start Date</td>
//                   <td className="p-4">22 June 2026</td>
//                 </tr>

//                 <tr className="border-b">
//                   <td className="p-4">Submission Deadline</td>
//                   <td className="p-4">31 August 2026</td>
//                 </tr>

//                 <tr className="border-b">
//                   <td className="p-4">Notification of Acceptance</td>
//                   <td className="p-4">02 November 2026</td>
//                 </tr>

//                 <tr>
//                   <td className="p-4">Camera Ready Submission</td>
//                   <td className="p-4">16 November 2026</td>
//                 </tr>

//               </tbody>

//             </table>

//           </div>

//         </div>
//                 <div className="text-center mt-10">

//   <button
//     onClick={() => setShowSubmitPopup(true)}
//     className="
//       bg-[#F4D03F]
//       text-[#051024]
//       px-8 py-4
//       rounded-full
//       font-semibold
//       hover:scale-105
//       transition
//       shadow-lg
//     "
//   >
//     Submit Paper
//   </button>

// </div>
//       </div>

//     </section>
//     {showSubmitPopup && (
//   <div
//     className="
//       fixed inset-0
//       z-[999]
//       flex items-center justify-center
//       bg-black/60
//       backdrop-blur-md
//       px-4
//     "
//     onClick={() => setShowSubmitPopup(false)}
//   >

//     <div
//       onClick={(e) => e.stopPropagation()}
//       className="
//         bg-white
//         max-w-lg
//         w-full
//         rounded-3xl
//         p-8
//         shadow-2xl
//       "
//     >

//       <h2 className="text-2xl font-bold text-[#051024] mb-4">
//         Author Declaration
//       </h2>

//       <p className="text-gray-600 leading-relaxed mb-6">
            

//         Before proceeding to the Microsoft CMT submission portal,
//         authors must confirm that they have read and understood
//         all submission guidelines, publication policies,
//         formatting requirements, and important dates.
//       </p>

//       <label className="flex items-start gap-3 mb-6">

//         <input
//           type="checkbox"
//           checked={agreed}
//           onChange={() => setAgreed(!agreed)}
//           className="mt-1 w-9 h-9 accent-[#F4D03F]"
//         />

//         <span className="text-sm text-gray-700">
//           I confirm that I have read, understood,
//           and agree to comply with the CYCRAI 2027
//           submission guidelines and publication policies.

          
//         </span>

//       </label>

//       <div className="flex justify-end gap-3">

//         <button
//           onClick={() => setShowSubmitPopup(false)}
//           className="
//             px-5 py-3
//             rounded-full
//             bg-gray-200
//             text-gray-700
//           "
//         >
//           Cancel
//         </button>

//         <a
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`
//             px-6 py-3
//             rounded-full
//             font-semibold
//             transition

//             ${
//               agreed
//                 ? "bg-[#F4D03F] text-[#051024]"
//                 : "bg-gray-300 text-gray-500 pointer-events-none"
//             }
//           `}
//         >
//           Proceed to CMT
//         </a>

//       </div>

//     </div>

//   </div>
  
// )}
//     <Footer/>
//     </>
    
//   );

// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  FileText,
  CalendarDays,
  ClipboardCheck,
  Scale,
  ArrowRight,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Guidelines() {

  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const timeline = [
    {
      title: "Submission Opens",
      date: "22 June 2026",
    },
    {
      title: "Submission Deadline",
      date: "31 August 2026",
    },
    {
      title: "Acceptance",
      date: "02 November 2026",
    },
    {
      title: "Camera Ready",
      date: "16 November 2026",
    },
    {
      title: "Conference",
      date: "December 2026",
    },
  ];

  const quickRules = [
    {
      icon: ShieldCheck,
      title: "Original Research",
      desc:
        "Only original and unpublished research papers are accepted.",
    },
    {
      icon: FileText,
      title: "IEEE Format",
      desc:
        "Prepare your manuscript using the official IEEE Conference Template.",
    },
    {
      icon: ClipboardCheck,
      title: "Double Blind Review",
      desc:
        "Do not include author names or affiliations in the submitted manuscript.",
    },
    {
      icon: Scale,
      title: "Publication Ethics",
      desc:
        "IEEE plagiarism and publication ethics policies strictly apply.",
    },
  ];

  return (
    <>
          {/* =========================================
              HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-[#020817] min-h-screen pt-32 pb-24">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Glow */}

        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:.8 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 uppercase tracking-[3px] text-sm text-cyan-300">

              <Sparkles size={16}/>

              IEEE Conference Policies

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

              Guidelines

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                & Policies

              </span>

            </h1>

            <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl leading-9 text-slate-300">

              Before submitting your manuscript, carefully review the
              conference policies, IEEE formatting requirements,
              double-blind review guidelines, publication ethics,
              camera-ready instructions and important deadlines.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button
                className="group rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-900 transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]"
              >

                Download IEEE Template

              </button>

              <button
                onClick={() => setShowSubmitPopup(true)}
                className="rounded-full border border-cyan-400/40 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >

                Submit Paper

              </button>

            </div>

          </motion.div>

          {/* Quick Rules */}

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {quickRules.map((item,index)=>{

              const Icon = item.icon;

              return(

                <motion.div
                  key={item.title}
                  initial={{opacity:0,y:30}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    duration:.6,
                    delay:index*.08
                  }}
                  className="group rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">

                    <Icon
                      size={28}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">

                    {item.desc}

                  </p>

                </motion.div>

              )

            })}

          </div>

        </div>

      </section>
            {/* =========================================
              IMPORTANT DATES
      ========================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817] overflow-hidden">

        {/* Background Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 uppercase tracking-[3px] text-sm">

              <CalendarDays size={16} />

              Conference Schedule

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Important

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Dates

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-400">

              Please keep track of all conference milestones and ensure
              your submission is completed before the deadlines.

            </p>

          </motion.div>

          {/* Timeline */}

          <div className="relative">

            {/* Desktop Line */}

            <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20"></div>

            <div className="grid lg:grid-cols-5 gap-10">

              {timeline.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .55,
                    delay: index * .1,
                  }}
                  className="relative text-center"
                >

                  <div className="mx-auto w-20 h-20 rounded-full border-4 border-cyan-400 bg-[#071326] flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,.15)]">

                    <span className="text-cyan-300 font-black text-xl">

                      {index + 1}

                    </span>

                  </div>

                  <div className="mt-8 rounded-[28px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-500">

                    <h3 className="text-xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-4 text-cyan-300 font-semibold">

                      {item.date}

                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* =========================================
              AUTHOR GUIDELINES
      ========================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-40 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-20 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              Author Instructions

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Submission

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Guidelines

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">

              Authors should carefully review the following guidelines
              before preparing and submitting manuscripts.

            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <ShieldCheck className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Originality

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• Original unpublished research only.</li>

                <li>• Must not be under review elsewhere.</li>

                <li>• IEEE plagiarism policy applies.</li>

                <li>• Publication ethics violations lead to rejection.</li>

                <li>• Authors are responsible for authenticity.</li>

              </ul>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <FileText className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Formatting

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• IEEE Conference Template.</li>

                <li>• English language only.</li>

                <li>• Maximum six pages.</li>

                <li>• Submit PDF format.</li>

                <li>• References included within page limit.</li>

              </ul>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <ClipboardCheck className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Double-Blind Review

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• Remove author names.</li>

                <li>• Remove affiliations.</li>

                <li>• No acknowledgements.</li>

                <li>• Self references in third person.</li>

                <li>• No identifying information.</li>

              </ul>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">

                <Scale className="text-cyan-300"/>

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Publication Policy

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>• Papers undergo peer review.</li>

                <li>• Registration is mandatory after acceptance.</li>

                <li>• Presentation is compulsory.</li>

                <li>• IEEE copyright transfer required.</li>

                <li>• Eligible papers will be submitted to IEEE Xplore.</li>

              </ul>

            </motion.div>

          </div>

        </div>

      </section>
            {/* =========================================
              SUBMISSION WORKFLOW
      ========================================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326] overflow-hidden">

        {/* Background */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-10 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              Author Workflow

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Paper Submission

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Process

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-400">

              Follow these steps to complete a successful manuscript
              submission.

            </p>

          </motion.div>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                number:"01",
                title:"Prepare Manuscript",
                desc:"Write your paper using the official IEEE Conference Template."
              },
              {
                number:"02",
                title:"Check Originality",
                desc:"Verify originality and ensure compliance with IEEE publication ethics."
              },
              {
                number:"03",
                title:"Create CMT Account",
                desc:"Register or sign in to the Microsoft CMT submission system."
              },
              {
                number:"04",
                title:"Upload Paper",
                desc:"Upload the anonymous PDF manuscript together with metadata."
              },
              {
                number:"05",
                title:"Peer Review",
                desc:"The Technical Program Committee performs double-blind review."
              },
              {
                number:"06",
                title:"Camera Ready",
                desc:"Accepted papers must complete registration and final submission."
              }

            ].map((step,index)=>(

              <motion.div
                key={step.number}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  duration:.6,
                  delay:index*.08
                }}
                className="
                  group
                  relative
                  rounded-[30px]
                  border
                  border-cyan-400/20
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <div className="absolute top-8 right-8 text-6xl font-black text-cyan-500/10">

                  {step.number}

                </div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6">

                    <FileText
                      size={26}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white">

                    {step.title}

                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">

                    {step.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>
                    <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{delay:.3}}
            className="grid lg:grid-cols-2 gap-8 mt-20"
          >

            <div className="rounded-[30px] border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl p-10">

              <h3 className="text-2xl font-bold text-white">

                Submission Requirements

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>✓ IEEE two-column format</li>

                <li>✓ English language only</li>

                <li>✓ Maximum six pages</li>

                <li>✓ Anonymous manuscript</li>

                <li>✓ PDF submission</li>

                <li>✓ Complete metadata</li>

              </ul>

            </div>

            <div className="rounded-[30px] border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl p-10">

              <h3 className="text-2xl font-bold text-white">

                After Submission

              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-8">

                <li>✓ Technical review</li>

                <li>✓ Decision notification</li>

                <li>✓ Camera-ready upload</li>

                <li>✓ Copyright form</li>

                <li>✓ Author registration</li>

                <li>✓ Conference presentation</li>

              </ul>

            </div>

          </motion.div>

        </div>

      </section>
            {/* =========================================
              MANUSCRIPT & REVIEW
      ========================================= */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-20 top-40 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
            className="text-center mb-20"
          >

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">

              IEEE Requirements

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

              Manuscript

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Preparation

              </span>

            </h2>

          </motion.div>
                    <div className="grid lg:grid-cols-2 gap-8">

            <motion.div
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <h3 className="text-3xl font-bold text-white">

                Manuscript Checklist

              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "IEEE Conference Template",
                  "Maximum 6 Pages",
                  "PDF Format",
                  "English Language",
                  "Original Research",
                  "Anonymous Submission",
                  "No Page Numbers",
                  "References Included",
                  "Figures & Tables Embedded",
                  "No Plagiarism"
                ].map((item)=>(

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                  >

                    <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-[#020817] font-black">

                      ✓

                    </div>

                    <span className="text-slate-300">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>
                        <motion.div
              initial={{opacity:0,x:30}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className="rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10"
            >

              <h3 className="text-3xl font-bold text-white">

                Publication Ethics

              </h3>

              <div className="mt-8 space-y-6 text-slate-400 leading-8">

                <p>
                  Authors must submit only original, unpublished research.
                </p>

                <p>
                  Simultaneous submission to another conference or journal is not permitted.
                </p>

                <p>
                  Every manuscript undergoes plagiarism screening before review.
                </p>

                <p>
                  Any violation of IEEE publication ethics may result in immediate rejection.
                </p>

                <p>
                  Authors are responsible for the authenticity and integrity of all submitted work.
                </p>

              </div>

            </motion.div>

          </div>
                    <div className="mt-24">

            <h3 className="text-center text-4xl font-black text-white mb-16">

              Review Process

            </h3>

            <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6">

              {[
                "Plagiarism Check",
                "Double-Blind Review",
                "Technical Evaluation",
                "Acceptance",
                "Camera Ready",
                "Presentation"
              ].map((step,index)=>(

                <motion.div
                  key={step}
                  initial={{opacity:0,y:30}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    duration:.5,
                    delay:index*.08
                  }}
                  className="rounded-[26px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400/40 transition-all"
                >

                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 mx-auto flex items-center justify-center text-cyan-300 font-black text-xl">

                    {index+1}

                  </div>

                  <h4 className="mt-6 text-white font-bold">

                    {step}

                  </h4>

                </motion.div>

              ))}

            </div>

          </div>
                    <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{delay:.3}}
            className="mt-24 rounded-[35px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-14"
          >

            <h3 className="text-4xl font-black text-white text-center">

              Publication Policy

            </h3>

            <div className="grid md:grid-cols-4 gap-8 mt-14">

              {[
                "Paper Accepted",
                "Author Registration",
                "Conference Presentation",
                "IEEE Xplore Submission"
              ].map((item,index)=>(

                <div
                  key={item}
                  className="text-center"
                >

                  <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-black text-2xl">

                    {index+1}

                  </div>

                  <p className="mt-6 text-slate-300 leading-7">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            <p className="mt-14 max-w-4xl mx-auto text-center text-slate-400 leading-8">

              All accepted papers that are registered and presented at the
              conference will be submitted for inclusion in IEEE Xplore,
              subject to IEEE Xplore's scope and quality requirements.

            </p>

          </motion.div>

        </div>

      </section>
      {/* =========================================
        IEEE AUTHOR CENTER
========================================= */}

<section className="relative py-28 bg-gradient-to-b from-[#071326] via-[#020817] to-[#071326]">

  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="text-center mb-20"
    >

      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 uppercase tracking-[3px] text-sm">

        IEEE Resources

      </span>

      <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">

        IEEE Author

        <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">

          Center

        </span>

      </h2>

    </motion.div>
    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

{[
{
title:"Become an IEEE Author",
link:"https://conferences.ieeeauthorcenter.ieee.org/become-an-ieee-conference-author/"
},
{
title:"Author Ethics",
link:"https://conferences.ieeeauthorcenter.ieee.org/author-ethics/"
},
{
title:"Write Your Paper",
link:"https://conferences.ieeeauthorcenter.ieee.org/write-your-paper/"
},
{
title:"Peer Review",
link:"https://conferences.ieeeauthorcenter.ieee.org/understand-peer-review/"
},
{
title:"Publishing Guide",
link:"https://conferences.ieeeauthorcenter.ieee.org/get-published/"
}

].map((item,index)=>(

<motion.a
key={item.title}
href={item.link}
target="_blank"
initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{
duration:.5,
delay:index*.08
}}
className="
group
rounded-[30px]
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-8
hover:border-cyan-400
hover:-translate-y-2
transition-all
duration-500
"
>

<h3 className="text-2xl font-bold text-white">

{item.title}

</h3>

<p className="mt-6 text-slate-400">

Open IEEE Resource →

</p>

</motion.a>

))}

</div>

</div>

</section>
{/* =========================================
        CAMERA READY
========================================= */}

<section className="relative py-28 bg-[#020817]">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-5xl font-black text-white">

Camera Ready

</h2>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

{[
"Prepare Final IEEE PDF",
"Run IEEE PDF eXpress",
"Complete Copyright",
"Register Conference",
"Upload Final Paper",
"Present at Conference",
"IEEE Xplore Submission",
"Publication"

].map((item,index)=>(

<motion.div

key={item}
initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{
duration:.5,
delay:index*.07
}}

className="
rounded-[30px]
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-8
text-center
hover:border-cyan-400
transition
"

>

<div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 mx-auto flex items-center justify-center text-cyan-300 font-black">

{index+1}

</div>

<p className="mt-8 text-white font-semibold">

{item}

</p>

</motion.div>

))}

</div>

</div>

</section>
<section className="py-28 bg-gradient-to-b from-[#071326] to-[#020817]">

<div className="max-w-5xl mx-auto px-6">

<div className="
rounded-[40px]
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
to-blue-500/10
backdrop-blur-2xl
p-16
text-center
">

<h2 className="text-5xl font-black text-white">

Ready to Submit?

</h2>

<p className="mt-8 text-slate-400 text-lg leading-8">

Ensure your manuscript follows every IEEE requirement,
passes plagiarism screening,
and complies with the conference policies before submission.

</p>

<button

onClick={()=>setShowSubmitPopup(true)}

className="
mt-12
rounded-full
bg-cyan-400
px-10
py-5
font-bold
text-[#020817]
hover:scale-105
transition-all
shadow-[0_0_40px_rgba(34,211,238,.35)]
"

>

Proceed to Submission

</button>

</div>

</div>

</section>
<Footer />
      </>
  );}