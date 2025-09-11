"use client";

import { ActionButtons, HeroSection, WelcomeMessage } from "@/components/Home";

export default function HomePage() {
  return (
    <HeroSection>
      <WelcomeMessage />
      <ActionButtons />
    </HeroSection>
  );
}
