'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { earthLottie, contact } from '@/lib/videos';
import Button from '../common/Button';
import Link from '../Link';
import { textSplitterIntoChar } from '@/lib/functions';
import { animateSplitText } from '@/lib/animations';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Contact() {
  const [makeItHappenHtml, setMakeItHappenHtml] = useState('');

  useEffect(() => {
    const text = "Let's Make it happen";
    setMakeItHappenHtml(textSplitterIntoChar(text));

    animateSplitText(
      '#make-it-happen .letters',
      '#make-it-happen',
      1.5,
      0.01,
      0
    );
  }, []);

  return (
    <section
      id="contact-section"
      className="relative min-h-svh w-full overflow-y-clip p-[4vh] select-none"
    >
      <div className="flex-center relative h-[92vh] w-full flex-col rounded-lg bg-black uppercase">
        <video
          className="absolute bottom-0 left-0 size-full rounded-lg object-cover object-bottom brightness-50"
          src={contact}
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="flex-center z-10 flex-col gap-y-10">
          <p className="heading-4 text-flax-smoke-300 max-w-[30ch] text-center font-mono">
            Your design is a masterpiece waiting to become alive.
          </p>
          <h3
            id="make-it-happen"
            className="heading-1 text-flax-smoke-200 max-w-[10ch] text-center leading-none"
            dangerouslySetInnerHTML={{ __html: makeItHappenHtml }}
          ></h3>
          <div className="mt-[5%] flex scale-150 items-center lg:scale-[1.5] xl:scale-[3] 2xl:scale-[3.5]">
            <Button label="Get in touch" url="https://wa.me/967775367671" />
          </div>
        </div>

        <div className="absolute bottom-5 flex w-full items-center justify-center px-5 md:justify-between">
          <div className="hidden md:flex">
            <div className="border-flax-smoke-300 relative border overflow-hidden w-24 h-24 flex items-center justify-center">
              <Lottie
                animationData={earthLottie}
                loop={true}
                autoplay={true}
                style={{ width: 100, height: 100 }}
              />
            </div>
            <div className="flex-center py border-flax-smoke-300 text-flax-smoke-300 w-fit flex-col border border-l-0 font-mono">
              <p className="border-flax-smoke-300 flex size-full items-center justify-start border-b pr-2 pl-1 font-bold">
                Working Globally
              </p>
              <p className="flex size-full items-center justify-start pr-2 pl-1">
                Available Sep '24
              </p>
            </div>
          </div>

          <div className="heading-6 text-flax-smoke-500 w-fit">
            <p className="w-full font-bold uppercase">For further inquiries</p>
            <Link
              className="text-flax-smoke-300 h-6 text-right font-medium tracking-wider lowercase"
              label="hetari4all@gmail"
              icon={true}
              url="mailto:hetari4all@gmail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
