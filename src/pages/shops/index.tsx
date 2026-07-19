import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/Component/Layout/Navbar";
import Breadcrumb from "@/Component/Layout/Breadcrumb";
import Pagination from "./Components/Pagination";
import Newsletter from "@/Component/Components/Newsletter";
import Footer from "@/Component/Components/Footer";
import ShopProductGrid from "./Components/Shopproductgrid";
import ShopToolbar from "./Components/Shoptoolbar";
import ShopSidebar from "./Components/Shopsidebar";


export default function Shops() {
  const router = useRouter();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Navbar />
      <Breadcrumb current="Shops" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400"
        >
          <ChevronLeft size={16} />
          Go back to the previous page
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          <ShopSidebar />

          <div>
            <ShopToolbar view={view} onViewChange={setView} resultCount={18} />

            <div className="mt-6">
              <ShopProductGrid view={view} />
            </div>

            <div className="mt-10">
              <Pagination currentPage={currentPage} totalPages={7} onPageChange={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}