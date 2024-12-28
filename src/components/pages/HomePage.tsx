"use client";

import Statistics from "@/components/overview/Statistics";
import Header from "@/components/overview/Header";
import ActivitySection from "@/components/overview/ActivitySection";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return await res.json();
    },
  });

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
