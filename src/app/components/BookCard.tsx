import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { BibleBook } from "@/types/biblebooks";
import { toBookSlug } from "@/lib/slugify";
import { cn } from "@/lib/utils";

function divisionColorClass(division: string): string {
  const map: Record<string, string> = {
    Law: "border-l-division-law",
    History: "border-l-division-history",
    Poetry: "border-l-division-poetry",
    "Major Prophet": "border-l-division-major-prophet",
    "Minor Prophet": "border-l-division-minor-prophet",
    "Gospel Account": "border-l-division-gospel",
    "Church History": "border-l-division-church-history",
    "Pauline Epistle": "border-l-division-pauline",
    "General Epistle": "border-l-division-general",
    Prophecy: "border-l-division-prophecy",
  };
  return map[division] ?? "";
}

export function BookCard({ book }: { book: BibleBook }) {
  return (
    <Link href={`/explore/${toBookSlug(book.name)}`}>
      <Card
        className={cn(
          "border-l-2 transition-all hover:scale-[1.02] hover:shadow-md",
          divisionColorClass(book.division)
        )}
        size="sm"
      >
        <CardHeader>
          <CardTitle>{book.name}</CardTitle>
          <CardDescription>
            {book.chapters} {book.chapters === 1 ? "chapter" : "chapters"}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
