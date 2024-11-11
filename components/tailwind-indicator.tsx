'use client';

export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-auto w-auto items-center justify-center rounded-full bg-gray-800 p-1 font-mono text-xs text-white">
      <div className="block sm:hidden">xs (&lt;640px)</div>
      <div className="hidden sm:block md:hidden">sm (≥640px)</div>
      <div className="hidden md:block lg:hidden">md (≥768px)</div>
      <div className="hidden lg:block xl:hidden">lg (≥1024px)</div>
      <div className="hidden xl:block 2xl:hidden">xl (≥1280px)</div>
      <div className="hidden 2xl:block">2xl (≥1536px)</div>
    </div>
  );
}
