'use client';

import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiShopify,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';

const techStack = [
  {
    name: 'React',
    category: 'Frontend',
    icon: FaReact,
    accentColor: '#61DAFB',
    accentBorder: 'hover:border-[#61DAFB]/60 hover:shadow-[0_0_20px_rgba(97,218,251,0.25)] hover:text-[#61DAFB]',
  },
  {
    name: 'Next.js',
    category: 'Full-Stack',
    icon: SiNextdotjs,
    accentColor: '#FFFFFF',
    accentBorder: 'hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:text-white',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: SiMongodb,
    accentColor: '#47A248',
    accentBorder: 'hover:border-[#47A248]/60 hover:shadow-[0_0_20px_rgba(71,162,72,0.25)] hover:text-[#47A248]',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: SiExpress,
    accentColor: '#E0E0E0',
    accentBorder: 'hover:border-white/60 hover:shadow-[0_0_20px_rgba(224,224,224,0.25)] hover:text-white',
  },
  {
    name: 'Firebase',
    category: 'Cloud / BaaS',
    icon: SiFirebase,
    accentColor: '#FFCA28',
    accentBorder: 'hover:border-[#FFCA28]/60 hover:shadow-[0_0_20px_rgba(255,202,40,0.25)] hover:text-[#FFCA28]',
  },
  {
    name: 'Shopify',
    category: 'E-Commerce',
    icon: SiShopify,
    accentColor: '#95BF47',
    accentBorder: 'hover:border-[#95BF47]/60 hover:shadow-[0_0_20px_rgba(149,191,71,0.25)] hover:text-[#95BF47]',
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    icon: FaGithub,
    accentColor: '#FFFFFF',
    accentBorder: 'hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:text-white',
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    icon: SiNodedotjs,
    accentColor: '#339933',
    accentBorder: 'hover:border-[#339933]/60 hover:shadow-[0_0_20px_rgba(51,153,51,0.25)] hover:text-[#339933]',
  },
  {
    name: 'Tailwind',
    category: 'Styling',
    icon: SiTailwindcss,
    accentColor: '#06B6D4',
    accentBorder: 'hover:border-[#06B6D4]/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:text-[#06B6D4]',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: SiJavascript,
    accentColor: '#F7DF1E',
    accentBorder: 'hover:border-[#F7DF1E]/60 hover:shadow-[0_0_20px_rgba(247,223,30,0.25)] hover:text-[#F7DF1E]',
  },
];

export default function TechExperience() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        <span className="heading-6 text-flax-smoke-300/85 tracking-wider uppercase font-semibold">
          ( EXPERIENCE & STACK )
        </span>
        <div className="h-[1px] flex-1 bg-flax-smoke-500/20 hidden sm:block" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center p-3 rounded-xl border border-flax-smoke-500/20 bg-[#121211]/90 backdrop-blur-md transition-all duration-300 cursor-pointer hover:-translate-y-1 ${tech.accentBorder}`}
            >
              <div className="text-flax-smoke-300 group-hover:scale-110 transition-transform duration-300 text-2xl sm:text-3xl mb-1.5">
                <Icon />
              </div>
              <span className="text-xs sm:text-sm font-medium text-flax-smoke-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-flax-smoke-400/70 uppercase tracking-wider font-mono mt-0.5">
                {tech.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
