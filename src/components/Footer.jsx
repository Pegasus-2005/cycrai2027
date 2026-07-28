
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/image/cycrai_logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020817] text-white border-t border-cyan-400/20">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[180px]" />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="CYCRAI 2027"
              className="h-16 transition-all duration-300 hover:scale-105"
            />

            <p className="mt-6 text-gray-300 leading-relaxed">
              CYCRAI 2027 is the flagship conference of the
              IEEE India Council, bringing together researchers,
              academicians, industry experts and innovators from
              across the globe.
            </p>
          </div>

                    {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#tracks"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Tracks
                </a>
              </li>

              <li>
                <a
                  href="#venue"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Venue
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                📍 Institute of Engineering and Management, Kolkata
              </p>

              <p>
                📧 paulpritam417@gmail.com
              </p>

              <p>
                💬 WhatsApp: 7863986430
              </p>

              <div
                className="
                  inline-flex
                  items-center
                  mt-4
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                  text-sm
                "
              >
                <div className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                    fill="#25D366"
                  >
                    <path d="M16 3C8.8 3 3 8.8 3 16c0 2.8.9 5.4 2.4 7.6L3 29l5.6-2.3c2.1 1.3 4.6 2 7.4 2 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.4c-2.4 0-4.7-.7-6.7-2l-.5-.3-3.3 1.4 1.4-3.2-.3-.5c-1.4-2-2.1-4.3-2.1-6.8 0-6 4.9-10.9 10.9-10.9S26.9 10 26.9 16s-4.9 10.4-10.9 10.4zm6-7.8c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.8-1.8.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1 2.8 4.5 3.9 1.7.7 2.4.8 3.2.7.5-.1 1.8-.7 2-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
                  </svg>

                  <p className="text-white">
                    For queries, kindly reach us on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
                {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20">
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-5
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-gray-400 text-sm">
            © CYCRAI 2027. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Hosted by Institute of Engineering and Management, Kolkata
          </p>

          {/* Developer Credits */}
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Designed & Developed by{" "}
            <a
              href="https://github.com/Pritam27112004"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-cyan-300
                hover:text-white
                transition-colors
                duration-300
                font-bold
                underline
                underline-offset-4
                decoration-cyan-400/40
                hover:decoration-white
              "
            >
              Pritam Paul
            </a>
          </p>

        </div>
      </div>

    </footer>
  );
}