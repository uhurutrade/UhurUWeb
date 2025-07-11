'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Features = dynamic(() => import('@/components/uhuru/features'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/uhuru/testimonials'), { ssr: false });
const ChatWidget = dynamic(() => import('@/components/uhuru/ChatWidget'), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <Features />
      <Testimonials />
      <ChatWidget />
    </>
  );
}
