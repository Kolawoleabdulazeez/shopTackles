import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/Component/Layout/Navbar";
import Breadcrumb from "@/Component/Layout/Breadcrumb";
import CouponBox from "./Components/Couponbox";
import CartTotals from "./Components/Carttotals";
import Newsletter from "@/Component/Components/Newsletter";
import Footer from "@/Component/Components/Footer";
import CartTable from "./Components/Carttable";


export default function ShoppingCart() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <Breadcrumb current="Shopping Cart" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400"
        >
          <ChevronLeft size={16} />
          Go back to the previous page
        </button>

        <CartTable />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button className="rounded border border-orange-400 px-6 py-2 text-sm font-medium text-orange-500 transition hover:bg-orange-400 hover:text-white">
            Update Cart
          </button>
          <Link
            href="/"
            className="rounded border border-orange-400 px-6 py-2 text-center text-sm font-medium text-orange-500 transition hover:bg-orange-400 hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <CouponBox />
          <CartTotals />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}