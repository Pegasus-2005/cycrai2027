// import { FaWhatsapp } from "react-icons/fa";
// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-28 px-6 overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #051024 0%, #0B1E3A 45%, #081B33 100%)",
//       }}
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>

//       <div className="relative max-w-5xl mx-auto text-center">

//         {/* Heading */}
//         <p className="text-[#FFD700] uppercase tracking-[4px] font-semibold">
//           Need Assistance?
//         </p>

//         <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
//           Contact Us
//         </h2>

//         <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>

//         {/* Contact Card */}
//         <div
//           className="
//             mt-16
//             bg-white/10
//             backdrop-blur-xl
//             border border-white/10
//             rounded-3xl
//             p-10
//             shadow-2xl
//           "
//         >

//           <h3 className="text-3xl font-bold text-white">
//             CYCRAI 2027
//           </h3>

//           <p className="mt-4 text-gray-300 text-lg">
//             Institute of Engineering and Management, Kolkata
//           </p>

//           <p className="text-gray-400">
//             University Campus (Newtown), Kolkata, West Bengal, India
//           </p>

//           {/* Email */}
//           <div className="mt-10">
//             <p className="text-[#FFD700] font-semibold uppercase tracking-wider">
//               Email
//             </p>

//             <p className="mt-2 text-xl text-white">
//                paulpritam417@gmail.com
//             </p>
//           </div>

//           {/* WhatsApp */}
//           <div className="mt-8">
//             <p className="text-[#FFD700] font-semibold uppercase tracking-wider">
//               WhatsApp Support
//             </p>

//             <p className="mt-2 text-xl text-white">
//               7863986430
//             </p>
//           </div>

//           {/* Important Badge */}
//           <div
//             className="
//               mt-5
//               inline-flex
//               items-center
//               gap-3
//               px-6
//               py-3
//               rounded-full
//               bg-[#FFD700]/15
//               border border-[#FFD700]/30
//               text-white
//               font-semibold
//               text-lg
//             "
//           >
//             <div className="flex items-center justify-center gap-2 text-gray-600">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 32 32"
//     className="w-5 h-5"
//     fill="#25D366"
//   >
//     <path d="M16 3C8.8 3 3 8.8 3 16c0 2.8.9 5.4 2.4 7.6L3 29l5.6-2.3c2.1 1.3 4.6 2 7.4 2 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.4c-2.4 0-4.7-.7-6.7-2l-.5-.3-3.3 1.4 1.4-3.2-.3-.5c-1.4-2-2.1-4.3-2.1-6.8 0-6 4.9-10.9 10.9-10.9S26.9 10 26.9 16s-4.9 10.4-10.9 10.4zm6-7.8c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.8-1.8.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.5 3.9 1.7.7 2.4.8 3.2.7.5-.1 1.8-.7 2-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/>
//   </svg>

//   <p className="text-white">
//     For queries, kindly reach us on WhatsApp.
//   </p>
// </div>
            
//           </div>

//           {/* Small Note */}
//           <p className="mt-6 text-gray-400 text-sm">
//             For conference-related queries, registration assistance,
//             paper submission support and general information,
//             kindly contact us via WhatsApp or Email.
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020817] py-28 scroll-mt-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

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
            Contact & Support
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
            Get in Touch
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
            Have questions regarding paper submission, registration,
            accommodation, or conference participation? Our organizing
            committee is here to assist you throughout your CYCRAI 2027
            journey.
          </p>

        </div>

        {/* Contact Card */}

        <div
          data-aos="zoom-in"
          className="
            rounded-3xl
            border
            border-cyan-400/20
            bg-[#071326]/70
            backdrop-blur-xl
            p-10
            shadow-[0_0_40px_rgba(34,211,238,0.12)]
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}

