import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";

export const metadata = {
  title: "Bible Blitz",
  description: "A Bible Drill App",
  icons: [{ rel: "icon", url: "/bibleicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" className={`${GeistSans.variable}`} data-theme="emerald">
        <body className="flex h-screen min-h-screen flex-col bg-gradient-to-b from-slate-600 to-slate-800 text-xl text-white">
          <header className="flex justify-between pr-5 pt-5 text-lg">
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
          </header>
          <main className="mt-24 flex flex-1 flex-col items-center sm:mt-72">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
