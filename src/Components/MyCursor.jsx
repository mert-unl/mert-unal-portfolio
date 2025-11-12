import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    document.body.style.cursor = "none";


  const style = document.createElement("style");
  style.innerHTML = `* { cursor: none !important; }`;
  document.head.appendChild(style);


    const MAX_TRAIL = 30; 

    const move = (e) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }

      if (trailsRef.current.length >= MAX_TRAIL) {
        const oldTrail = trailsRef.current.shift();
        oldTrail.remove();
      }

      const trail = document.createElement("div");
      trail.className =
        "fixed w-2.5 h-2.5 rounded-full bg-green-400 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-48";
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trail.style.opacity = "0.5";
      trail.style.transition = "all 0.5s linear";
      document.body.appendChild(trail);

      trailsRef.current.push(trail);

      setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "translate(-55%, -50%) scale(0.4)";
      }, 100);

      setTimeout(() => {
        if (trailsRef.current.includes(trail)) {
          trail.remove();
          trailsRef.current = trailsRef.current.filter((t) => t !== trail);
        }
      }, 100); 
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "auto";
      trailsRef.current.forEach((t) => t.remove());
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 text-3xl font-medium text-center  text-green-400   pointer-events-none -translate-x-1/2 -translate-y-2/3 z-1000"
    >0</div>
  );
}
