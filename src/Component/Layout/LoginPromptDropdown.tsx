import Link from "next/link";

export default function LoginPromptDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-full z-40 w-52 rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <p className="px-1 text-xs text-gray-500 dark:text-gray-400">
        Sign in to view your orders and wishlist.
      </p>

      <div className="mt-3 flex flex-col gap-2">
        <Link
          href="/Login"
          onClick={onClose}
          className="rounded bg-[#F4694C] px-3 py-2 text-center text-sm font-medium text-white hover:bg-orange-600"
        >
          Login
        </Link>
        <Link
          href="/Signup"
          onClick={onClose}
          className="rounded border border-orange-400 px-3 py-2 text-center text-sm font-medium text-orange-500 hover:bg-orange-400 hover:text-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}