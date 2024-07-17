import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/nextjs";
import { GeistSans } from "geist/font";
import "~/styles/globals.css";
import { size } from "lodash";

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
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`} data-theme="emerald">
        <body className="flex h-screen min-h-screen flex-col bg-gradient-to-b from-slate-600 to-slate-800 text-xl text-white">
          <header className="flex justify-between pr-5 pt-5 text-lg">
            <h1></h1>
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
          </header>
          <main className="mt-24 flex flex-1 flex-col items-center sm:mt-72">
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
