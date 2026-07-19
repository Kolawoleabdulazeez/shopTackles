import { useState } from "react";
import Link from "next/link";

export default function RegisterCard() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    if (!acceptedTerms) {
      console.error("Terms must be accepted");
      return;
    }

    // wire up to your auth endpoint / authSlice
    console.log("Register:", { fullName, email, password });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-md bg-[#0b1120] p-8 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Register</h1>
        <p className="mt-1 text-sm text-gray-400">Please register by filling the detail bellow</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="fullName" className="text-sm text-gray-300">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter fullname"
            className="mt-1 w-full rounded border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
          />
        </div>

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
        </div>

        <div>
          <label htmlFor="confirmPassword" className="text-sm text-gray-300">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-type Password"
            className="mt-1 w-full rounded border border-gray-700 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-orange-400 focus:outline-none"
          />
        </div>

        <label className="flex items-center gap-2 text-xs text-gray-300">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="h-4 w-4 rounded border-gray-600 bg-transparent accent-orange-500"
          />
          Accept Terms & Condition
        </label>

        <button
          type="submit"
          className="w-full rounded bg-[#F4694C] py-2.5 text-sm font-medium text-white hover:bg-orange-600"
        >
          Register
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
          Sign up with Google
        </button>
        <button className="flex items-center justify-center gap-2 rounded bg-[#1877F2] py-2 text-xs font-medium text-white hover:bg-[#166fe0]">
          <FacebookIcon size={14} />
          Sign up with Facebook
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-orange-400 hover:underline">
          Login Now
        </Link>
      </p>
    </div>
  );
}

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.47a5.54 5.54 0 0 1-2.4 3.64v3h3.89c2.28-2.1 3.56-5.19 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.89-3c-1.08.73-2.46 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.96H1.25v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.25A12 12 0 0 0 0 12c0 1.94.46 3.77 1.25 5.38z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.9 11.9 0 0 0 12 0 12 12 0 0 0 1.25 6.62l4.02 3.1C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}