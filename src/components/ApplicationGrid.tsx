"use client";

import ApplicationCard from "@/components/ApplicationCard";

type Application = {
  title: string;
  description: string;
  animation: object;
  link: string;
};

interface ApplicationGridProps {
  applications: Application[];
}

export default function ProjectGrid({ applications }: ApplicationGridProps) {
  return (
    <main className="pt-20 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {applications.map((application, idx) => (
          <div
            key={idx}
            onClick={() => window.open(application.link, "_blank")}
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ApplicationCard {...application} />
          </div>
        ))}
      </div>
    </main>
  );
}
