import type { Metadata } from "next";
import { booksOfTheBible } from "@/data/BibleBooks";
import { BookGrid } from "@/app/components/BookGrid";
import { AnimatedContent } from "@/app/components/AnimatedContent";

export const metadata: Metadata = {
  title: "Old Testament – Bible Blitz",
};

const oldTestamentBooks = booksOfTheBible.filter(
  (b) => b.testament === "Old"
);

export default function OldTestamentPage() {
  return (
    <AnimatedContent>
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Old Testament</h1>
        <p className="mt-1 text-muted-foreground">39 Books</p>
        <div className="mt-8">
          <BookGrid books={oldTestamentBooks} />
        </div>
      </div>
    </AnimatedContent>
  );
}
