import React from 'react';
import { siteConfig } from '@/config/site';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { DiscordIcon, GithubIcon } from '../ui/icons';

interface FooterLinkColumnProps {
  children: React.ReactNode;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ children }) => (
  <div className="flex flex-col justify-center space-y-4">{children}</div>
);

interface FooterLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  className,
  children,
}) => (
  <Link
    href={href}
    className={cn(
      'hover:underline-decoration-4 hover:underline-color-[#005B9C] text-sm font-medium text-custom-secondary-text hover:text-[#005B9C] hover:underline hover:underline-offset-4',
      className,
    )}
  >
    {children}
  </Link>
);

const Footer = async () => {
  return (
    <div className="custom-container relative pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm lg:flex-row">
        <div>
          <div className="mb-4 mr-4 md:flex">
            <Link
              href={'/'}
              aria-label={siteConfig.name}
              title={siteConfig.name}
              className="flex items-center gap-2 font-bold"
            >
              <Image
                alt={siteConfig.name}
                src="/logo.svg"
                className="h-7 w-7"
                width={30}
                height={30}
              />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          <div className="mt-3 text-xs font-medium text-custom-secondary-text sm:text-sm">
            A cloud operating system based on the Kubernetes kernel
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 items-start gap-10 lg:mt-0">
          <FooterLinkColumn>
            <div className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline">
              Product
            </div>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <div className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline">
              Developer
            </div>
            <FooterLink href={siteConfig.links.github}>
              Private Deployment
            </FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <div className="text-base font-semibold uppercase text-black hover:text-black hover:no-underline">
              Support
            </div>
            <FooterLink href="#">About Us</FooterLink>
            {/* <FooterLink href="#">Contact Us</FooterLink> */}
          </FooterLinkColumn>
        </div>
      </div>

      <div className="mt-16 h-[1px] w-full bg-[#DDE7F7]"></div>
      <div className="flex justify-between pb-6 pl-2 pt-4">
        <div className="flex items-center space-x-2 text-[10px] font-normal text-custom-secondary-text md:text-sm">
          <FooterLink
            className="text-[10px] font-normal text-custom-secondary-text md:text-sm"
            href="/docs/msa/terms-of-service"
          >
            Terms of Service
          </FooterLink>
          <FooterLink
            className="text-[10px] font-normal text-custom-secondary-text md:text-sm"
            href="/docs/msa/privacy-policy"
          >
            Privacy Policy
          </FooterLink>
          <div>|</div>
          <div>Copyright © 2024 Sailos. All rights reserved.</div>
        </div>
        <div className="flex space-x-4">
          <Link
            className="flex size-8 items-center justify-center rounded-full bg-[#FAFCFF] object-center hover:bg-[#1118240D]"
            href={siteConfig.links.github}
            aria-label="GitHub"
          >
            <GithubIcon />
          </Link>

          <Link
            className="flex size-8 items-center justify-center rounded-full bg-[#FAFCFF] object-center hover:bg-[#1118240D]"
            href={siteConfig.links.discord}
            aria-label="Discord"
          >
            <DiscordIcon />
          </Link>
          <Link
            className="flex size-8 items-center justify-center rounded-full bg-[#FAFCFF] object-center hover:bg-[#1118240D]"
            href={siteConfig.links.twitter}
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 1200 1227"
              fill="none"
            >
              <g clip-path="url(#clip0_1_2)">
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="1200" height="1227" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
