import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const DELIVERY_FEE = 50;

export default function OrderSummary({ onPlaceOrder }: { onPlaceOrder: () => void }) {
  const items = useSelector((state: RootState) => state.cart.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0;

  return (
    <div className="rounded border border-gray-200 p-5 dark:border-gray-800">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
        Your Order ({itemCount} {itemCount === 1 ? "item" : "items"})
      </h2>

      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
            <div
              className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 bg-cover bg-center dark:bg-gray-800"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="flex-1 text-xs">
              <p className="text-gray-800 dark:text-gray-200">{item.name}</p>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {item.quantity} x{" "}
                <span className="font-medium text-orange-500">${item.price.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2 border-t border-gray-200 pt-4 text-sm dark:border-gray-800">
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Subtotal</span>
          <span className="font-medium text-orange-500">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Delivery</span>
          <span className="font-medium text-orange-500">${DELIVERY_FEE.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-2 font-medium text-gray-900 dark:border-gray-800 dark:text-white">
          <span>Total</span>
          <span className="text-orange-500">${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        disabled={items.length === 0}
        className="mt-5 w-full rounded bg-orange-500 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Place Order
      </button>
    </div>
  );
}