import { ChevronRight } from "lucide-react";

const tags = [
  "Clothing Sets",
  "Shorts & Skirts",
  "Blouses & Shirts",
  "Accessories",
  "Tshirts & Tops",
  "Sport Shoes",
  "Jean & Trousers",
  "Top & T-Shirts",
  "Clothing Sets",
  "Shorts & Skirts",
  "Blouses & Shirts",
  "Accessories",
];

export default function GiftBanner() {
  return (
    <section className="bg-[#F4694C] px-6 py-10 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: copy */}
        <div className="text-white md:max-w-xs">
          <p className="text-sm text-orange-50">Discover the perfect picks for every personality.</p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">
            You've Got The List, We've Got The gifts!
          </h2>
        </div>

        {/* Right: tag grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:flex-1">
          {tags.map((tag, i) => (
            <button
              key={`${tag}-${i}`}
              className="flex items-center justify-between gap-2 rounded-full border border-white/70 px-4 py-2 text-xs font-medium text-white transition hover:bg-white hover:text-orange-500"
            >
              {tag}
              <ChevronRight size={14} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}