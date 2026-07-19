import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import Card from "./Card";

function getEstimatedDelivery() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "short" });
}

export default function ShippingDetailsSection() {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <Card>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">3. Shipping Details</h2>

      <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {items.map((item) => (
          <li key={`${item.id}-${item.size}-${item.color}`}>
            {item.quantity} x {item.name}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        All items will be delivered by{" "}
        <span className="font-semibold text-gray-900 dark:text-white">{getEstimatedDelivery()}</span>
      </p>
    </Card>
  );
}