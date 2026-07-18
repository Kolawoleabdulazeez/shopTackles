import { ImageCard } from "./ImageCard";

const featured = [
  {
    overline: "",
    title: "Our Story",
    image: "/OurStory.svg",
  },
  {
    overline: "",
    title: "Our Blog",
    image: "/OurBlog.svg",
  },
];

const accessories = [
  {
    overline: "Accessories",
    title: "Wrist Watch",
    image: "/WristWatch.svg",
  },
  {
    overline: "Accessories",
    title: "Shoes",
    image: "/Shoes.svg",
  },
  {
    overline: "Accessories",
    title: "Bags",
    image: "/womenCollections.svg",
  },
];

export default function StoryAccessories() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Top row: Our Story / Our Blog */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {featured.map((item) => (
          <ImageCard
            key={item.title}
            image={item.image}
            overline={item.overline}
            title={item.title}
            className="min-h-[320px]"
          />
        ))}
      </div>

      {/* Bottom row: Wrist Watch / Shoes / Bags */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
        {accessories.map((item) => (
          <ImageCard
            key={item.title}
            image={item.image}
            overline={item.overline}
            title={item.title}
            className="min-h-[140px]"
          />
        ))}
      </div>
    </section>
  );
}