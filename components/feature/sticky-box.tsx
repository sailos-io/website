'use client';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { AnimateElement } from '../ui/animated-wrapper';
import StickyScroll from '../ui/sticky-scroll-reveal';
import { useState, useEffect } from 'react';

const content = [
  {
    title: 'Cloud Development Environment',
    description:
      'Skip the hassle of creating duplicate workspaces. Share code, configurations, and test data with your teammates. Enhance workflows, accelerate development, and boost efficiency while collaborating—all in one cloud platform from Sailos Devbox.',
    content: (
      <div className="relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-1.svg"
          alt="Version control"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box"
        />
      </div>
    ),
    icon: (
      <Image
        src="/images/sticky-icon-1.svg"
        alt="icon"
        width={40}
        height={40}
      />
    ),
  },
  {
    title: 'Streamline Your WorkFlow',
    description:
      'Experience the power of a unified environment for development, testing, and production. Automate your setup and effortlessly connect to your favorite local IDEs, unlocking a smoother workflow and unparalleled efficiency',
    content: (
      <div className="relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-2.svg"
          alt="Version control"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box"
        />
      </div>
    ),
    icon: (
      <Image
        src="/images/sticky-icon-2.svg"
        alt="icon"
        width={40}
        height={40}
      />
    ),
  },
  {
    title: 'Effortless Continuous Delivery',
    description:
      'Deliver applications with ease, no Docker or Kubernetes expertise required. Just specify the version, and let Devbox handle all the heavy lifting, including building containers.',
    content: (
      <div className="relative aspect-[700/450] max-h-[400px] w-full rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-3.svg"
          alt="Version control"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box"
        />
      </div>
    ),
    icon: (
      <Image
        src="/images/sticky-icon-3.svg"
        alt="icon"
        width={40}
        height={40}
      />
    ),
  },
];
export function StickyBox() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative mt-32">
      {isLargeScreen && isClient ? (
        <AnimateElement type="slideUp">
          <StickyScroll content={content} />
        </AnimateElement>
      ) : (
        <div className="space-y-16">
          {content.map((item, index) => (
            <AnimateElement
              key={index}
              type="slideUp"
              className="flex flex-col gap-8"
            >
              <div className="flex gap-8">
                <div className="flex size-8 flex-shrink-0 items-start rounded-lg bg-[#F4FCFF] p-[6px] sm:size-14">
                  {item.icon}
                </div>
                <div>
                  <h2 className="mb-4 text-sm font-bold sm:text-2xl">
                    {item.title}
                  </h2>
                  <div className="mb-4 text-xs text-[#4E6185] sm:text-[18px]">
                    {item.description}
                  </div>
                </div>
              </div>
              {item.content}
            </AnimateElement>
          ))}
        </div>
      )}
    </div>
  );
}
