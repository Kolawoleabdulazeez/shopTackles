import { useState } from "react";
import { X, Star, Plus, Minus, ShoppingCart, Heart, Facebook, Twitter, Instagram } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { Product } from "./Ourcategories";


function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.378-.293 1.194-.333 1.361-.052.219-.174.265-.4.16-1.492-.694-2.424-2.874-2.424-4.625 0-3.769 2.738-7.229 7.898-7.229 4.147 0 7.372 2.955 7.372 6.901 0 4.116-2.595 7.431-6.199 7.431-1.211 0-2.349-.629-2.738-1.373l-.744 2.834c-.27 1.037-1 2.337-1.488 3.129C9.712 23.803 10.836 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
      })
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-3xl rounded-md bg-white p-6 dark:bg-gray-900 md:p-8">
        <p className="mb-4 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          View Product
        </p>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded bg-orange-400 text-white hover:bg-orange-500"
        >
          <X size={16} />
        </button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <div
              className="flex h-64 items-center justify-center rounded bg-gray-100 bg-contain bg-center bg-no-repeat dark:bg-gray-800"
              style={{ backgroundImage: `url(${product.images[activeImage]})` }}
            />
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 rounded border bg-gray-100 bg-contain bg-center bg-no-repeat dark:bg-gray-800 ${
                    activeImage === i ? "border-orange-400" : "border-transparent"
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h2>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
              <span className="text-base font-semibold text-orange-500">${product.price.toFixed(2)}</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-orange-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <a href="#" className="text-xs text-blue-600 underline dark:text-blue-400">
                ({product.reviews} verified ratings)
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300">Size</label>
                <select className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                  <option>- Select Size -</option>
                  {product.sizes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300">Color</label>
                <select className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                  <option>- Select Color -</option>
                  {product.colors.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center rounded border border-gray-300 dark:border-gray-700">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-orange-500 dark:text-gray-300"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm text-gray-900 dark:text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-gray-600 hover:text-orange-500 dark:text-gray-300"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>

              <button
                aria-label="Add to wishlist"
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-600 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
              >
                <Heart size={16} />
              </button>
            </div>

            <div className="mt-5">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Share this product</p>
              <div className="mt-2 flex gap-3">
                <a href="#" aria-label="Share on Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Facebook size={16} />
                </a>
                <a href="#" aria-label="Share on Twitter" className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
                  <Twitter size={16} />
                </a>
                <a href="#" aria-label="Share on Pinterest" className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                  <PinterestIcon size={16} />
                </a>
                <a href="#" aria-label="Share on Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-600 text-white">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}