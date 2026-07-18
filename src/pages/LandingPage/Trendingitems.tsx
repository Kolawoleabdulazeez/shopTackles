import { useState } from "react";

import QuickViewModal from "./QuickViewModal";
import { Product, ProductCard } from "./Ourcategories";

const TrendingProducts: Product[] = [
  {
    id: 101,
    category: "women",
    name: "Women's Louis Vuitton Round Neck Robe",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 1104,
    size: "M",
    image: "/Trending1.svg",
    images: ["/Trending1.svg", "/Trending1.svg", "/Trending1.svg"],
    description:
      "A relaxed, floor-length robe in soft toweling fabric. Belted waist, wide sleeves, and a hood for an easy post-shower layer.",
    sizes: ["S", "M", "L"],
    colors: ["White", "Grey"],
  },
  {
    id: 102,
    category: "men",
    name: "Men's Louis Vuitton Round Neck Jacket",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 1567,
    size: "L",
    image: "/Trending2.svg",
    images: ["/Trending2.svg", "/Trending2.svg", "/Trending2.svg"],
    description:
      "A lightweight olive jacket layered over a navy tee. Relaxed fit through the shoulders with a full-zip front.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black"],
  },
  {
    id: 103,
    category: "men",
    name: "Men's Louis Vuitton Round Neck Fold Set",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 892,
    size: "M",
    image: "/Trending3.svg",
    images: ["/Trending3.svg", "/Trending3.svg", "/Trending3.svg"],
    description:
      "A folded essentials set in soft cotton. Includes a crew tee and joggers in a matching charcoal tone.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "White"],
  },
  {
    id: 104,
    category: "accessories",
    name: "Men's Louis Vuitton Round Chronograph Watch",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 2341,
    size: "One Size",
    image: "/Trending4.svg",
    images: ["/Trending4.svg", "/Trending4.svg", "/Trending4.svg"],
    description:
      "A stainless steel chronograph watch with a link bracelet. Water resistant, sapphire crystal face, quartz movement.",
    sizes: ["One Size"],
    colors: ["Silver", "Black"],
  },
  {
    id: 105,
    category: "accessories",
    name: "Women's Louis Vuitton Round Strap Sandals",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 1029,
    size: "38",
    image: "/Trending5.svg",
    images: ["/Trending5.svg", "/Trending5.svg", "/Trending5.svg"],
    description:
      "Leather slide sandals with a cross-strap upper and cushioned footbed. Easy slip-on styling for warm days.",
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Navy", "Tan"],
  },
  {
    id: 106,
    category: "women",
    name: "Women's Louis Vuitton Round Neck Sweater",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 1345,
    size: "S",
    image: "/Trending6.svg",
    images: ["/Trending6.svg", "/Trending6.svg", "/Trending6.svg"],
    description:
      "A cropped ribbed sweater in soft white knit. Fitted through the body with long sleeves and a round neckline.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream"],
  },
  {
    id: 107,
    category: "accessories",
    name: "Louis Vuitton Round Aviator Sunglasses",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 763,
    size: "One Size",
    image: "/Trending7.svg",
    images: ["/Trending7.svg", "/Trending7.svg", "/Trending7.svg"],
    description:
      "Classic aviator sunglasses with a thin metal frame and gradient lenses. UV400 protection, spring hinges.",
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
  },
  {
    id: 108,
    category: "accessories",
    name: "Men's Louis Vuitton Round Dial Watch",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 280,
    rating: 4,
    reviews: 1876,
    size: "One Size",
    image: "/Trending8.svg",
    images: ["/Trending8.svg", "/Trending8.svg", "/Trending8.svg"],
    description:
      "A classic round-dial watch with a stainless steel case and leather strap. Minimalist face, date window at 3 o'clock.",
    sizes: ["One Size"],
    colors: ["White/Silver", "Black"],
  },
];

export default function TrendingItems() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
            Trending ITEMS
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 dark:text-gray-400">
            Browse the collection of our best selling and Trending products.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TrendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => setQuickViewProduct(product)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded border border-orange-400 px-6 py-2 text-sm font-medium text-orange-500 transition hover:bg-[#F4694C] hover:text-white">
            Shop Now
          </button>
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </section>
  );
}