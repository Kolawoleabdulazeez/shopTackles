export function ImageCard({
  image,
  overline,
  title,
  cta,
  className = "",
}: {
  image: string;
  overline: string;
  title: string;
  cta?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[160px] items-end justify-center overflow-hidden rounded-sm bg-gray-400 bg-cover bg-center pb-6 text-center text-white ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-wide text-gray-100">{overline}</p>
        <h3 className="mt-1 text-xl font-semibold md:text-2xl">{title}</h3>
        {cta && <p className="mt-2 text-xs text-gray-100">{cta}</p>}
      </div>
    </div>
  );
}