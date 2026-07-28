import newTownHero from "../assets/image/file_00000000dec082089d9e0120159cef66.png";

export default function Countdown() {
  return (
    <section className="w-full bg-[#FAF7F2] m-0 p-0 overflow-hidden leading-none">
  <img
    src={newTownHero}
    alt="New Town Kolkata"
    className="
      w-[92%]
      max-w-[1600px]
      mx-auto
      h-auto
      object-contain
    "
  />
</section>
  );
}