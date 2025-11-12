import React from 'react'
import { useEffect, useRef } from "react";

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const binary = "01";
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.042)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
for (let i = 0; i < drops.length; i++) {
  const text = binary[Math.floor(Math.random() * binary.length)];

  const x = i * fontSize;
  const y = drops[i] * fontSize;

  ctx.fillStyle = "#10f8109d";
  ctx.shadowColor = "#20c70342";
  ctx.shadowBlur = 12;
  ctx.fillText(text, x, y);
  ctx.shadowBlur = 0;

  if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
    drops[i] = Math.random() * -30;
  }

  drops[i] += 0.8;
}}
    const interval = setInterval(draw,100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed -z-100 w-full h-full bg-black"
    />
  );
}


export default Background