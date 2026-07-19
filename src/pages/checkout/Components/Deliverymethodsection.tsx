import { useState } from "react";
import { Check } from "lucide-react";

const options = [
  {
    value: "door",
    label: "Door Delivery",
    bullets: [
      "Ensure your address is current as Delivery Agents would only deliver to the stated address.",
      "On delivery day, delivery time may vary due to possible eventualities.",
    ],
    footnote: "Free return within 7 days for Official Store items and 7 days for other eligible items, please",
  },
  {
    value: "pickup",
    label: "Store Pickup",
    bullets: [
      "Cheaper Shipping Fees than Door Delivery",
      "Scheduled pickup at your own convenience",
      "Please note that payment must be made before the package can be opened and delivery agents are not allowed to open a package.",
    ],
    footnote: "Free return within 7 days for Official Store items and 7 days for other eligible items, please",
  },
];

export default function DeliveryMethodSection() {
  const [method, setMethod] = useState("door");

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">2. Delivery Method</h2>
      <div className="mt-4 border-b border-gray-200 pb-4 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          How do you want your order to be delivered?
        </p>
      </div>

      <div className="mt-5 space-y-6">
        {options.map((option) => {
          const isSelected = method === option.value;
          return (
            <div key={option.value}>
              <button
                type="button"
                onClick={() => setMethod(option.value)}
                className="flex items-center gap-3"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded border ${
                    isSelected
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
                  }`}
                >
                  {isSelected && <Check size={13} strokeWidth={3} />}
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {option.label}
                </span>
              </button>

              <ul className="mt-3 space-y-1.5 pl-8 text-sm text-gray-500 dark:text-gray-400">
                {option.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span>·</span>
                    <span>{bullet}</span>
                  </li>
                ))}
                <li className="flex gap-2">
                  <span>·</span>
                  <span>
                    {option.footnote}{" "}
                    <button type="button" className="text-orange-500 hover:underline">
                      click here!
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}