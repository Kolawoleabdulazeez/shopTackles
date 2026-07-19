import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-950 dark:ring-1 dark:ring-gray-800">
      <Link href={`/blog/${post.slug}`}>
        <div
          className="h-48 w-full bg-gray-200 bg-cover bg-center dark:bg-gray-800"
          style={{ backgroundImage: `url(${post.image})` }}
        />
      </Link>

      <div className="p-5">
        <span className="inline-block rounded bg-orange-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
          {post.category}
        </span>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="mt-3 text-base font-semibold text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-400">
            {post.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <User size={12} /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {post.date}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 font-medium text-orange-500 hover:underline"
          >
            Read More <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}