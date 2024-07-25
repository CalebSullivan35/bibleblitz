import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { NavBar } from "./components/NavBar";
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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" className={GeistSans.variable} data-theme="emerald">
        <body className="flex h-screen min-h-screen flex-col bg-gradient-to-b from-slate-600 to-slate-800 text-xl text-white">
          <NavBar>
            <main className="mt-4 flex flex-1 flex-col items-center sm:mt-24">
              {children}
            </main>
          </NavBar>
        </body>
      </html>
    </ClerkProvider>
  );
}
