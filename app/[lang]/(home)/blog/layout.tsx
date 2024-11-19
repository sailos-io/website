import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

export default function BlogLayout({
  params,
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <div className="h-full">
      <Header lang={params.lang} />
      <div className="custom-container min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
