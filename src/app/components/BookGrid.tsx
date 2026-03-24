import groupBy from "lodash/groupBy";
import { type BibleBook } from "@/types/biblebooks";
import { BookCard } from "./BookCard";

const divisionLabels: Record<string, string> = {
  Law: "Law",
  History: "History",
  Poetry: "Poetry",
  "Major Prophet": "Major Prophets",
  "Minor Prophet": "Minor Prophets",
  "Gospel Account": "Gospel Accounts",
  "Church History": "Church History",
  "Pauline Epistle": "Pauline Epistles",
  "General Epistle": "General Epistles",
  Prophecy: "Prophecy",
};

function divisionDotClass(division: string): string {
  const map: Record<string, string> = {
    Law: "bg-division-law",
    History: "bg-division-history",
    Poetry: "bg-division-poetry",
    "Major Prophet": "bg-division-major-prophet",
    "Minor Prophet": "bg-division-minor-prophet",
    "Gospel Account": "bg-division-gospel",
    "Church History": "bg-division-church-history",
    "Pauline Epistle": "bg-division-pauline",
    "General Epistle": "bg-division-general",
    Prophecy: "bg-division-prophecy",
  };
  return map[division] ?? "bg-muted-foreground";
}

export function BookGrid({ books }: { books: BibleBook[] }) {
  const grouped = groupBy(books, "division");

  // Preserve insertion order from the data (already sorted by division)
  const divisions = Object.keys(grouped);

  return (
    <div className="space-y-10">
      {divisions.map((division) => (
        <section key={division}>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <span className={`inline-block size-2.5 rounded-full ${divisionDotClass(division)}`} />
            {divisionLabels[division] ?? division}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {grouped[division].map((book) => (
              <BookCard key={book.name} book={book} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
