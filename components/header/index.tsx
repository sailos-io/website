'use client';

import { HeaderLinks } from '@/app/layout.config';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'fumadocs-core/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { GetStartedButton } from '../ui/shiny-button';

export default function Header({ lang }: { lang: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled(latest > 20);
  });

  return (
    <div
      className={cn(
        'fixed top-0 z-50 w-full',
        hasScrolled ? 'bg-[#EBF2FF] shadow-header' : '',
      )}
    >
      <nav className={cn('custom-container-header relative text-black')}>
        <div className={cn('flex w-full justify-between py-[10px]')}>
          <div className="flex items-center md:gap-x-9">
            <Link
              href={'/'}
              aria-label={siteConfig.name}
              title={siteConfig.name}
              className="flex items-center gap-2 font-bold"
            >
              <Image
                alt={siteConfig.name}
                src="logo.svg"
                className="h-7 w-7"
                width={28}
                height={28}
              />
              <span className="hidden text-xl font-bold md:block">
                {siteConfig.name}
              </span>
            </Link>
            <div className="hidden items-center gap-x-5 text-sm font-medium lg:flex">
              {HeaderLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.url}
                  className="rounded-md px-2 py-1 hover:bg-[#0306070D]"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 text-sm font-medium lg:flex">
            <GetStartedButton />
          </div>

          {/* phone menu */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>

            {isMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  aria-hidden="true"
                />
                <div className="absolute left-0 top-0 z-50 w-full">
                  <div className="bg-[#EBF2FF] px-4 py-3">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <Link
                          href="/"
                          aria-label={siteConfig.name}
                          title={siteConfig.name}
                          className="inline-flex items-center"
                        >
                          <Image
                            alt={siteConfig.name}
                            src="/logo.svg"
                            className="h-8 w-8"
                            width={32}
                            height={32}
                          />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-950">
                            {siteConfig.name}
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="font-norma tracking-wide transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <X />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      {HeaderLinks.map((link) => (
                        <Link
                          key={link.text}
                          href={link.url}
                          className="rounded-md px-2 py-1 hover:bg-[#0306070D]"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