<div>

  <h3 className="text-3xl font-bold text-white">
    CYCRAI 2027
  </h3>

  <p className="mt-4 text-slate-300 text-lg leading-8">
    Institute of Engineering and Management (IEM), Kolkata proudly
    welcomes delegates, researchers, academicians, industry
    professionals and students from around the world to CYCRAI
    2027.
  </p>

  <div className="mt-10 space-y-6">

    {/* Email */}

    <div
      className="
        flex
        items-start
        gap-5
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#020817]/60
        p-6
      "
    >

      <div
        className="
          h-14
          w-14
          rounded-xl
          bg-cyan-500/15
          flex
          items-center
          justify-center
          text-cyan-300
          text-2xl
        "
      >
        <FaEnvelope />
      </div>

      <div>

        <p className="text-cyan-300 uppercase tracking-wider text-sm">
          Email Support
        </p>

        <p className="mt-2 text-white text-lg break-all">
          paulpritam417@gmail.com
        </p>

      </div>

    </div>

    {/* WhatsApp */}

    <div
      className="
        flex
        items-start
        gap-5
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#020817]/60
        p-6
      "
    >

      <div
        className="
          h-14
          w-14
          rounded-xl
          bg-cyan-500/15
          flex
          items-center
          justify-center
          text-cyan-300
          text-2xl
        "
      >
        <FaWhatsapp />
      </div>

      <div>

        <p className="text-cyan-300 uppercase tracking-wider text-sm">
          WhatsApp Support
        </p>

        <p className="mt-2 text-white text-lg">
          +91 78639 86430
        </p>

      </div>

    </div>

    {/* Venue */}

    <div
      className="
        flex
        items-start
        gap-5
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#020817]/60
        p-6
      "
    >

      <div
        className="
          h-14
          w-14
          rounded-xl
          bg-cyan-500/15
          flex
          items-center
          justify-center
          text-cyan-300
          text-2xl
        "
      >
        <FaMapMarkerAlt />
      </div>

      <div>

        <p className="text-cyan-300 uppercase tracking-wider text-sm">
          Conference Venue
        </p>

        <p className="mt-2 text-white">
          Institute of Engineering and Management
        </p>

        <p className="text-slate-400">
          University Campus, New Town,
          Kolkata, West Bengal, India
        </p>

      </div>

    </div>

  </div>

</div>

{/* Right Side */}

<div>

  <div
    className="
      rounded-3xl
      border
      border-cyan-400/20
      bg-[#020817]/70
      backdrop-blur-xl
      p-8
      shadow-[0_0_30px_rgba(34,211,238,0.12)]
    "
  >

    <div
      className="
        inline-flex
        items-center
        gap-3
        px-5
        py-2
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-400/30
        text-cyan-300
        font-semibold
      "
    >
      <FaWhatsapp />
      Conference Support
    </div>

    <h3 className="mt-6 text-3xl font-bold text-white">
      Need Immediate Assistance?
    </h3>

    <p className="mt-5 text-slate-300 leading-8 text-lg">
      Our organizing committee is available to assist you with
      paper submission, registration, accommodation, visa invitation
      letters, presentation guidelines, and other conference-related
      queries.
    </p>

    {/* Quick Support Features */}

    <div className="mt-8 space-y-4">

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Paper Submission Assistance
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Registration Support
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Presentation & Schedule Queries
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Accommodation & Travel Information
      </div>

    </div>

    {/* CTA Buttons */}

    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="mailto:paulpritam417@gmail.com"
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
        Email Us
      </a>

      <a
        href="https://wa.me/917863986430"
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
        Chat on WhatsApp
      </a>

    </div>

    {/* Support Badge */}

    <div
      className="
        mt-10
        rounded-2xl
        border
        border-cyan-400/20
        bg-cyan-500/10
        p-5
      "
    >
      <p className="text-cyan-300 font-semibold">
        Support Availability
      </p>

      <p className="mt-2 text-slate-300">
        We aim to respond to all conference-related queries within
        <span className="font-semibold text-white"> 24–48 hours.</span>
      </p>
    </div>

  </div>

</div>

</div>
</div>.
{/* Bottom Note */}

<div
  data-aos="fade-up"
  className="
    mt-16
    text-center
    rounded-3xl
    border
    border-cyan-400/20
    bg-[#071326]/50
    backdrop-blur-xl
    p-8
  "
>

  <h3 className="text-2xl font-bold text-white">
    We Look Forward to Welcoming You to CYCRAI 2027
  </h3>

  <p className="mt-4 text-slate-300 max-w-3xl mx-auto leading-8">
    Join researchers, academicians, industry experts, and innovators
    from across the globe to exchange ideas, present groundbreaking
    research, and shape the future of Cyber Security, Artificial
    Intelligence, and Responsible Innovation.
  </p>

</div>

</div>

</section>
  );
}