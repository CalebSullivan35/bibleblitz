import Link from "next/link";
import { type BibleBook } from "~/types/biblebooks";

interface BookCardProps {
  book: BibleBook;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      key={book.name}
      href={`/${book.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-md transition-all hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <h3 className="relative text-lg font-semibold text-gray-900">
        {book.name}
      </h3>
    </Link>
  );
}
