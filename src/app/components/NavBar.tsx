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
  console.log(pathName);
  return (
    <div className="drawer-auto-gutter drawer ">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar w-full justify-between">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
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
          {/* <div className="mx-2 flex-1  px-2">Bible Blitz</div> */}
          <div className=" block flex-none">
            <SignedIn>
              <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonOuterIdentifier: {
                      color: "white",
                      "font-size": "20px",
                    },
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn">Sign In</button>
              </SignInButton>
            </SignedOut>
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-full bg-black p-4 text-xl sm:w-80">
          <li
            onClick={() => setIsOpen(false)}
            className={pathName === "/" ? "text-primary" : ""}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={pathName === "/leaderboard" ? "text-primary" : ""}
          >
            <Link href="/leaderboard">Leaderboard</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={pathName === "/bibleIndex" ? "text-primary" : ""}
          >
            <Link href="/bibleIndex">Bible Index</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={pathName === "/learn" ? "text-primary" : ""}
          >
            <Link href="/learn">Practice Tool</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

{
  /* <header className="flex justify-between pr-5 pt-5 text-lg">
  <h1></h1>
  <SignedIn>
    <UserButton
      showName
      appearance={{
        elements: {
          userButtonOuterIdentifier: {
            color: "white",
            "font-size": "20px",
          },
        },
      }}
    />
  </SignedIn>
  <SignedOut>
    <SignInButton mode="modal">
      <button className="btn">Sign In</button>
    </SignInButton>
  </SignedOut>
</header>; */
}
