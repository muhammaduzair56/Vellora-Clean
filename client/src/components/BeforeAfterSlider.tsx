import { useRef, useState } from "react";

// Vellora Clean style reminder: restrained navy/mint control, tactile interaction, clear Before/After labels.
type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  initialPosition?: number;
};

export default function BeforeAfterSlider({ before, after, beforeAlt, afterAlt, initialPosition = 50 }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (dragging.current) updatePosition(event.clientX);
  };

  const stopDragging = () => { dragging.current = false; };

  return (
    <div className="comparison-slider" ref={trackRef} style={{ "--slider-position": `${position}%` } as React.CSSProperties}>
      <img className="comparison-slider-image comparison-slider-after" src={after} alt={afterAlt} />
      <div className="comparison-slider-before-wrap"><img className="comparison-slider-image" src={before} alt={beforeAlt} /></div>
      <span className="comparison-label comparison-label-before">Before</span>
      <span className="comparison-label comparison-label-after">After</span>
      <button className="comparison-slider-handle" type="button" aria-label="Drag to compare before and after cleaning" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(position)} role="slider" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={stopDragging} onPointerCancel={stopDragging} onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); setPosition((value) => Math.max(0, value - 5)); } if (event.key === "ArrowRight") { event.preventDefault(); setPosition((value) => Math.min(100, value + 5)); } if (event.key === "Home") { event.preventDefault(); setPosition(0); } if (event.key === "End") { event.preventDefault(); setPosition(100); } }}>
        <span className="comparison-slider-grip" aria-hidden="true"><i /><i /><i /></span>
      </button>
    </div>
  );
}
