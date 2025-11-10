import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState([50]);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-wave group">
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-transform group-hover:scale-x-150"
        style={{ left: `${sliderPosition[0]}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-muted-foreground"></div>
            <div className="w-0.5 h-4 bg-muted-foreground"></div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
        <Slider
          value={sliderPosition}
          onValueChange={setSliderPosition}
          max={100}
          step={1}
          className="cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
