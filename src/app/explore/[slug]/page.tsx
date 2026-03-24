import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { booksOfTheBible } from "@/data/BibleBooks";
import { bookOverviews } from "@/data/bookOverviews";
import { toBookSlug } from "@/lib/slugify";
import { AnimatedContent } from "@/app/components/AnimatedContent";

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(bookOverviews).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const overview = bookOverviews[slug];
  if (!overview) return {};
  const book = booksOfTheBible.find((b) => toBookSlug(b.name) === slug);
  return { title: `${book?.name ?? slug} – Bible Blitz` };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const overview = bookOverviews[slug];
  if (!overview) notFound();

  const bookIndex = booksOfTheBible.findIndex(
    (b) => toBookSlug(b.name) === slug
  );
  const book = booksOfTheBible[bookIndex];
  if (!book) notFound();

  const prev = bookIndex > 0 ? booksOfTheBible[bookIndex - 1] : null;
  const next =
    bookIndex < booksOfTheBible.length - 1
      ? booksOfTheBible[bookIndex + 1]
      : null;

  return (
    <AnimatedContent>
      <div className="mx-auto max-w-3xl px-4 py-16">
        {/* Header */}
        <div className="rounded-xl bg-gradient-to-b from-primary/8 to-transparent px-6 py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
              {book.testament} Testament
            </span>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
              {book.division}
            </span>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
              {book.chapters} {book.chapters === 1 ? "chapter" : "chapters"}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">{book.name}</h1>
        </div>

        {/* Summary */}
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {overview.summary}
        </p>

        {/* Details */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Author
            </p>
            <p className="mt-1 text-base font-medium">{overview.author}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Date Written
            </p>
            <p className="mt-1 text-base font-medium">{overview.dateWritten}</p>
          </div>
        </div>

        {/* Key Themes */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Key Themes</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {overview.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mb-8 mt-16 flex items-center justify-between border-t pt-8">
          {prev ? (
            <Link
              href={`/explore/${toBookSlug(prev.name)}`}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="size-4" />
              {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/explore/${toBookSlug(next.name)}`}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {next.name}
              <ChevronRight className="size-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </AnimatedContent>
  );
}
