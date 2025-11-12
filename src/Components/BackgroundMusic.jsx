import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    const audio = new Audio("/clubbedToDeath.mp3"); 
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const startAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  return (
    <div className="fixed top-10 left-10 z-100 flex  items-center gap-2 p-2  rounded-md">
      <label className="text-white text-sm">Ses:</label>
      <input
        type="range"
        min={0}
        max={0.40}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="accent-green-600"
      />
    </div>
  );
}
