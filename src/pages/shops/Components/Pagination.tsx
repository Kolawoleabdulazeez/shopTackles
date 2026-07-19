import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-orange-400 hover:text-orange-500 disabled:opacity-40 dark:border-gray-700"
      >
        <ChevronLeft size={14} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-8 w-8 items-center justify-center rounded border text-sm ${
            page === currentPage
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-orange-400 hover:text-orange-500 disabled:opacity-40 dark:border-gray-700"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}