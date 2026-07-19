import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 dark:shadow-none dark:ring-1 dark:ring-gray-800">
      {children}
    </div>
  );
}