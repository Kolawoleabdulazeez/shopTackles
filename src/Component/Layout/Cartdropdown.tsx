import { X, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import { removeFromCart } from "@/features/cartSlice";

const DELIVERY_FEE = 50;

export default function CartDropdown({ onClose }: { onClose: () => void }) {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0;

  return (
    <div className="absolute right-0 top-full z-40 w-80 rounded-md border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-950">
      {items.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="max-h-72 space-y-4 overflow-y-auto">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="relative flex gap-3">
                <div
                  className="h-16 w-16 flex-shrink-0 rounded bg-gray-100 bg-cover bg-center dark:bg-gray-800"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="flex-1">
                  <p className="pr-6 text-sm text-gray-800 dark:text-gray-200">{item.name}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.quantity} x{" "}
                    <span className="font-medium text-orange-500">${item.price.toFixed(2)}</span>
                  </p>
                </div>
                <button
                  onClick={() =>
                    dispatch(removeFromCart({ id: item.id, size: item.size, color: item.color }))
                  }
                  aria-label={`Remove ${item.name} from cart`}
                  className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-white hover:bg-gray-400 dark:bg-gray-700"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2 border-t border-gray-200 pt-4 text-sm dark:border-gray-800">
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Sub total</span>
              <span className="font-medium text-orange-500">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-300">
              <span>Delivery</span>
              <span className="font-medium text-orange-500">${DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium text-gray-900 dark:text-white">
              <span>Total</span>
              <span className="text-orange-500">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link
              href="/cart"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded border border-orange-400 px-3 py-2 text-sm font-medium text-orange-500 transition hover:bg-orange-400 hover:text-white"
            >
              <ShoppingCart size={14} /> View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded border border-orange-400 px-3 py-2 text-sm font-medium text-orange-500 transition hover:bg-orange-400 hover:text-white"
            >
              <ArrowRight size={14} /> Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}