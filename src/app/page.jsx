'use client';

import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import LoadingScreen from '@/components/design/LoadingScreen';
import SamsungError from '@/components/design/SamsungError';
import Cursor from '@/components/design/Cursor';
import Nav from '@/components/common/Nav';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Marquee from '@/components/design/Marquee';
import Works from '@/components/sections/Works';
import AboutMe from '@/components/sections/AboutMe';
import People from '@/components/sections/People';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/design/Footer';

export default function Home() {
  const [isSamsungBrowser, setIsSamsungBrowser] = useState(false);
  const lenisRef = useRef(null);
  const noiseRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSamsung = /samsung/i.test(navigator.userAgent);
      setIsSamsungBrowser(isSamsung);

      const lenis = new Lenis({
        duration: 0.8,
      });

      window.lenis = lenis;
      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      document.body.classList.add('stop-scrolling');

      const timeoutId = setTimeout(() => {
        requestAnimationFrame(raf);
      }, 2000);

      const handleResize = () => {
        if (noiseRef.current) {
          noiseRef.current.style.height = `${window.innerHeight * 2}px`;
          noiseRef.current.style.width = `${window.innerWidth}px`;
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
        lenis.destroy();
      };
    }
  }, []);

  const handleLockScroll = (isLocked) => {
    if (lenisRef.current) {
      if (isLocked) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  };

  return (
    <div id="app" className="relative min-h-screen">
      <LoadingScreen />

      {isSamsungBrowser && <SamsungError />}

      {/* Noise filter SVG background */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <svg
          className="h-[150vh] w-full object-cover object-center"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="1"
              stitchTiles="stitch"
            />
            <feBlend mode="screen" />
          </filter>
          <rect ref={noiseRef} className="size-full" filter="url(#noise)" opacity="0.15" />

          <filter id="noise2">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="1"
              stitchTiles="stitch"
            />
            <feBlend mode="screen" />
          </filter>
          <rect
            className="size-full"
            filter="url(#noise2)"
            opacity="-0.88"
          />
        </svg>
      </div>

      <Cursor />
      <Nav onLockScroll={handleLockScroll} />

      <main className="relative min-h-full">
        <Hero />
        <div className="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]">
          <Services />
          <Marquee />
          <Works />
        </div>

        <AboutMe />
        <People />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
