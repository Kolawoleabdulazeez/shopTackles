import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { BlogPost } from "./Blogcard";

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950 dark:ring-1 dark:ring-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Link href={`/blog/${post.slug}`}>
          <div
            className="h-64 w-full bg-gray-200 bg-cover bg-top md:h-full"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        </Link>

        <div className="flex flex-col justify-center p-6 md:p-8">
          <span className="w-fit rounded bg-orange-400 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Featured · {post.category}
          </span>

          <Link href={`/blog/${post.slug}`}>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-400">
              {post.title}
            </h2>
          </Link>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{post.excerpt}</p>

          <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <User size={12} /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {post.date}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-5 flex w-fit items-center gap-2 rounded border border-orange-400 px-5 py-2 text-sm font-medium text-orange-500 transition hover:bg-orange-400 hover:text-white"
          >
            Read Full Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}