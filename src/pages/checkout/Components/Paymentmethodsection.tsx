import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const paymentOptions = [
  { value: "card", label: "Online Card Payment" },
  { value: "delivery-cash", label: "Cash on Delivery" },
  { value: "delivery-card", label: "Card on Delivery" },
];

export default function PaymentMethodSection() {
  const [method, setMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [pin, setPin] = useState("");
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    // wire up to your real card-verification endpoint
    setVerified(true);
  };

  return (
    <section>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">4. Payment Method</h2>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Where do you want to pay from?
      </p>

      <div className="mt-4 space-y-3">
        {paymentOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            <input
              type="radio"
              name="payment-method"
              checked={method === option.value}
              onChange={() => setMethod(option.value)}
              className="accent-orange-500"
            />
            {option.label}
          </label>
        ))}
      </div>

      {method === "card" && (
        <div className="mt-4 space-y-4 rounded border border-gray-200 p-4 dark:border-gray-800">
          <div>
            <label className="text-xs text-gray-600 dark:text-gray-400">Card Number</label>
            <input
              type="text"
              inputMode="numeric"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="•••• •••• •••• ••••"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400">CCV</label>
              <input
                type="text"
                inputMode="numeric"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="•••"
                maxLength={4}
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 dark:text-gray-400">Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-600 dark:text-gray-400">Pin</label>
            <input
              type="password"
              inputMode="numeric"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              maxLength={4}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <button
            type="button"
            onClick={handleVerify}
            className="flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            <CheckCircle2 size={16} />
            {verified ? "Card Verified" : "Verify Card"}
          </button>
        </div>
      )}
    </section>
  );
}