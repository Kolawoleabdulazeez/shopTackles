import { useState } from "react";
import { useDispatch } from "react-redux";
import { Star, Heart, Eye, ShoppingCart } from "lucide-react";
import QuickViewModal from "./QuickViewModal";
import { addToCart } from "@/features/cartSlice";

export type Product = {
  id: number;
  category: "men" | "women" | "kids" | "accessories";
  name: string;
  brand: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  size: string;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    category: "men",
    name: "Men's Louis Vuitton Round Neck Sweater",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 2912,
    size: "XL",
    image: "/Data1.svg",
    images: ["/Data1.svg", "/Data1.svg", "/Data1.svg"],
    description:
      "Suitable for long and short riding, night riding, mild cross country, and short distance racing cycling. 3D and seamless cut to reduce the body rubbing, more comfortable and fitness.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Grey"],
  },
  {
    id: 2,
    category: "accessories",
    name: "Men's Louis Vuitton Round Tote Bag",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 1842,
    size: "One Size",
    image: "/Data2.svg",
    images: ["/images/product-2.jpg", "/images/product-2.jpg", "/images/product-2.jpg"],
    description:
      "A woven leather tote with a gold-tone chain strap. Spacious main compartment, structured base, and a soft caramel tone that pairs with everything.",
    sizes: ["One Size"],
    colors: ["Tan", "Black"],
  },
  {
    id: 3,
    category: "men",
    name: "Men's Louis Vuitton Round Neck Trousers",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 1204,
    size: "M",
    image: "/Data3.svg",
    images: ["/images/product-3.jpg", "/images/product-3.jpg", "/images/product-3.jpg"],
    description:
      "Tailored trousers in a soft, breathable fabric with a striped detail. Classic fit through the hip and thigh with a tapered leg.",
    sizes: ["S", "M", "L"],
    colors: ["Black/White", "Navy"],
  },
  {
    id: 4,
    category: "men",
    name: "Men's Louis Vuitton Round Neck T-Shirt",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 2912,
    size: "XL",
    image: "/Data4.svg",
    images: ["/images/product-4.jpg", "/images/product-4.jpg", "/images/product-4.jpg"],
    description:
      "Suitable for long and short riding, night riding, mild cross country, and short distance racing cycling. 3D and seamless cut to reduce the body rubbing, more comfortable and fitness. The armpit of the jersey adopt a whole piece special mesh material, sweat absorption, breathable and quick drying! Classic 3 pockets at the back, easy for holding items. Reflective strip at the back to ensure night riding safety. Silicone band can prevent skin allergy and the cloth updide during riding very well. Customized zipper, had passed thousands of times test on crack and stuck during riding. Material: Metal, Resin, Leather, Polymer & Cotton.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Mustard", "Black", "White"],
  },
  {
    id: 5,
    category: "men",
    name: "Men's Louis Vuitton Round Neck Knit Sweater",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 985,
    size: "L",
    image: "/Data5.svg",
    images: ["/images/product-5.jpg", "/images/product-5.jpg", "/images/product-5.jpg"],
    description:
      "A ribbed knit sweater in heather grey. Relaxed fit, ribbed cuffs and hem, soft wool-blend yarn for everyday layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Charcoal"],
  },
  {
    id: 6,
    category: "men",
    name: "Men's Louis Vuitton Round Canvas Sneakers",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 1367,
    size: "42",
    image: "/Data6.svg",
    images: ["/images/product-6.jpg", "/images/product-6.jpg", "/images/product-6.jpg"],
    description:
      "Classic canvas lace-up sneakers with a cushioned rubber sole. Lightweight, breathable, and built for everyday wear.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Navy", "Black"],
  },
  {
    id: 7,
    category: "women",
    name: "Women's Louis Vuitton Round Neck Sweatshirt",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 1521,
    size: "M",
    image: "/Data7.svg",
    images: ["/images/product-7.jpg", "/images/product-7.jpg", "/images/product-7.jpg"],
    description:
      "An oversized cream sweatshirt with embroidered lettering. Soft fleece interior, dropped shoulders, ribbed hem and cuffs.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Grey"],
  },
  {
    id: 8,
    category: "accessories",
    name: "Men's Louis Vuitton Round Neck Tee Set",
    brand: "louis vuitton",
    price: 200,
    oldPrice: 260,
    rating: 4,
    reviews: 764,
    size: "M",
    image: "/Data8.svg",
    images: ["/images/product-8.jpg", "/images/product-8.jpg", "/images/product-8.jpg"],
    description:
      "A two-pack of essential crewneck tees in soft combed cotton. Pre-shrunk, tagless, and finished with a clean crew collar.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
  { label: "Accessories", value: "accessories" },
];

export default function OurCategories() {
  const [activeTab, setActiveTab] = useState("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered =
    activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
            OUR CATEGORIES
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 dark:text-gray-400">
            Handpicked pieces across men's, women's, kids', and accessories, refreshed
            every season so there's always something new to find.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded px-4 py-2 text-xs font-medium uppercase tracking-wide transition ${
                activeTab === tab.value
                  ? "bg-[#F4694C] text-white"
                  : "text-gray-600 hover:text-orange-500 dark:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {filtered.map((product) => (
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

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView: () => void;
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className="group">
      <div
        className="relative h-48 overflow-hidden rounded bg-gray-200 bg-cover bg-center dark:bg-gray-800"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute bottom-0 left-0  right-0 flex translate-y-full items-center justify-center gap-2  opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-gray-900/95">
          <span className="rounded border  border-gray-300  bg-white/95 px-2 py-2 text-[10px] font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200">
            {product.size}
          </span>
       <div className="rounded border bg-white/95  border-gray-300 p-1 text-gray-700 hover:text-orange-500 dark:border-gray-600 dark:text-gray-200 ">
           <button
            aria-label="Color"
            className="h-4 w-4 rounded-full border bg-black border-gray-300 b"
          />
       </div>
          <button
            aria-label="Add to wishlist"
            className="rounded border bg-white/95 px-2 py-2 border-gray-300 p-1 text-gray-700 hover:text-orange-500 dark:border-gray-600 dark:text-gray-200"
          >
            <Heart size={13} />
          </button>
          <button
            aria-label="Quick view"
            onClick={onQuickView}
            className="rounded border bg-white/95 px-2 py-2 border-gray-300 p-1 text-gray-700 hover:text-orange-500 dark:border-gray-600 dark:text-gray-200"
          >
            <Eye size={13} />
          </button>
          <button
            aria-label="Add to cart"
            onClick={handleAddToCart}
            className="rounded border bg-white/95 px-2 py-2 border-gray-300 p-1 text-gray-700 hover:text-orange-500 dark:border-gray-600 dark:text-gray-200"
          >
            <ShoppingCart size={13} />
          </button>
        </div>
      </div>

      <p className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span>{product.brand}</span>
        <span className="flex text-orange-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} fill={i < product.rating ? "currentColor" : "none"} />
          ))}
        </span>
      </p>

      <p className="mt-1 truncate text-sm text-gray-800 dark:text-gray-200">
        {product.name.length > 26 ? `${product.name.slice(0, 26)}...` : product.name}
      </p>

      <p className="mt-1 text-sm">
        <span className="mr-2 text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
        <span className="font-medium text-orange-500">${product.price.toFixed(2)}</span>
      </p>
    </div>
  );
}