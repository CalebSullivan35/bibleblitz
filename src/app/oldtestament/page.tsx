import { booksOfTheBible } from "~/data/BibleBooks";
import BookCard from "../components/BookCard";
import { Book, BookOpen, Crown, Eye, Scroll } from "lucide-react";

const oldTestamentDivisions = [
  {
    name: "The Law (Torah)",
    icon: Scroll,
    description: "The Five Books of Moses",
    books: booksOfTheBible.filter((x) => x.division === "Law"),
  },
  {
    name: "Historical Books",
    icon: Crown,
    description: "History of Israel",
    books: booksOfTheBible.filter((x) => x.division === "History"),
  },
  {
    name: "Wisdom & Poetry",
    icon: BookOpen,
    description: "Poetic and wisdom literature",
    books: booksOfTheBible.filter((x) => x.division === "Poetry"),
  },
  {
    name: "Major Prophets",
    icon: Eye,
    description: "The longer Prophet books",
    books: booksOfTheBible.filter((x) => x.division === "Major Prophet"),
  },
  {
    name: "Minor Prophets",
    icon: Book,
    description: "The Shorter Prophet books",
    books: booksOfTheBible.filter((x) => x.division === "Minor Prophet"),
  },
];

export default function Page() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="blue-500 mb-4 text-4xl font-bold md:text-5xl">
          Old Testament Books
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Explore the 39 books of the Old Testament, organized by their
          traditional divisions
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="relative w-full">
          {oldTestamentDivisions.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.name} className="my-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                      {category.name}
                    </h2>
                    <p className="">{category.description}</p>
                  </div>
                  <span className="badge ml-auto">
                    {category.books.length} books
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {category.books.map((book) => (
                    <BookCard key={book.name} book={book} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 rounded-2xl bg-white p-8 shadow-lg">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-slate-800">39</div>
              <div className="text-slate-600">Total Books</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">929</div>
              <div className="text-slate-600">Total Chapters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">5</div>
              <div className="text-slate-600">Divisions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">~400</div>
              <div className="text-slate-600">Years Written</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
