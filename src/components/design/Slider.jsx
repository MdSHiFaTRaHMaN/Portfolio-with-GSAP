'use client';

import React, { useState, useEffect } from 'react';
import { esmail, mohammad } from '@/lib/images';
import Button from '../common/Button';
import { textSplitterIntoChar } from '@/lib/functions';
import gsap from 'gsap';

export default function Slider() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const [index, setIndex] = useState(0);
  const [canClick, setCanClick] = useState(true);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowWidth < 640;

  const people = [
    {
      quote:
        'Collaborating with Hetari on multiple projects has been a true pleasure. His exceptional skills, attention to detail, and commitment to quality consistently made him an invaluable asset to the team.',
      author: 'Mohammad AL-Sulami',
      position: 'Front-End Developer',
      tags: ['Web Development', 'Animation', 'UI/UX'],
      profile: mohammad,
    },
    {
      quote:
        'Working with Ebraheem on the Axon website has been an exceptional experience. His invaluable support and dedication were crucial in bringing this project to life. Thank you, Ebraheem!',
      author: 'Esmail Atta',
      position: 'Founder of Axon',
      tags: ['Web Development', 'SEO'],
      profile: esmail,
    },
  ];

  const computedQuote = textSplitterIntoChar(`" ${people[index].quote} "`);

  const animateTextTransition = (direction) => {
    const translateY = direction === 'up' ? '-100%' : '0%';
    gsap.to('#quote-text .letters', {
      translateY,
      duration: 0.5,
      stagger: 0.001,
      ease: 'power1.inOut',
    });
  };

  const animateQuoteAuthorTransition = (direction, onCompleteFunc) => {
    const translateX = direction === 'left' ? '-50%' : '0%';
    const opacity = direction === 'left' ? 0 : 1;
    gsap.to(['#quote-author', '#quote-tags'], {
      translateX,
      opacity,
      duration: 0.5,
      ease: 'power1.inOut',
      onComplete: () => {
        if (onCompleteFunc) onCompleteFunc();
      },
    });
  };

  const animateCurrentQuoteIndex = (direction, onCompleteFunc) => {
    const translateY = direction === 'up' ? '-100%' : '0%';
    gsap.to(['#current-index'], {
      translateY,
      duration: 0.5,
      ease: 'power1.inOut',
      onComplete: () => {
        if (onCompleteFunc) onCompleteFunc();
      },
    });
  };

  const animateQuoteOverlay = (newIndex, onCompleteFunc) => {
    gsap.to('#quote-overlay', {
      translateY: '0%',
      duration: 0.7,
      ease: 'power4.inOut',
      onComplete: () => {
        setIndex(newIndex);
        if (onCompleteFunc) onCompleteFunc();

        gsap.to('#quote-overlay', {
          translateY: '-100%',
          duration: 0.7,
          ease: 'power4.inOut',
          onComplete: () => {
            gsap.set('#quote-overlay', { translateY: '100%' });
            setCanClick(true);
          },
        });
      },
    });
  };

  const changeQuote = (newIndex) => {
    animateTextTransition('up');
    animateQuoteAuthorTransition('left');
    animateQuoteOverlay(newIndex, () => {
      setTimeout(() => {
        animateTextTransition('zero');
      }, 25);
      animateCurrentQuoteIndex('zero');
      animateQuoteAuthorTransition('right');
    });
    animateCurrentQuoteIndex('up', () => {
      gsap.set(['#current-index'], {
        y: '100%',
      });
    });
  };

  const clickNext = () => {
    if (!canClick) return;
    setCanClick(false);
    let newIndex = (index + 1) % people.length;
    if (newIndex < people.length) changeQuote(newIndex);
  };

  const clickPrev = () => {
    if (!canClick) return;
    setCanClick(false);
    const newIndex = (index - 1 + people.length) % people.length;
    changeQuote(newIndex);
  };

  useEffect(() => {
    if (!isSmallScreen) {
      gsap.set(['#quote-text .letters', '#current-index'], {
        translateY: 0,
      });
      gsap.set('#quote-overlay', {
        translateY: '100%',
      });
    }
  }, [isSmallScreen]);

  return (
    <div
      id="slider"
      className="column-gap relative mt-[10%] grid w-full grid-cols-12 gap-2 max-md:min-h-svh lg:h-[85svh]"
    >
      {!isSmallScreen ? (
        <>
          <div className="columns-gap relative col-span-full flex flex-col max-lg:h-fit lg:col-span-6 lg:h-full">
            <div>
              <p
                id="quote-text"
                className="heading-3 mb-14 min-h-36 max-w-[30ch] font-semibold md:min-h-fit md:max-w-full md:leading-none lg:min-h-36 lg:max-w-[30ch] lg:leading-normal"
                dangerouslySetInnerHTML={{ __html: computedQuote }}
              ></p>
              <div id="quote-author" className="heading-6 mb-6 font-semibold">
                <p>{people[index].author}</p>
                <p className="text-flax-smoke-400">{people[index].position}</p>
              </div>
              <div id="quote-tags" className="flex gap-3">
                {people[index].tags.map((i) => (
                  <p
                    key={i}
                    className="border-flax-smoke-500 text-flax-smoke-600 rounded-full border px-3 uppercase"
                  >
                    {i}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative flex h-full items-end justify-between">
              <div className="heading-5 flex w-2/12 items-center gap-3 overflow-clip">
                <p id="current-index" className="-translate-y-full will-change-transform">
                  {index + 1}
                </p>
                <p className="h-0.5 w-full bg-black"></p>
                <p>{people.length}</p>
              </div>
              <div className="lg:absolute lg:inset-0 lg:-bottom-10 lg:w-full lg:will-change-scroll">
                <div className="sticky top-[90%] flex place-content-end gap-3 lg:will-change-scroll">
                  <Button label="Prev" onClick={clickPrev} />
                  <Button label="Next" onClick={clickNext} />
                </div>
              </div>
            </div>
          </div>

          <div className="columns-gap relative order-first col-span-full flex h-[60vh] w-full items-start justify-center overflow-clip max-sm:order-last lg:order-last lg:col-span-6 lg:h-full">
            <img
              className={`relative z-10 size-full rounded-lg object-cover object-center mix-blend-screen brightness-90 grayscale lg:h-[85svh] ${index !== 0 ? 'hidden' : ''
                }`}
              src={people[0].profile}
              alt=""
            />
            <img
              className={`relative z-10 size-full rounded-lg object-cover object-center mix-blend-screen brightness-90 grayscale lg:h-[85svh] ${index !== 1 ? 'hidden' : ''
                }`}
              src={people[1].profile}
              alt=""
            />
            <div
              id="quote-overlay"
              className="bg-flax-smoke-500 absolute inset-0 z-50 rounded-lg"
            ></div>
          </div>
        </>
      ) : (
        <div className="col-span-full">
          {people.map((p, i) => (
            <div key={i} className="mt-10 grid w-full grid-cols-5 items-start sm:grid-cols-4">
              <div className="columns-gap heading-2 relative col-span-1 flex h-full flex-col leading-none font-bold">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <div className="col-span-3">
                <div className="columns-gap flex w-full flex-col gap-y-4">
                  <img
                    className="aspect-square size-full rounded-md object-cover object-center mix-blend-screen brightness-90 grayscale"
                    src={p.profile}
                    alt=""
                  />

                  <p className="heading-4 mt-4 max-w-[25ch] leading-none font-semibold">
                    " {p.quote} "
                  </p>

                  <div className="heading-6 mt-4 font-semibold">
                    <p className="">{p.author}</p>
                    <p className="text-flax-smoke-400">{p.position}</p>
                  </div>

                  <div className="flex max-w-60 flex-wrap gap-3 leading-[200%] uppercase">
                    {p.tags.map((tag) => (
                      <p
                        key={tag}
                        className="border-flax-smoke-500 text-flax-smoke-600 rounded-full border px-3 text-nowrap uppercase"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
