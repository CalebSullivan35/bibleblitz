"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  BookOpenText,
  FileQuestionIcon,
  Menu,
  SatelliteDish,
  SwordsIcon,
} from "lucide-react";

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
              <Menu />
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
        />
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
                href="/learn"
                className={`flex items-center rounded-lg px-4 py-3 text-lg transition-colors ${
                  pathName === "/learn"
                    ? "bg-sky-500 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <SwordsIcon />
                Practice Tool
              </Link>
            </li>
            <li>
              <details open>
                <summary
                  className={`flex items-center rounded-lg px-4 py-3 text-lg transition-colors ${
                    pathName === "/oldtestament" || pathName === "/newtestament"
                      ? "bg-sky-500 text-white"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <BookOpenText />
                  Bible Index
                </summary>
                <ul>
                  <li>
                    <Link href="/oldtestament" onClick={() => setIsOpen(false)}>
                      Old Testament
                    </Link>
                  </li>
                  <li>
                    <Link href="/newtestament" onClick={() => setIsOpen(false)}>
                      New Testament
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href="/stats"
                className={`flex items-center rounded-lg px-4 py-3 text-lg transition-colors ${
                  pathName === "/stats"
                    ? "bg-sky-500 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <SatelliteDish />
                User Stats
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`flex items-center rounded-lg px-4 py-3 text-lg transition-colors ${
                  pathName === "/about"
                    ? "bg-sky-500 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FileQuestionIcon />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
