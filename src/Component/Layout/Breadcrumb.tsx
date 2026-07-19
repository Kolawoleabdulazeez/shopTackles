import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="bg-[#F4694C] px-6 py-3">
      <p className="mx-auto max-w-6xl text-sm text-white">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / {current}
      </p>
    </div>
  );
}