import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/Component/Layout/Navbar";
import Breadcrumb from "@/Component/Layout/Breadcrumb";
import LoginCard from "./Components/LoginCard";
import Newsletter from "@/Component/Components/Newsletter";
import Footer from "@/Component/Components/Footer";


export default function Login() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <Breadcrumb current="Login" />

      <div className="bg-gray-50 px-6 py-10 dark:bg-gray-900">
        <button
          onClick={() => router.back()}
          className="mx-auto mb-6 flex max-w-6xl items-center gap-1 text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400"
        >
          <ChevronLeft size={16} />
          Go back to the previous page
        </button>

        <LoginCard />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}