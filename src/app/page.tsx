import React from 'react';
import Header from '@/components/uhuru/header';
import Hero from '@/components/uhuru/hero';
import Footer from '@/components/uhuru/footer';
import HomeClient from '@/components/uhuru/home-client';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <HomeClient />
      </main>
      <Footer />
    </div>
  );
}
