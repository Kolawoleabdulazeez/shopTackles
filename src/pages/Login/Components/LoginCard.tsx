import { useState } from "react";
import Link from "next/link";
import { FacebookIcon, GoogleIcon } from "@/Component/Components/Socialicons";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire up to your auth endpoint / authSlice
    console.log("Login:", { email, password });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-md bg-[#0b1120] p-8 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="mt-1 text-sm text-gray-400">Please login using account detail below</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="text-sm text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="mt-1 w-full rounded border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="mt-1 w-full rounded border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
          />
          <div className="mt-2 text-right">
            <Link href="/forgot-password" className="text-xs text-gray-400 hover:text-orange-400">
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#F4694C] py-2.5 text-sm font-medium text-white hover:bg-orange-600"
        >
          Login
        </button>
      </form>

      <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
        <div className="h-px flex-1 bg-gray-700" />
        or continue with
        <div className="h-px flex-1 bg-gray-700" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded border border-gray-700 bg-white py-2 text-xs font-medium text-gray-800 hover:bg-gray-100">
          <GoogleIcon size={14} />
          Login with Google
        </button>
        <button className="flex items-center justify-center gap-2 rounded bg-[#1877F2] py-2 text-xs font-medium text-white hover:bg-[#166fe0]">
          <FacebookIcon size={14} />
          Login with Facebook
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        Don&apos;t have an account yet?{" "}
        <Link href="/signup" className="font-medium text-orange-400 hover:underline">
          Register for free
        </Link>
      </p>
    </div>
  );
}