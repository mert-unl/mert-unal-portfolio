import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);

  const [cursorContent, setCursorContent] = useState("0");

  useEffect(() => {
    document.body.style.cursor = "none";
    
    const style = document.createElement("style");

    style.innerHTML = `* { cursor: none !important; } .pointer-events-none { cursor: none !important; }`;
    document.head.appendChild(style);

    const MAX_TRAIL = 20;

  const move = (e) => {
  const { clientX: x, clientY: y } = e;

  if (cursorRef.current) {
    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  }

  const targetElement = document.elementFromPoint(x, y);

  let isPointer = false;

  if (targetElement) {
    const computed = window.getComputedStyle(targetElement);

    if (computed.cursor === "pointer") isPointer = true;

    const clickableTags = ["BUTTON", "A"];
    if (clickableTags.includes(targetElement.tagName)) isPointer = true;

    if (typeof targetElement.onclick === "function") isPointer = true;

    if (targetElement.classList.contains("cursor-pointer")) isPointer = true;

    if (targetElement.getAttribute("role") === "button") isPointer = true;
  }
      setCursorContent(isPointer ? "1" : "0");

      if (trailsRef.current.length >= MAX_TRAIL) {
        const oldTrail = trailsRef.current.shift();
        oldTrail.remove();
      }

      const trail = document.createElement("div");

      const trailBg = isPointer ? "bg-green-500" : "bg-green-500";
      
      trail.className = `fixed w-2.5 h-2.5 rounded-full ${trailBg} pointer-events-none -translate-x-1/2 -translate-y-1/2 z-48`;
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
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`md:fixed w-6 h-6 text-3xl font-medium text-center ${
        cursorContent === "1" ? "text-green-500  scale-120 font-bold" : "text-green-500"
      } pointer-events-none -translate-x-1/2 -translate-y-2/3 z-1000 transition-transform duration-150`}
    >
      {cursorContent}
    </div>
  );
}