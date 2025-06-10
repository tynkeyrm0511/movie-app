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
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            
            <div className="flex items-center">
              <Lottie animationData={icon} className="h-10 "/>
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
          </AnimatedContent>
        </div>
      </div>
      <div className="w-full h-px mx-4 bg-slate-600/50 flex-1" />
      <Link to={to} className="text-aliceblue ">
        Xem thêm
      </Link>
    </div>
  );
}
