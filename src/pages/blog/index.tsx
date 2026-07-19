import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/Component/Layout/Navbar";
import Breadcrumb from "@/Component/Layout/Breadcrumb";
import BlogCard, { BlogPost } from "./Components/Blogcard";
import FeaturedPost from "./Components/Featuredpost";
import Pagination from "../shops/Components/Pagination";
import BlogSidebar from "./Components/Blogsidebar";
import Newsletter from "@/Component/Components/Newsletter";
import Footer from "@/Component/Components/Footer";


const featuredPost: BlogPost = {
  id: 0,
  slug: "how-to-build-a-capsule-wardrobe",
  title: "How to Build a Capsule Wardrobe That Actually Works",
  excerpt:
    "Fewer pieces, more outfits. Here's how to pick the essentials that mix and match across every season without the closet clutter.",
  category: "Style Guide",
  author: "Amara Chukwu",
  date: "15 Jul 2026",
  image: "/BlogFeatured.svg",
};

const posts: BlogPost[] = [
  {
    id: 1,
    slug: "denim-trends-2026",
    title: "The Denim Trends Taking Over 2026",
    excerpt: "Wide-leg, patchwork, and raw hems — what's actually worth adding to your rotation.",
    category: "Trends",
    author: "Jide Okafor",
    date: "10 Jul 2026",
    image: "/Blog1.svg",
  },
  {
    id: 2,
    slug: "sustainable-fabrics-explained",
    title: "Sustainable Fabrics, Explained Simply",
    excerpt: "Organic cotton, Tencel, recycled polyester — what they mean and why they matter.",
    category: "Sustainability",
    author: "Ronke Adeyemi",
    date: "6 Jul 2026",
    image: "/Blog2.svg",
  },
  {
    id: 3,
    slug: "styling-oversized-fits",
    title: "How to Style Oversized Fits Without Looking Sloppy",
    excerpt: "The proportion rules that turn baggy into intentional.",
    category: "Fashion Tips",
    author: "Amara Chukwu",
    date: "29 Jun 2026",
    image: "/Blog3.svg",
  },
  {
    id: 4,
    slug: "behind-the-brand-our-story",
    title: "Behind the Brand: How ShopTackles Started",
    excerpt: "From a small pop-up stall to a full online storefront — the story so far.",
    category: "Behind the Brand",
    author: "ShopTackles Team",
    date: "22 Jun 2026",
    image: "/Blog4.svg",
  },
  {
    id: 5,
    slug: "accessorizing-101",
    title: "Accessorizing 101: Less Is Sometimes More",
    excerpt: "A quick guide to picking accessories that elevate an outfit instead of overwhelming it.",
    category: "Fashion Tips",
    author: "Jide Okafor",
    date: "15 Jun 2026",
    image: "/Blog5.svg",
  },
  {
    id: 6,
    slug: "footwear-guide-every-occasion",
    title: "A Footwear Guide for Every Occasion",
    excerpt: "From sneakers to loafers — what to wear, when, and why it matters.",
    category: "Style Guide",
    author: "Ronke Adeyemi",
    date: "8 Jun 2026",
    image: "/Blog6.svg",
  },
];

export default function Blog() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Navbar />
      <Breadcrumb current="Blog" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 dark:text-gray-400"
        >
          <ChevronLeft size={16} />
          Go back to the previous page
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
            OUR BLOG
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 dark:text-gray-400">
            Style guides, trend reports, and stories from the world of ShopTackles.
          </p>
        </div>

        <div className="mt-10">
          <FeaturedPost post={featuredPost} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <div className="mt-10">
              <Pagination currentPage={currentPage} totalPages={4} onPageChange={setCurrentPage} />
            </div>
          </div>

          <BlogSidebar />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}