import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Replace with your actual paths
import LogoColor from '../assets/logos/logo.jpeg'; 
import LogoBW from '../assets/logos/logo-bw.jpeg'; 

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const logoContainerRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: onComplete,
        });
      },
    });

    // 1. Initial States
    gsap.set(wordRefs.current, { opacity: 0, y: 50 });
    gsap.set(logoContainerRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(fillRef.current, { clipPath: "inset(100% 0% 0% 0%)" });

    // 2. Power Words for Investors (Medical Billing Theme)
    tl.to(wordRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power4.out"
    })
    .to(wordRefs.current, {
      opacity: 0,
      scale: 1.5,
      filter: "blur(10px)",
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5
    });

    // 3. Logo Reveal (B&W first)
    tl.to(logoContainerRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    });

    // 4. LIQUID FILL (Bottom to Top)
    tl.to(fillRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 2.5,
      ease: "power2.inOut"
    });

    // 5. Final Glow
    tl.to(logoContainerRef.current, {
      filter: "drop-shadow(0 0 30px rgba(56, 176, 227, 0.4))",
      duration: 0.6
    });

    return () => tl.kill();
  }, [onComplete]);

  const words = ["ACCURACY", "EFFICIENCY", "INTEGRITY", "REVENUE"];

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0F1E] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38B0E3_1px,transparent_1px),linear-gradient(to_bottom,#38B0E3_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Words */}
      <div className="absolute flex flex-col items-center gap-4 z-20">
        {words.map((word, i) => (
          <div key={i} ref={el => wordRefs.current[i] = el} className="font-black text-5xl md:text-8xl italic text-white tracking-tighter uppercase leading-none">
            {word}
          </div>
        ))}
      </div>

      {/* Logo Container */}
      <div ref={logoContainerRef} className="relative w-64 h-64 md:w-[400px] md:h-[400px] z-10">
        <img src={LogoBW} alt="BW" className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale" />
        <div ref={fillRef} className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
          <img src={LogoColor} alt="Color" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;