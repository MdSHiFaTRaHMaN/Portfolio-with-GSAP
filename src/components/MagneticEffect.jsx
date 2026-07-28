'use client';

import React, { useEffect, useRef } from 'react';
import { activateMagneto, resetMagneto } from '@/lib/animations';

export default function MagneticEffect({
  divId,
  textId,
  magnetoStrengthVal = 70,
  magnetoTextStrengthVal = 50,
  children,
}) {
  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  useEffect(() => {
    const magnetoEl = document.getElementById(divId);
    const magnetoTextEl = document.getElementById(textId);

    if (!magnetoEl || !magnetoTextEl) return;

    magnetoRef.current = magnetoEl;
    magnetoTextRef.current = magnetoTextEl;

    const handleMouseMove = (e) => {
      activateMagneto(
        e,
        magnetoRef,
        magnetoTextRef,
        magnetoStrengthVal,
        magnetoTextStrengthVal,
      );
    };

    const handleMouseLeave = () => {
      resetMagneto(magnetoRef, magnetoTextRef);
    };

    if (window.innerWidth > 700) {
      magnetoEl.addEventListener('mousemove', handleMouseMove);
      magnetoEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (magnetoEl) {
        magnetoEl.removeEventListener('mousemove', handleMouseMove);
        magnetoEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [divId, textId, magnetoStrengthVal, magnetoTextStrengthVal]);

  return <>{children}</>;
}
