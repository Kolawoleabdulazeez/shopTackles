import { Product, ProductCard } from "@/Component/Components/Ourcategories";
import QuickViewModal from "@/Component/Components/QuickViewModal";
import { useState } from "react";


const shopProducts: Product[] = Array.from({ length: 18 }, (_, i) => ({
  id: 200 + i,
  category: (["men", "women", "kids", "accessories"] as const)[i % 4],
  name: "Men's Louis Vuitton Round Neck T-Shirt",
  brand: "louis vuitton",
  price: 200 + (i % 5) * 20,
  oldPrice: 280 + (i % 5) * 20,
  rating: 4,
  reviews: 800 + i * 37,
  size: "M",
  image: `/Shop${i + 1}.svg`,
  images: [`/Shop${i + 1}.svg`, `/Shop${i + 1}.svg`, `/Shop${i + 1}.svg`],
  description:
    "A versatile piece from the collection, made from quality materials for everyday comfort and durability.",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White", "Grey"],
}));

export default function ShopProductGrid({ view }: { view: "grid" | "list" }) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <>
      <div
        className={
          view === "grid"
            ? "grid grid-cols-2 gap-6 sm:grid-cols-3"
            : "flex flex-col gap-4"
        }
      >
        {shopProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setQuickViewProduct(product)}
          />
        ))}
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </>
  );
}