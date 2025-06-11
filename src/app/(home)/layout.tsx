import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { ReactQueryClientProvider } from "../components/ReactQueryClientProvider";
import { PostHogProvider } from "../providers";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ReactQueryClientProvider>
        <html lang="en" className={`${GeistSans.variable}`} data-theme="light">
          <body className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <PostHogProvider>{children}</PostHogProvider>
          </body>
        </html>
      </ReactQueryClientProvider>
    </ClerkProvider>
  );
}
