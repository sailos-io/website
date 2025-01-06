import { source } from '@/lib/source';
import { createI18nSearchAPI } from 'fumadocs-core/search/server';
import { i18n } from '@/lib/i18n';

const createChineseTokenizer = () => {
  const normalizationCache = new Map<string, string>();

  return {
    language: 'zh-cn',
    normalizationCache,
    tokenize: (
      raw: string,
      language?: string,
      prop?: string,
      withCache?: boolean,
    ) => {
      if (!raw) return [];

      const chars = Array.from(raw);
      const tokens = new Set<string>();

      chars.forEach((char) => {
        const trimmed = char.trim();
        if (trimmed && !/^[0-9a-zA-Z\s]$/.test(trimmed)) {
          tokens.add(char);
        }
      });

      for (let i = 0; i < chars.length - 1; i++) {
        const bigram = chars[i] + chars[i + 1];
        if (!/^[0-9a-zA-Z\s]+$/.test(bigram)) {
          tokens.add(bigram);
        }
      }

      for (let i = 0; i < chars.length - 2; i++) {
        const trigram = chars[i] + chars[i + 1] + chars[i + 2];
        if (!/^[0-9a-zA-Z\s]+$/.test(trigram)) {
          tokens.add(trigram);
        }
      }

      tokens.add(raw);

      return Array.from(tokens);
    },
  };
};

export const { GET } = createI18nSearchAPI('advanced', {
  i18n,
  indexes: source.getLanguages().flatMap((entry) =>
    entry.pages.map((page) => ({
      title: page.data.title,
      description: page.data.description,
      structuredData: page.data.structuredData,
      id: page.url,
      url: page.url,
      locale: entry.language,
    })),
  ),
  localeMap: {
    'zh-cn': {
      tokenizer: createChineseTokenizer(),
      search: {
        tolerance: 1,
        threshold: 0.1,
      },
    },
  },
});
