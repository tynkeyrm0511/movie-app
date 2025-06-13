import { useState } from "react";
import GooeyNav from "./reactbits/GooeyNav";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "/" },
    { label: "Popular", href: "/popular-movies" },
    { label: "Top Rated	", href: "/top-rated" },
    { label: "Genres", href: "/genres" },
  ];

  return (
    <header className="sticky top-0 bg-black z-50 overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-900 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-1 p-2">
          <Link to="/">
            <img src={Logo1} />
          </Link>
          <Link to="/">
            <img src={Logo2} />
          </Link>
        </div>

        {/* Nav (chỉ hiện khi md+) */}
        <div className="hidden md:flex justify-center gap-6 flex-1">
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
        </div>

        {/* Search bar (ẩn ở mobile) */}
        <div className="flex justify-end flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="glass bg-white/10 border border-darkblue text-white placeholder-white/40 px-4 py-2 rounded-full w-32 focus:w-64 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-white pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
          </div>
        </div>

        {/* Hamburger Menu (chỉ hiện ở mobile) */}
        <div className="md:hidden flex justify-end flex-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu (mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 text-white flex flex-col items-center gap-4 py-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            TRANG CHỦ
          </Link>
          <Link to="/genres" onClick={() => setIsMenuOpen(false)}>
            THỂ LOẠI
          </Link>
          <Link to="/movies" onClick={() => setIsMenuOpen(false)}>
            PHIM LẺ
          </Link>
          <Link to="/tv-shows" onClick={() => setIsMenuOpen(false)}>
            PHIM BỘ
          </Link>
          <Link to="/favourites" onClick={() => setIsMenuOpen(false)}>
            YÊU THÍCH
          </Link>
        </div>
      )}
    </header>
  );
}
