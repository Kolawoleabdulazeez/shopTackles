import { useDispatch, useSelector } from "react-redux";
import { Trash2, Plus, Minus } from "lucide-react";
import type { RootState } from "@/store";
import { removeFromCart, updateQuantity } from "@/features/cartSlice";

export default function CartTable() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="rounded border border-gray-200 bg-white py-16 text-center dark:border-gray-800 dark:bg-gray-950">
        <p className="text-sm text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded border border-gray-200 dark:border-gray-800">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wide text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <th className="px-4 py-3 font-medium">Action</th>
            <th className="px-4 py-3 font-medium">Product</th>
            <th className="px-4 py-3 font-medium">Product Name</th>
            <th className="px-4 py-3 font-medium">Price</th>
            <th className="px-4 py-3 font-medium">Quantity</th>
            <th className="px-4 py-3 font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={`${item.id}-${item.size}-${item.color}`}
              className="border-b border-gray-100 dark:border-gray-800"
            >
              <td className="px-4 py-4">
                <button
                  onClick={() =>
                    dispatch(removeFromCart({ id: item.id, size: item.size, color: item.color }))
                  }
                  aria-label={`Remove ${item.name}`}
                  className="flex items-center gap-1 text-xs font-medium text-red-500 hover:text-red-600"
                >
                  <Trash2 size={14} /> Remove
                </button>
              </td>
              <td className="px-4 py-4">
                <div
                  className="h-14 w-14 rounded bg-gray-100 bg-cover bg-center dark:bg-gray-800"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-300">{item.name}</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-300">${item.price.toFixed(2)}</td>
              <td className="px-4 py-4">
                <div className="flex w-fit items-center rounded border border-gray-300 dark:border-gray-700">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          size: item.size,
                          color: item.color,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    aria-label="Decrease quantity"
                    className="px-2 py-1 text-gray-600 hover:text-orange-500 dark:text-gray-300"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-8 text-center text-gray-800 dark:text-gray-200">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          size: item.size,
                          color: item.color,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                    aria-label="Increase quantity"
                    className="px-2 py-1 text-gray-600 hover:text-orange-500 dark:text-gray-300"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}