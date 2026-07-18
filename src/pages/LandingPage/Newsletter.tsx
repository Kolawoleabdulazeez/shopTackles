import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire up to your subscribe endpoint
    console.log("Subscribe:", email);
  };

  return (
    <section className="bg-white px-6 py-16 text-center dark:bg-gray-950">
      <div className="mx-auto max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Get update on our new product and discount offer
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex items-center gap-2 rounded border border-gray-300 px-4 py-3 dark:border-gray-700"
        >
          <Mail size={16} className="text-gray-400" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none dark:text-gray-200"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="text-gray-500 transition hover:text-orange-500 dark:text-gray-300"
          >
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}