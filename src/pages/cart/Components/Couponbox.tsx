import { useState } from "react";

export default function CouponBox() {
  const [code, setCode] = useState("");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // wire up to your real coupon-validation endpoint
    console.log("Apply coupon:", code);
  };

  return (
    <div className="overflow-hidden rounded border border-gray-200 dark:border-gray-800">
      <div className="bg-[#0b1120] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white">
        Coupon
      </div>
      <div className="p-4">
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          Enter your coupon code if you have one.
        </p>
        <form onSubmit={handleApply} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Coupon Code"
            className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="rounded bg-orange-500 px-5 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            Apply Coupon
          </button>
        </form>
      </div>
    </div>
  );
}