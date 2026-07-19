import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/Component/Layout/Navbar";
import Breadcrumb from "@/Component/Layout/Breadcrumb";
import Footer from "@/Component/Components/Footer";
import Newsletter from "@/Component/Components/Newsletter";
import OrderSummary from "./Components/Ordersummary";
import DeliveryMethodSection from "./Components/Deliverymethodsection";
import BillingDetailsForm from "./Components/Billingdetailsform";
import ShippingDetailsSection from "./Components/Shippingdetailssection";
import PaymentMethodSection from "./Components/Paymentmethodsection";


export default function Checkout() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    // wire up to your real order-submission endpoint
    console.log("Placing order...");
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb current="Shopping Cart / Checkout" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400"
        >
          <ChevronLeft size={16} />
          Go back to the previous page
        </button>

        <h1 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Checkout</h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <BillingDetailsForm />
            <DeliveryMethodSection />
            <ShippingDetailsSection />
            <PaymentMethodSection />

            <button
              onClick={handlePlaceOrder}
              className="w-full rounded bg-orange-500 py-3 text-sm font-medium text-white hover:bg-orange-600"
            >
              Place Order
            </button>
          </div>

          <div>
            <OrderSummary onPlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}