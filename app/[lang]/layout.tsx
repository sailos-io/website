import { locales } from '@/lib/i18n';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <I18nProvider
      locale={params.lang}
      locales={locales}
      translations={
        {
          zh: {
            search: '搜索',
          },
        }[params.lang]
      }
    >
      <RootProvider
        theme={{
          forcedTheme: 'light',
          defaultTheme: 'light',
          enabled: false,
          enableSystem: false,
        }}
      >
        {children}
      </RootProvider>
    </I18nProvider>
  );
}
