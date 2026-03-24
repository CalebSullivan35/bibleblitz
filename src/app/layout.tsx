import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { PostHogProvider } from "./providers";
import { cn } from "@/lib/utils";
import { Sidebar } from "./components/Sidebar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
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
      <html lang="en" className={cn("dark font-sans", geist.variable)}>
        <body>
          <PostHogProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </PostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
