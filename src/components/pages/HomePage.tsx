"use client";

import Statistics from "@/components/overview/Statistics";
import Header from "@/components/overview/Header";
import ActivitySection from "@/components/overview/ActivitySection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className={"px-8 py-6"}>
        <Statistics />
        <ActivitySection />
      </div>
    </main>
  );
}
