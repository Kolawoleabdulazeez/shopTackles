import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

function PinterestIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.378-.293 1.194-.333 1.361-.052.219-.174.265-.4.16-1.492-.694-2.424-2.874-2.424-4.625 0-3.769 2.738-7.229 7.898-7.229 4.147 0 7.372 2.955 7.372 6.901 0 4.116-2.595 7.431-6.199 7.431-1.211 0-2.349-.629-2.738-1.373l-.744 2.834c-.27 1.037-1 2.337-1.488 3.129C9.712 23.803 10.836 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const usefulLinks = [
  { label: "New Products", href: "/products/new" },
  { label: "Winter Collections", href: "/collections/winter" },
  { label: "Trending Items", href: "/trending" },
  { label: "Summer Collections", href: "/collections/summer" },
  { label: "Special Offers", href: "/offers" },
];

const shopLinks = [
  { label: "Men's Shopping", href: "/shop/men" },
  { label: "Women's Shopping", href: "/shop/women" },
  { label: "Kid's Shopping", href: "/shop/kids" },
  { label: "Accessories", href: "/shop/accessories" },
  { label: "Discounts", href: "/shop/discounts" },
];

const accountLinks = [
  { label: "My Profile", href: "/account/profile" },
  { label: "ShoppingCart", href: "/cart" },
  { label: "Whishlist", href: "/account/wishlist" },
  { label: "Orders", href: "/account/orders" },
  { label: "Order History", href: "/account/order-history" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Faqs", href: "/faqs" },
  { label: "Contact us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] px-6 pb-8 pt-12 text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
        {/* Quick order */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white">Quick Order</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+2348014562912" className="hover:text-orange-400">
                +(234) 801 456 2912
              </a>
            </li>
            <li>
              <a href="mailto:Support@shoptacle.com" className="hover:text-orange-400">
                Support@shoptacle.com
              </a>
            </li>
            <li className="text-gray-400">Locate the nearest store</li>
            <li>
              <a href="/stores" className="underline underline-offset-2 hover:text-orange-400">
                See Our Stores
              </a>
            </li>
          </ul>
        </div>

        {/* Useful link */}
        <FooterColumn title="Useful Link" links={usefulLinks} />

        {/* Shops */}
        <FooterColumn title="Shops" links={shopLinks} />

        {/* My account */}
        <FooterColumn title="My Account" links={accountLinks} />

        {/* Company */}
        <FooterColumn title="Company" links={companyLinks} />
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-gray-400">Copyright © 2022 ShopTacleux</p>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-orange-400">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-orange-400">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-orange-400">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-300 hover:text-orange-400">
              <PinterestIcon size={16} />
            </a>
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-3">
            <Image src="/Mastercard.svg" alt="Mastercard" width={38} height={24} className="h-6 w-auto" />
            <Image src="/Visa.svg" alt="Visa" width={38} height={24} className="h-6 w-auto" />
            <Image src="/Paypal.svg" alt="PayPal" width={48} height={24} className="h-8 w-auto" />
            <Image src="/Bitcoin.svg" alt="Bitcoin" width={30} height={20} className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-orange-400">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}