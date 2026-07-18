import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "Trending",
    tag: "Sale Offer 20% Off This Week",
    titleWhite: "Trend",
    titleAccent: "Fashion",
    titleLine2: "Collection",
    subtext: "Sales only available for this week.",
    cta: "Shop Now",
    image: "/HeroImage.svg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const prevSlide = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const nextSlide = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative flex h-[300px] w-full items-center bg-gray-300 bg-cover bg-center md:h-[380px]"
        style={{ backgroundImage: `url(${slide.image})` }}
      >

        {/* content card */}
        <div className="relative z-10 mx-6 max-w-md rounded-md bg-black/40 p-6 text-white backdrop-blur-sm md:mx-16 md:p-8">
          <span className="inline-block rounded bg-[#F4694C]/90 px-2 py-1 text-xs font-medium">
            {slide.badge}
          </span>
          <p className="mt-3 text-xs text-gray-200">{slide.tag}</p>

          <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
            {slide.titleWhite} <span className="text-orange-400">{slide.titleAccent}</span>
            <br />
            {slide.titleLine2}
          </h1>

          <p className="mt-3 text-sm text-gray-200">{slide.subtext}</p>

          <button className="mt-5 rounded border border-orange-400 px-5 py-2 text-sm font-medium text-orange-400 transition hover:bg-[#F4694C] hover:text-white">
            {slide.cta}
          </button>
        </div>

        {/* carousel arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white md:left-6"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white md:right-6"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}