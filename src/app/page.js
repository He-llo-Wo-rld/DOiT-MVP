"use client";

import { ActionButtons, HeroSection, WelcomeMessage } from "@/components/Home";
import { useLayoutContext } from "@/context/LayoutContext";
import { useEffect } from "react";

export default function HomePage() {
  const { setTitle } = useLayoutContext();

  useEffect(() => {
    setTitle("DOiT MVP");
  }, [setTitle]);

  return (
    <HeroSection>
      <WelcomeMessage />
      <ActionButtons />
    </HeroSection>
  );
}
