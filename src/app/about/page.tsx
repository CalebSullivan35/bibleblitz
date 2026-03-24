import type { Metadata } from "next";
import { AnimatedContent } from "@/app/components/AnimatedContent";

export const metadata: Metadata = {
  title: "About – Bible Blitz",
};

export default function AboutPage() {
  return (
    <AnimatedContent>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">About Bible Blitz</h1>

        <section className="mt-8 space-y-4">
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Bible is 66 books, two testaments, and thousands of years of
            history — and honestly, keeping it all straight can feel overwhelming.
            Bible Blitz is here to make that a little easier (and a lot more fun).
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Think of it as part quiz game, part study companion. You can drill
            yourself on the books — their order, divisions, chapter counts — in
            quick rounds that fit into a spare minute. Or you can slow down and
            browse through every book, organized the way they appear in your Bible.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Playing</h2>
          <p className="leading-relaxed text-muted-foreground">
            Drills are fast on purpose. You get a prompt — a book name, a division,
            a chapter count — and race to answer before time runs out. The quicker
            you go, the more you score. Rounds are short enough to squeeze into a
            coffee break, but addictive enough that you&apos;ll want to keep going.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Exploring</h2>
          <p className="leading-relaxed text-muted-foreground">
            Not everything has to be a race. The Explore section lets you browse all
            66 books by testament and division — see the big picture, dig into
            individual books, and build a mental map of how Scripture fits together.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">What&apos;s Next</h2>
          <p className="leading-relaxed text-muted-foreground">
            Bible Blitz is still growing. More game modes, deeper study content,
            and new ways to engage with Scripture are all on the way. If you have
            ideas or feedback, we&apos;d genuinely love to hear them.
          </p>
        </section>
      </div>
    </AnimatedContent>
  );
}
