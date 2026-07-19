import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const DELIVERY_FEE = 50;

export default function CartTotals() {
  const items = useSelector((state: RootState) => state.cart.items);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0;

  return (
    <div className="overflow-hidden rounded border border-gray-200 dark:border-gray-800">
      <div className="bg-[#0b1120] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white">
        Cart Totals
      </div>
      <div className="space-y-3 p-4 text-sm">
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Subtotal</span>
          <span className="font-medium text-orange-500">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Delivery</span>
          <span className="font-medium text-orange-500">${DELIVERY_FEE.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3 font-medium text-gray-900 dark:border-gray-800 dark:text-white">
          <span>Total</span>
          <span className="text-orange-500">${total.toFixed(2)}</span>
        </div>

        <Link
          href="/checkout"
          className="mt-2 block rounded bg-orange-500 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}