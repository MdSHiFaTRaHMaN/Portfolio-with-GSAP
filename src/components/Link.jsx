'use client';

import React from 'react';
import { gotoSection } from '@/lib/functions';

export default function Link({ tag: Component = 'p', label, url, icon = false, className = '' }) {
  const handleClick = (e) => {
    if (url && url.startsWith('#')) {
      e.preventDefault();
      gotoSection(url);
    }
  };

  return (
    <Component className={`h-[2ch] w-fit overflow-y-hidden select-none max-md:h-5 ${className}`}>
      <a onClick={handleClick} href={url} className="group">
        <p className={`font-fancy -translate-y-0 transition-all duration-300 ease-in-out will-change-auto group-hover:translate-y-[-100%] ${icon ? 'flex' : ''}`}>
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              className="-scale-x-75 scale-y-75 fill-current"
            >
              <path d="M7.82834 17.2929L10.1213 19.586L8.70709 21.0001L4 16.2929L8.7071 11.5858L10.1213 13L7.82844 15.2929L18 15.2928L17.9999 3H19.9999L20 16.2928C20 16.8451 19.5523 17.2928 19 17.2928L7.82834 17.2929Z"></path>
            </svg>
          )}
          {label}
        </p>
        <p className={`font-fancy transition-all duration-300 ease-in-out will-change-auto group-hover:translate-y-[-100%] ${icon ? 'flex' : ''}`}>
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              className="-scale-x-75 scale-y-75 fill-current"
            >
              <path d="M7.82834 17.2929L10.1213 19.586L8.70709 21.0001L4 16.2929L8.7071 11.5858L10.1213 13L7.82844 15.2929L18 15.2928L17.9999 3H19.9999L20 16.2928C20 16.8451 19.5523 17.2928 19 17.2928L7.82834 17.2929Z"></path>
            </svg>
          )}
          {label}
        </p>
      </a>
    </Component>
  );
}
