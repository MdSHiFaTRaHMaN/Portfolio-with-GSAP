'use client';

import React from 'react';

export default function MyEnName({ className = '', id = 'svg-my-en-name' }) {
  const letters = ['S', 'I', 'F', 'A', 'T', 'R', 'A', 'H', 'M', 'A', 'N'];
  const xPositions = [0, 65, 90, 140, 210, 275, 355, 445, 520, 610, 685];

  return (
    <svg
      id={id}
      className={`w-full fill-flax-smoke-900 ${className}`}
      viewBox="0 0 760 95"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {letters.map((char, index) => (
          <text
            key={index}
            x={xPositions[index]}
            y="80"
            className="translate-y-full will-change-auto"
            style={{
              fontFamily: "'title', 'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '116px',
              letterSpacing: '0.02em',
            }}
          >
            {char}
          </text>
        ))}
      </g>
    </svg>
  );
}
