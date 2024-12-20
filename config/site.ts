import { SiteConfig } from '@/types';

export const domain = process.env.NEXT_PUBLIC_APP_URL || 'https://sailos.io';

export const siteConfig: SiteConfig = {
  name: 'Sailos',
  author: 'zjy365',
  description: 'sailos',
  keywords: ['sailos', 'Next.js'],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL || '',
    author: '',
  },
  links: {
    github: 'https://github.com/sailos-io/website',
    twitter: '',
    discord: 'https://discord.gg/cmUg8fDHwv',
  },
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.png?${new Date().getTime()}`,
};

export type AuthorData = {
  name: string;
  title: string;
  url: string;
  image_url: string;
};

export const blogAuthors: Record<string, AuthorData> = {
  zjy: {
    name: 'ZJY',
    title: 'ZJY',
    url: 'https://github.com/zjy365',
    image_url: 'https://avatars.githubusercontent.com/u/72259332?v=4',
  },
  yangchuansheng: {
    name: 'Carson Yang',
    title: 'Carson Yang',
    url: 'https://github.com/yangchuansheng',
    image_url: 'https://avatars.githubusercontent.com/u/15308462?v=4',
  },
};
