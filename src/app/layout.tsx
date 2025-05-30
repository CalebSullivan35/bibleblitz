import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { NavBar } from "./components/NavBar";
import { ReactQueryClientProvider } from "./components/ReactQueryClientProvider";

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
      <ReactQueryClientProvider>
        <html
          lang="en"
          className={`${GeistSans.variable} bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 bg-fixed`}
        >
          <body className="min-h-screen bg-fixed">
            <NavBar>
              <main className="container mx-auto flex flex-1 flex-col px-4 py-8">
                {children}
              </main>
            </NavBar>
          </body>
        </html>
      </ReactQueryClientProvider>
    </ClerkProvider>
  );
}
