"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

interface NavBarProps {
  children: ReactNode;
}

export const NavBar = ({ children }: NavBarProps) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drawer-auto-gutter drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full justify-between shadow-lg">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white hover:bg-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="block flex-none">
            <SignedIn>
              <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonOuterIdentifier: {
                      "font-size": "20px",
                      color: "white",
                    },
                    userButtonBox: {
                      "&:hover": {
                        backgroundColor: "rgb(51 65 85)",
                      },
                    },
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn bg-sky-500 text-white hover:bg-sky-600">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        {/* Page content here */}
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full w-full bg-gradient-to-b from-slate-800 to-slate-900 p-4 text-white sm:w-80">
          <div className="mb-8 mt-4 px-4">
            <h2 className="text-2xl font-bold text-sky-400">Bible Blitz</h2>
            <p className="mt-1 text-sm text-slate-300">
              Learn the Bible through play
            </p>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/bibleIndex"
                className={`flex items-center rounded-lg px-4 py-3 text-lg transition-colors ${
                  pathName === "/bibleIndex"
                    ? "bg-sky-500 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="mr-3 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Bible Index
              </Link>
            </li>
            <li>
              <Link
                href="/learn"
                className={`flex items-center rounded-lg px-4 py-3 text-lg transition-colors ${
                  pathName === "/learn"
                    ? "bg-sky-500 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="mr-3 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Practice Tool
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
