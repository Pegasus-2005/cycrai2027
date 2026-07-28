


import iem from "../assets/image/IEM_Logo2019.png";
import ieee_kol from "../assets/image/IEEE_kol_logo.png";
import ieee_cs from "../assets/image/ieee_cs_kolkata_sec.png";
import ieee_sb from "../assets/image/IEEE_SB_logo_white.png";

export default function TopBar() {
  return (
    <div className="bg-[#150005] border-b border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap justify-center items-center gap-6">

        <img
          src={ieee_kol}
          alt="IEEE"
          className="h-8 object-contain"
        />

        <img
          src={ieee_cs}
          alt="IEEE Computer Society"
          className="h-8 object-contain"
        />

        <img
          src={ieee_sb}
          alt="IEEE Student Branch"
          className="h-8 object-contain"
        />

        <img
          src={iem}
          alt="Institute Of Engineering and Management Kolkata"
          className="h-8 object-contain"
        />

      </div>
    </div>
  );
}