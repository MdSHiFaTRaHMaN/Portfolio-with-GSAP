'use client';

import React, { useState, useEffect } from 'react';
import MyName from '../design/MyName';
import Star from '../design/Star';
import Button from '../common/Button';
import { hero } from '@/lib/images';
import { getAvailableForWorkDate, textSplitterIntoChar } from '@/lib/functions';

export default function Hero() {
  const [whoAmIHtml, setWhoAmIHtml] = useState('');
  const [availableDate, setAvailableDate] = useState('');

  useEffect(() => {
    const rawText =
      'A freelance web developer, passionate about using modern technologies to deliver unique and scalable web solutions.';
    setWhoAmIHtml(textSplitterIntoChar(rawText));
    setAvailableDate(getAvailableForWorkDate());
  }, []);

  return (
    <section className="padding-x mb-[-100svh] py-0">
      <div
        id="hero"
        className="sticky top-0 flex min-h-svh w-full items-end pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
      >
        <div className="relative flex w-full flex-col items-center">
          <div className="w-full items-end overflow-clip">
            <div className="flex w-full items-start gap-10">
              <MyName />
              <Star id="star" className="hide-on-mobile translate-x-full" />
            </div>
          </div>

          <div className="lg:column-gap spacing-t grid w-full grid-cols-12 gap-y-6 sm:gap-y-0">
            <div className="col-span-12 flex flex-col items-start gap-6 sm:gap-14 sm:col-span-4">
              <div className="overflow-hidden">
                <svg
                  id="down-arrow"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.25"
                  viewBox="6 6 12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-6"
                  color="#8C8C73"
                  style={{ color: '#8c8c73' }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" y1="7" x2="17" y2="17"></line>
                  <polyline points="17 7 17 17 7 17"></polyline>
                </svg>
              </div>

              <p className="sr-only">
                A freelance developer, passionate about using modern
                technologies to deliver comprehensive solutions for your
                business.
              </p>
              <p
                id="whoAmI"
                className="who-am-i heading-5 w-full max-w-[30ch] overflow-clip leading-snug font-medium text-balance sm:max-w-[37ch] lg:text-start"
                dangerouslySetInnerHTML={{ __html: whoAmIHtml }}
              ></p>

              <div className="relative origin-left overflow-hidden scale-110 sm:scale-150">
                <div id="contact-btn" className="flex -translate-y-full">
                  <Button label="Get in touch" url="https://wa.me/8801724683220" />
                </div>
              </div>
            </div>

            <div
              id="profile-container"
              className="group relative col-span-6 sm:col-span-4 h-[220px] xs:h-[260px] max-w-lg flex-col rounded-xl select-none sm:h-full md:flex md:h-[50vh] overflow-hidden border border-flax-smoke-500/20 shadow-xl transition-all duration-500 hover:border-flax-smoke-500/40"
            >
              <div className="overlay bg-flax-smoke-50 absolute inset-0 z-2"></div>
              <img
                id="profile-img"
                src={hero}
                alt="Sifat Rahman web developer"
                className="size-full scale-95 rounded-xl object-cover object-[50%_35%] brightness-105 contrast-[1.08] grayscale transition-transform duration-700 ease-out group-hover:scale-100"
              />
            </div>

            <div className="relative col-span-6 sm:col-span-4 size-full overflow-clip text-end flex flex-col justify-end">
              <div
                id="available-for-work"
                className="flex translate-y-full flex-col items-end sm:absolute sm:right-0 sm:bottom-0"
              >
                <p className="text-xs sm:text-sm 3xl:text-base block leading-snug font-medium -tracking-tight uppercase text-flax-smoke-400">
                  Available for freelance work
                </p>
                <h3 className="text-2xl sm:text-4xl 3xl:heading-1 heading-1-alt font-fancy block leading-none font-bold -tracking-tight text-flax-smoke-200">
                  {availableDate}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-svh"></div>
    </section>
  );
}
