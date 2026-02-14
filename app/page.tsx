"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noScale, setNoScale] = useState(1);
  const [glitchStyle, setGlitchStyle] = useState({});

  const shrinkNo = () => {
    let count = 0;
    const interval = setInterval(() => {
      const randomX = Math.random() * 40 - 20;
      const randomY = Math.random() * 40 - 20;
      const skewX = Math.random() * 10 - 5;
      
      setGlitchStyle({
        transform: `translate(${randomX}px, ${randomY}px) skewX(${skewX}deg)`,
        filter: `brightness(100) drop-shadow(0 0 20px white) blur(10px)`,
      });
      
      count++;
      if (count > 6) {
        clearInterval(interval);
        setGlitchStyle({});
      }
    }, 25);

    setNoScale((prev) => Math.max(0, prev - 0.25));
  };

  if (answer) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center gradient-bg relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ mixBlendMode: "screen", opacity: 0.5 }}
        >
          <source src="/petals.mp4" type="video/mp4" />
        </video>
        <img
          src="/eminem.png"
          alt="Eminem throwing flowers"
          className="w-96 md:w-[32rem] rounded-2xl mb-10 relative z-10"
        />
        <h3 className="text-2xl md:text-4xl font-bold text-[#d63384] pixel-font relative z-10">
        I knew it, you are literally obsessed with me
        </h3>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center gradient-bg relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: "screen", opacity: 0.5 }}
      >
        <source src="/petals.mp4" type="video/mp4" />
      </video>
      <div style={glitchStyle} className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#d63384] mb-6 pixel-font">
          do you still love me?
        </h1>
        <p className="text-[#e891b0] mb-10 pixel-font text-xl">be honest</p>
        <div className="flex gap-6 items-center justify-center">
          <button
            onClick={() => setAnswer("yes")}
            className="neu-button font-bold text-2xl pixel-font"
          >
            Yes
          </button>
          {noScale > 0 && (
            <button
              onClick={shrinkNo}
              className="neu-button font-bold text-2xl pixel-font transition-all duration-300"
              style={{
                transform: `scale(${noScale})`,
                opacity: noScale,
              }}
            >
              No
            </button>
          )}
        </div>
        {noScale === 0 && (
          <p className="mt-6 text-[#d63384] pixel-font animate-pulse text-xl">
            shut up and say yes
          </p>
        )}
      </div>
    </main>
  );
}
