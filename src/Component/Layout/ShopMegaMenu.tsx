import { accessories, kidsFashion, menFashion, slugify, topBrands, womenFashion } from "@/utils/data";
import Link from "next/link";

function MenuColumn({ title, items, basePath }: { title: string; items: string[]; basePath: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={`${basePath}/${slugify(item)}`}
              className="text-sm text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ShopsMegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-40 w-[60vw] max-w-5xl -translate-x-1/2 border-b border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        <MenuColumn title="Men's Fashion" items={menFashion} basePath="/shop/men" />
        <MenuColumn title="Women's Fashion" items={womenFashion} basePath="/shop/women" />

        <div className="space-y-8">
          <MenuColumn title="Accessories" items={accessories} basePath="/shop/accessories" />
          <MenuColumn title="Kids Fashion" items={kidsFashion} basePath="/shop/kids" />
        </div>

        <div className="space-y-8">
          <MenuColumn title="Top Brands" items={topBrands} basePath="/shop/brands" />
          <Link
            href="/shop/all"
            className="block text-base font-semibold text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-400"
          >
            All Fashion
          </Link>
        </div>
      </div>
    </div>
  );
}