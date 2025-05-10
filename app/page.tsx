"use client";

import dynamic from 'next/dynamic';
import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import Education from "@/components/main/education";
import Experience from "@/components/main/experience";
import { Projects } from "@/components/main/projects";

// Dynamically import the Encryption component with no SSR
const Encryption = dynamic(() => import('@/components/main/encryption'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Education />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
