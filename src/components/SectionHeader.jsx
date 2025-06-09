import Lottie from "lottie-react";
import VariableProximity from "../components/reactbits/VariableProximity";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({ label, to }) {
  const containerRef = useRef(null);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        
        <div ref={containerRef} className="relative">
          <VariableProximity
            label={label}
            className="variable-proximity-demo text-3xl"
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </div>
      <div className="w-full h-px mx-4 bg-slate-600/50 flex-1" />
      <Link to={to} className="text-aliceblue text-xl">
        See more
      </Link>
    </div>
  );
}
