import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";

export default function ShopToolbar({
  view,
  onViewChange,
  resultCount,
}: {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
  resultCount: number;
}) {
  const [sort, setSort] = useState("popularity");

  return (
    <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onViewChange("grid")}
          aria-label="Grid view"
          className={`rounded border p-1.5 ${
            view === "grid"
              ? "border-orange-400 text-orange-500"
              : "border-gray-300 text-gray-500 dark:border-gray-700"
          }`}
        >
          <LayoutGrid size={16} />
        </button>
        <button
          onClick={() => onViewChange("list")}
          aria-label="List view"
          className={`rounded border p-1.5 ${
            view === "list"
              ? "border-orange-400 text-orange-500"
              : "border-gray-300 text-gray-500 dark:border-gray-700"
          }`}
        >
          <List size={16} />
        </button>
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded border border-gray-300 px-3 py-2 text-xs text-gray-700 focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
      >
        <option value="popularity">Sort by popularity</option>
        <option value="rating">Sort by average rating</option>
        <option value="newest">Sort by newest</option>
        <option value="price-low">Sort by price: low to high</option>
        <option value="price-high">Sort by price: high to low</option>
      </select>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Showing 1-{resultCount} of {resultCount} results
      </p>
    </div>
  );
}