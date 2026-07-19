import { useState } from "react";
import Card from "./Card";

export default function BillingDetailsForm() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [altMobile, setAltMobile] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Card>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">1. Billing Details</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your names"
          className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name (optional)"
          className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <input
          type="tel"
          value={altMobile}
          onChange={(e) => setAltMobile(e.target.value)}
          placeholder="Mobile Number (Optional)"
          className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Add a company/street/apt or PO box address"
          className="rounded border border-gray-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none sm:col-span-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>
    </Card>
  );
}