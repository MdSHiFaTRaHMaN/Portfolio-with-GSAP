'use client';

import React from 'react';
import MagneticEffect from './MagneticEffect';

export default function BurgerMenuBtn({ className = '', ...props }) {
  return (
    <MagneticEffect divId="magneto" textId="magnetoText">
      <div {...props} className={`fixed right-7 top-7 z-20 ${className}`}>
        <div
          id="magneto"
          className="flex-center size-14 cursor-pointer rounded-full bg-flax-smoke-300 brightness-90 ease-in-out lg:size-[4.5rem]"
        >
          <span
            class="w-[100%] text-center before:bg-flax-smoke-700 after:bg-flax-smoke-700"
            id="magnetoText"
          ></span>
        </div>
      </div>
    </MagneticEffect>
  );
}
