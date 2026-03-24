import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { AnimatedContent } from "@/app/components/AnimatedContent";

export const metadata: Metadata = {
  title: "Explore – Bible Blitz",
};

export default function ExplorePage() {
  return (
    <AnimatedContent>
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Explore</h1>
        <p className="mt-1 text-muted-foreground">
          Browse all 66 books organized by testament
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Link href="/explore/old-testament" className="group">
            <div className="flex flex-col items-center rounded-xl border bg-card p-10 text-center transition-all hover:scale-[1.02] hover:shadow-md">
              <BookOpen className="mb-3 size-12 text-primary" />
              <h2 className="text-2xl font-bold">Old Testament</h2>
              <p className="mt-1 text-muted-foreground">39 Books</p>
              <div className="mt-6 h-0.5 w-16 rounded-full bg-primary/30" />
            </div>
          </Link>

          <Link href="/explore/new-testament" className="group">
            <div className="flex flex-col items-center rounded-xl border bg-card p-10 text-center transition-all hover:scale-[1.02] hover:shadow-md">
              <BookOpen className="mb-3 size-12 text-primary" />
              <h2 className="text-2xl font-bold">New Testament</h2>
              <p className="mt-1 text-muted-foreground">27 Books</p>
              <div className="mt-6 h-0.5 w-16 rounded-full bg-primary/30" />
            </div>
          </Link>
        </div>
      </div>
    </AnimatedContent>
  );
}
