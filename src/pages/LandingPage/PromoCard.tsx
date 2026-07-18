export function PromoCard({
  heading,
  subtext,
  bg,
}: {
  heading: string;
  subtext: string;
  bg: string;
}) {
  return (
    <div className={`flex min-h-[160px] items-center justify-center rounded-sm ${bg}`}>
      <div className="border border-white/60 px-8 py-6 text-center text-white">
        <p className="text-lg font-semibold">{heading}</p>
        <p className="mt-1 text-xs text-gray-100">{subtext}</p>
      </div>
    </div>
  );
}