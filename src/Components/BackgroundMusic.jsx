import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.25);

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
    <div className="flex fixed flex-col  md:flex-row top-1 right-2   md:top-10 md:right-10 z-11  items-center gap-1 p-2  rounded-md">
      <label className="text-white text-sm">Ses:</label>
      <input
        type="range"
        min={0}
        max={0.50}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="accent-green-600 border-black  w-20  md:w-25"
      />
    </div>
  );
}
