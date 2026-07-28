
import uem from "../assets/image/UEM_Blue.png";
import iem from "../assets/image/IEM_Logo2019.png";
import ieee_kol from "../assets/image/IEEE_kol_logo.png";
import ieee_cs from "../assets/image/ieee_cs_kolkata_sec.png";
import ieee_sb from "../assets/image/IEEE_SB_logo_white.png";
import iedc from "../assets/image/iedc_trans.png";

export default function LogoStrip() {
  return (
    <div className="w-full px-4 mt-16 md:mt-20">
      <div
        className="
          w-full
          max-w-[1000px]
          mx-auto

          bg-[rgba(250,244,225,0.85)]
          backdrop-blur-xl

          border border-[#D4AF37]/40
          rounded-2xl

          px-6 md:px-6
          py-0.1

          shadow-[0_8px_30px_rgba(212,175,55,0.2)]
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-2 md:gap-6
          "
        >
          {/* Logo 1 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={uem}
              alt="University Of Engineering and Management Kolkata"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 2 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_kol}
              alt="IEEE Kolkata Section"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 3 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_cs}
              alt="IEEE Computer Society Kolkata Section"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 4 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_sb}
              alt="IEEE Student Branch"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 5 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={iedc}
              alt="IEDC"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 6 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={iem}
              alt="Institute Of Engineering and Management Kolkata"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
