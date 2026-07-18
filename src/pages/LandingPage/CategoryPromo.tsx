import { ImageCard } from "./ImageCard";
import { PromoCard } from "./PromoCard";

const promos = {
  menFashion: {
    overline: "New Arrivals",
    title: "Men's Fashion",
    image: "/newArrivals.svg",
  },
  freeReturn: {
    heading: "Free Return",
    subtext: "free 30 days retrun policy",
    bg: "bg-[#F4694C]",
  },
  kidCollections: {
    overline: "New Arrivals",
    title: "Kid's Collections",
    cta: "Explore Now >>>",
    image: "/Kids.svg",
  },
  womenCollections: {
    overline: "Summer Season",
    title: "Women Collections",
    image: "/womenCollections.svg",
  },
  freeShipping: {
    heading: "Free Shipping",
    subtext: "on orders over $200",
    bg: "bg-blue-950",
  },
};

export default function CategoryPromo() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-12 md:grid-cols-3 md:gap-6">
      {/* Left column */}
      <div className="grid grid-rows-2 gap-4 md:gap-6">
        <ImageCard
          image={promos.menFashion.image}
          overline={promos.menFashion.overline}
          title={promos.menFashion.title}
        />
        <PromoCard
          heading={promos.freeReturn.heading}
          subtext={promos.freeReturn.subtext}
          bg={promos.freeReturn.bg}
        />
      </div>

      {/* Middle column, full height */}
      <ImageCard
        image={promos.kidCollections.image}
        overline={promos.kidCollections.overline}
        title={promos.kidCollections.title}
        cta={promos.kidCollections.cta}
        className="row-span-2 min-h-[340px] md:min-h-0"
      />

      {/* Right column */}
      <div className="grid grid-rows-2 gap-4 md:gap-6">
        <ImageCard
          image={promos.womenCollections.image}
          overline={promos.womenCollections.overline}
          title={promos.womenCollections.title}
        />
        <PromoCard
          heading={promos.freeShipping.heading}
          subtext={promos.freeShipping.subtext}
          bg={promos.freeShipping.bg}
        />
      </div>
    </section>
  );
}



