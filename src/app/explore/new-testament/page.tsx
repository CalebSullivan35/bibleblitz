import type { Metadata } from "next";
import { booksOfTheBible } from "@/data/BibleBooks";
import { BookGrid } from "@/app/components/BookGrid";
import { AnimatedContent } from "@/app/components/AnimatedContent";

export const metadata: Metadata = {
  title: "New Testament – Bible Blitz",
};

const newTestamentBooks = booksOfTheBible.filter(
  (b) => b.testament === "New"
);

export default function NewTestamentPage() {
  return (
    <AnimatedContent>
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">New Testament</h1>
        <p className="mt-1 text-muted-foreground">27 Books</p>
        <div className="mt-8">
          <BookGrid books={newTestamentBooks} />
        </div>
      </div>
    </AnimatedContent>
  );
}
