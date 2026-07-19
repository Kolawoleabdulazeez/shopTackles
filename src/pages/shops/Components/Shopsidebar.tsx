import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { kidsFashion, menFashion, topBrands, womenFashion, accessories as accessoryItems } from "@/utils/data";


const categoryTree = [
  { label: "Men's Fashion", items: menFashion },
  { label: "Women's Fashion", items: womenFashion },
  { label: "Kid's Fashion", items: kidsFashion },
  { label: "Accessories", items: accessoryItems },
];

const brandCounts: Record<string, number> = {
  Addidas: 1206,
  Nike: 325,
  Puma: 204,
  Fendi: 140,
  "Louis Vuitton": 450,
  Dior: 302,
  Gucci: 158,
  Citizen: 96,
};

const brands = topBrands.map((name) => ({ name, count: brandCounts[name] ?? 0 }));

const colors = [
  { name: "Black", hex: "#111111", count: 306 },
  { name: "Blue", hex: "#2563eb", count: 182 },
  { name: "Red", hex: "#dc2626", count: 209 },
  { name: "Yellow", hex: "#eab308", count: 75 },
  { name: "Brown", hex: "#92400e", count: 30 },
  { name: "Green", hex: "#16a34a", count: 153 },
  { name: "Cyan", hex: "#06b6d4", count: 76 },
];

const sizes = [
  { label: "XXXL", count: 206 },
  { label: "XXL", count: 223 },
  { label: "L", count: 209 },
  { label: "M", count: 96 },
  { label: "S", count: 146 },
  { label: "XS", count: 219 },
];

const discounts = ["60% or more", "50% or more", "40% or more", "30% or more", "20% or more", "10% or more"];

const tags = ["New Arrivals", "Best Sellers", "Trending", "On Sale"];

export default function ShopSidebar() {
  const [expandedCategory, setExpandedCategory] = useState("Men's Fashion");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  return (
    <aside className="w-full space-y-6 text-sm">
      {/* Category */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Category
        </h3>
        <div className="mt-3 space-y-1">
          {categoryTree.map((cat) => (
            <div key={cat.label}>
              <button
                onClick={() => setExpandedCategory(expandedCategory === cat.label ? "" : cat.label)}
                className="flex w-full items-center justify-between py-1 text-left font-medium text-gray-800 dark:text-gray-200"
              >
                {cat.label}
                {cat.items.length > 0 &&
                  (expandedCategory === cat.label ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  ))}
              </button>
              {expandedCategory === cat.label && cat.items.length > 0 && (
                <ul className="ml-2 space-y-1 border-l border-gray-200 pl-3 dark:border-gray-700">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Brand
        </h3>
        <ul className="mt-3 space-y-2">
          {brands.map((brand) => (
            <li key={brand.name} className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="accent-orange-500" />
                {brand.name}
              </label>
              <span className="text-xs text-gray-400">({brand.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Price
        </h3>
        <div className="mt-4 space-y-3">
          <input
            type="range"
            min={0}
            max={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-orange-500"
          />
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
          <button className="w-full rounded bg-orange-500 py-2 text-xs font-medium text-white hover:bg-orange-600">
            Filter
          </button>
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Color
        </h3>
        <ul className="mt-3 space-y-2">
          {colors.map((color) => (
            <li key={color.name} className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="accent-orange-500" />
                <span
                  className="h-3 w-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </label>
              <span className="text-xs text-gray-400">({color.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Size */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Size
        </h3>
        <ul className="mt-3 space-y-2">
          {sizes.map((size) => (
            <li key={size.label} className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="accent-orange-500" />
                {size.label}
              </label>
              <span className="text-xs text-gray-400">({size.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Discount */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Discount Percentage
        </h3>
        <ul className="mt-3 space-y-2">
          {discounts.map((discount) => (
            <li key={discount}>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="accent-orange-500" />
                {discount}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Tags
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded border border-gray-300 px-3 py-1 text-xs text-gray-600 hover:border-orange-400 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}