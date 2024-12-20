'use client';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { AnimateElement } from '../ui/animated-wrapper';
import StickyScroll from '../ui/sticky-scroll-reveal';
import { useState, useEffect } from 'react';

const content = [
  {
    title: 'Instant Cloud Workspaces',
    subtitle: 'Development at the speed of thought',
    description:
      "Launch production-ready development environments in seconds. Share code, configs and data seamlessly with your team - all powered by Sailos's enterprise-grade cloud platform.",
    content: (
      <div className="group relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-1.svg"
          alt="Cloud development workspace interface showing collaborative features"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    ),
    icon: (
      <div
        role="img"
        aria-label="Cloud Development Icon"
        className="transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="/images/sticky-icon-1.svg"
          alt="Cloud workspace icon"
          width={40}
          height={40}
        />
      </div>
    ),
  },
  {
    title: 'Unified Development Pipeline',
    subtitle: 'Seamless from code to production',
    description:
      'Accelerate your workflow with automated environment setup, seamless IDE integration, and unified development, testing and production environments.',
    content: (
      <div className="group relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-2.svg"
          alt="Unified development pipeline visualization showing workflow stages"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    ),
    icon: (
      <div
        role="img"
        aria-label="Workflow Icon"
        className="transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="/images/sticky-icon-2.svg"
          alt="Workflow optimization icon"
          width={40}
          height={40}
        />
      </div>
    ),
  },
  {
    title: 'Effortless Continuous Delivery',
    subtitle: 'Deploy with confidence',
    description:
      'Deploy applications with confidence - no container expertise needed. Let Devbox handle versioning, container builds and orchestration while you focus on coding.',
    content: (
      <div className="group relative aspect-[700/450] max-h-[400px] w-full rounded-lg bg-[#FAFCFF] shadow-sticky-box">
        <Image
          fill
          src="/images/sticky-box-3.svg"
          alt="Container deployment workflow showing automated delivery process"
          className="h-full w-full rounded-lg object-cover shadow-sticky-box transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    ),
    icon: (
      <div
        role="img"
        aria-label="Deployment Icon"
        className="transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="/images/sticky-icon-3.svg"
          alt="Continuous delivery icon"
          width={40}
          height={40}
        />
      </div>
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
        <div className="space-y-16 px-4 sm:px-6">
          {content.map((item, index) => (
            <AnimateElement
              key={index}
              type="slideUp"
              className="flex flex-col gap-8"
            >
              <div className="flex gap-6 sm:gap-8">
                <div className="flex size-10 flex-shrink-0 items-start rounded-lg bg-[#F4FCFF] p-2 sm:size-14 sm:p-[6px]">
                  {item.icon}
                </div>
                <div>
                  <h2 className="mb-2 text-base font-bold leading-tight sm:mb-3 sm:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mb-3 text-sm text-blue-600 sm:text-base">
                    {item.subtitle}
                  </p>
                  <div className="text-sm leading-relaxed text-[#4E6185] sm:text-lg">
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
