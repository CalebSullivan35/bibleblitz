import { GeistSans } from "geist/font";
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
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
