import Link from "next/link";

const links = [
  { label: "My Account", href: "/account" },
  { label: "Whislist", href: "/account/wishlist" },
  { label: "Order", href: "/account/orders" },
];

export default function ProfileDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-full z-40 w-44 rounded-md border border-gray-200 bg-white py-3 shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="block px-5 py-2 text-sm text-gray-800 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}