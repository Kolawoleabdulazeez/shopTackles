import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Facebook, Twitter, Instagram, Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import { waterfall } from "@/utils/fonts";
import type { RootState } from "@/store";
import ShopsMegaMenu from "./ShopMegaMenu";
import CartDropdown from "./Cartdropdown";
import LoginPromptDropdown from "./LoginPromptDropdown";
import ProfileDropdown from "./ProfileDropdown";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shops", href: "/shops", hasDropdown: true },
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Faqs", href: "/faqs" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [shopsOpen, setShopsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const shopsRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // TODO: replace with real auth state once login is wired up (e.g. an authSlice or session hook)
  const isAuthenticated = false;

  // close any open dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (shopsRef.current && !shopsRef.current.contains(e.target as Node)) {
        setShopsOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="hidden items-center justify-between bg-gray-100 px-6 py-2 text-xs text-gray-600 md:flex dark:bg-gray-900 dark:text-gray-400">
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-900 dark:hover:text-white">
            <Facebook size={14} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-900 dark:hover:text-white">
            <Twitter size={14} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-900 dark:hover:text-white">
            <Instagram size={14} />
          </a>
        </div>

        <p>Free shipping worldwide. Orders over $200</p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrency(currency === "USD" ? "EUR" : "USD")}
            className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white"
          >
            {currency} <ChevronDown size={12} />
          </button>
          <button
            onClick={() => setLanguage(language === "English" ? "French" : "English")}
            className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white"
          >
            {language} <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="relative flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
        <Link href="/" className={`text-3xl !font-extrabold italic text-orange-500 ${waterfall.className}`}>
          ShopTackles
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative" ref={shopsRef}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setShopsOpen((open) => !open);
                  }}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
                  aria-expanded={shopsOpen}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${shopsOpen ? "rotate-180" : ""}`} />
                </Link>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {shopsOpen && <ShopsMegaMenu />}

        <div className="flex items-center gap-5 text-gray-700 dark:text-gray-300">
          <button aria-label="Search" className="hover:text-orange-500 dark:hover:text-orange-400">
            <Search size={20} />
          </button>

          <div className="relative" ref={profileRef}>
            <button
              aria-label="Account"
              onClick={() => setProfileOpen((open) => !open)}
              className="hover:text-orange-500 dark:hover:text-orange-400"
            >
              <User size={20} />
            </button>

            {profileOpen &&
              (isAuthenticated ? (
                <ProfileDropdown onClose={() => setProfileOpen(false)} />
              ) : (
                <LoginPromptDropdown onClose={() => setProfileOpen(false)} />
              ))}
          </div>

          <div className="relative" ref={cartRef}>
            <button
              aria-label="Cart"
              onClick={() => setCartOpen((open) => !open)}
              className="relative hover:text-orange-500 dark:hover:text-orange-400"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#F4694C] text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
          </div>
        </div>
      </div>
    </header>
  );
}