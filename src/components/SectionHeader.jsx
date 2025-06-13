import Lottie from "lottie-react";
import VariableProximity from "../components/reactbits/VariableProximity";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedContent from './reactbits/AnimatedContent'


export default function SectionHeader({ label, to, icon }) {
  const containerRef = useRef(null);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div ref={containerRef} className="relative">
          <div className="flex items-center gap-1">
            <Lottie animationData={icon} className="h-15 " />
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
      </div>
      <div className="w-screen h-px mx-4 bg-slate-600/50 flex-1" />
      <Link to={to} className="text-aliceblue ">
        Xem thêm
      </Link>
    </div>
  );
}
