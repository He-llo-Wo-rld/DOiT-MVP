"use client";

import { ActionButtons, HeroSection, WelcomeMessage } from "@/components/Home";
import { Layout } from "@/components/Layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection>
        <WelcomeMessage />
        <ActionButtons />
      </HeroSection>
    </Layout>
  );
}
