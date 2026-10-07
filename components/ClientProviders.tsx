'use client';

import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false });

export default function ClientProviders() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <CustomCursor />
    </>
  );
}
