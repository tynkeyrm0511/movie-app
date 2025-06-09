import GooeyNav from "./reactbits/GooeyNav";
import TiltedCard from "./reactbits/TiltedCard";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";

export default function Header() {
  const items = [
    { label: "TRANG CHỦ", href: "#" },
    { label: "THỂ LOẠI", href: "#" },
    { label: "YÊU THÍCH", href: "#" },
  ];
  return (
    <div className="flex items-center justify-center p-10 bg-zinc-900/30 backdrop-blur-sm gap-2 items-center">
      <img src={Logo1} />
      <img src={Logo2} />
      <GooeyNav
        items={items}
        particleCount={20}
        particleDistances={[90, 10]}
        particleR={500}
        initialActiveIndex={0}
        animationTime={100}
        timeVariance={1000}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
      <div>
        <div class="relative">
          <input
            type="text"
            placeholder="Tìm kiếm"
            class="glass bg-white/10 border border-darkblue text-aliceblue placeholder-white/20 px-4 py-2 rounded-full w-29 focus:w-100 transition-width duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-aliceblue"
          />
          <svg
            class="absolute right-3 top-2.5 w-5 h-5 text-aliceblue pointer-events-none"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
