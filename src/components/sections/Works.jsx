'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { animateSplitText } from '@/lib/animations';
import { textSplitterIntoChar } from '@/lib/functions';
import { work1, work2, work3, work4, work5 } from '@/lib/videos';
import { workBg1, workBg2, workBg3, workBg4, workBg5 } from '@/lib/images';

export default function Works() {
  const [index, setIndex] = useState(0);
  const [selectedWorksHtml, setSelectedWorksHtml] = useState('');
  const videoRefs = useRef([]);

  const selectedWorksProps = [
    {
      name: 'Madar',
      category: 'Frontend',
      tags: ['Vue.js', 'Tailwind', 'Gsap'],
      videoSrc: work5,
      imageBg: workBg5,
      url: 'https://madar.services/',
      year: '2025',
    },
    {
      name: 'Iphone 15 Clone',
      category: 'Frontend & Animation & 3D',
      tags: ['Animation', '3D'],
      videoSrc: work2,
      imageBg: workBg2,
      url: 'https://github.com/Hetari/iphone15-pro-clone',
      year: '2024',
    },
    {
      name: 'Axon',
      category: 'Frontend & Documentation',
      tags: ['Vue.js', 'Tailwind', 'AI'],
      videoSrc: work3,
      imageBg: workBg3,
      url: 'https://github.com/Hetari/axon',
      year: '2024',
    },
    {
      name: 'Blogy',
      category: 'Frontend & Backend',
      tags: ['Vue.js', 'Laravel'],
      videoSrc: work4,
      imageBg: workBg4,
      url: 'https://github.com/Hetari/blog',
      year: '2023',
    },
    {
      name: 'Pyutube',
      category: 'CLI Tool & Cross Platform',
      tags: ['Python', 'CLI', 'Youtube'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://github.com/hetari/pyutube',
      year: '2024',
    },
  ];

  const cursorTimeline = useRef(null);

  useEffect(() => {
    cursorTimeline.current = gsap
      .timeline({ defaults: { duration: 0.25 } })
      .to(['#cursor', '#inner'], {
        scale: 1,
        opacity: 1,
      })
      .paused(true);
  }, []);

  const showCursor = () => {
    cursorTimeline.current?.play();
  };

  const hideCursor = () => {
    cursorTimeline.current?.reverse();
  };

  const createForwardTimeline = (i) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        setIndex(Math.min(i, selectedWorksProps.length - 1));
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });
    return tl;
  };

  const createBackwardTimeline = (i) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        setIndex(Math.max(i, 0));
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });
    return tl;
  };

  useEffect(() => {
    setSelectedWorksHtml(textSplitterIntoChar('Selected Works / ', true));

    const stopAllVideos = () => {
      videoRefs.current.forEach((video) => {
        if (video && !video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    stopAllVideos();

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          video.classList.remove('blur');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75,
    });

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0
    );

    const isSmall = window.innerWidth < 768;
    if (!isSmall) {
      gsap.utils.toArray('.work-card').forEach((div, i) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            start: 'top 25%',
            end: 'bottom 25%',
            scrub: 0.01,
            onLeaveBack: () => {
              gsap.to('#index', {
                yPercent: 100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createBackwardTimeline(i - 1);
                },
              });
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            gsap.to('#index', {
              yPercent: -100,
              duration: 0.3,
              ease: 'power4.inOut',
              onComplete: () => {
                createForwardTimeline(i + 1);
              },
            });
          },
        });
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="works" className="common-padding mb-20">
      <div className="flex flex-col">
        <h3
          id="selectedWorks"
          dangerouslySetInnerHTML={{ __html: selectedWorksHtml }}
          className="heading-1 text-start leading-none font-bold uppercase"
        ></h3>
        <p className="heading-1 text-flax-smoke-400 text-opacity-50 hidden w-4/5 text-end font-extrabold sm:block">
          ( {selectedWorksProps.length} )
        </p>

        <div
          id="selected-works-text"
          className="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
        >
          <p className="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2">
            ({' '}
            <span className="inline sm:hidden">
              {selectedWorksProps.length}{' '}
            </span>
            PROJECTS )
          </p>
          <p className="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7">
            Featured client projects that have been meticulously crafted with
            passion and purpose over the years.
          </p>
        </div>
      </div>

      <div className="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]">
        <div className="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex">
          <span className="font-title! relative -tracking-wider">0</span>
          <span
            id="index"
            className="font-title! relative -tracking-wider will-change-transform"
          >
            {index + 1}.
          </span>
        </div>
        <aside
          onMouseEnter={showCursor}
          onMouseLeave={hideCursor}
          className="relative col-span-full flex flex-col space-y-10 md:col-span-7"
        >
          {selectedWorksProps.map((work, i) => (
            <div key={i} className="work-card @container">
              <a className="group" target="_blank" href={work.url}>
                <div className="flex-center relative aspect-square overflow-clip rounded-lg">
                  <img
                    alt="work-background"
                    loading="lazy"
                    className="absolute size-full object-cover select-none"
                    src={work.imageBg}
                  />
                  <div className="flex-center z-10 aspect-4/3 size-full overflow-clip rounded-lg object-cover">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={work.videoSrc}
                      muted
                      autoPlay={false}
                      type="video/webm"
                      className="size-[80%] rounded-md object-contain blur transition-all duration-500 ease-in-out"
                    ></video>
                  </div>
                </div>
                <div>
                  <p className="heading-6 font-title! mt-[2%] mb-[1%] leading-none">
                    {work.category}
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <h3 className="heading-3 font-title! font-bold uppercase">
                      {work.name}
                    </h3>
                    <div className="flex gap-1.5 select-none">
                      {work.tags.map((tag) => (
                        <p
                          key={tag}
                          className="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
                        >
                          <span>{tag}</span>
                        </p>
                      ))}
                      <p className="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 hover:text-flax-smoke-300 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent">
                        <span>{work.year}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
