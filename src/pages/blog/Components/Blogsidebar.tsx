import Link from "next/link";
import { Search } from "lucide-react";

const categories = [
  { name: "Style Guide", count: 12 },
  { name: "Trends", count: 9 },
  { name: "Fashion Tips", count: 15 },
  { name: "Behind the Brand", count: 4 },
  { name: "Sustainability", count: 6 },
];

const recentPosts = [
  { title: "5 Wardrobe Staples Every Closet Needs", date: "12 Jul 2026", image: "/BlogRecent1.svg" },
  { title: "How to Style Oversized Fits This Season", date: "6 Jul 2026", image: "/BlogRecent2.svg" },
  { title: "A Guide to Sustainable Fabrics", date: "29 Jun 2026", image: "/BlogRecent3.svg" },
];

const tags = ["Streetwear", "Accessories", "Denim", "Minimalism", "Footwear", "Seasonal"];

export default function BlogSidebar() {
  return (
    <aside className="w-full space-y-6 text-sm">
      {/* Search */}
      <div className="flex overflow-hidden rounded border border-gray-300 dark:border-gray-700">
        <input
          type="text"
          placeholder="Search articles..."
          className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none dark:text-gray-200"
        />
        <button aria-label="Search" className="px-3 text-gray-500 hover:text-orange-500 dark:text-gray-400">
          <Search size={16} />
        </button>
      </div>

      {/* Categories */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Categories
        </h3>
        <ul className="mt-3 space-y-2">
          {categories.map((cat) => (
            <li key={cat.name} className="flex items-center justify-between">
              <a href="#" className="text-gray-700 hover:text-orange-500 dark:text-gray-300">
                {cat.name}
              </a>
              <span className="text-xs text-gray-400">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent posts */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Recent Posts
        </h3>
        <ul className="mt-3 space-y-3">
          {recentPosts.map((post) => (
            <li key={post.title} className="flex gap-3">
              <div
                className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 bg-cover bg-center dark:bg-gray-800"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div>
                <a
                  href="#"
                  className="text-xs font-medium text-gray-800 hover:text-orange-500 dark:text-gray-200"
                >
                  {post.title}
                </a>
                <p className="mt-1 text-[11px] text-gray-400">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          Tags
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag.toLowerCase()}`}
              className="rounded border border-gray-300 px-3 py-1 text-xs text-gray-600 hover:border-orange-400 hover:text-orange-500 dark:border-gray-700 dark:text-gray-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}