import { booksOfTheBible } from "~/data/BibleBooks";
import BookCard from "../components/BookCard";
import { BookOpen, Crown, Scroll } from "lucide-react";

const newTestamentDivisions = [
  {
    name: "The Gospel Accounts",
    icon: Scroll,
    description: "The historical accounts of Jesus's Ministry",
    books: booksOfTheBible.filter((x) => x.division === "Gospel Account"),
  },
  {
    name: "Church History",
    icon: Scroll,
    description: "Early Church History after Christ Ministry",
    books: booksOfTheBible.filter((x) => x.division === "Church History"),
  },
  {
    name: "Paul's Epistles",
    icon: Crown,
    description: "Letters written from Paul",
    books: booksOfTheBible.filter((x) => x.division === "Pauline Epistle"),
  },
  {
    name: "General Epistles",
    icon: Crown,
    description: "Other letters written by church leaders",
    books: booksOfTheBible.filter((x) => x.division === "General Epistle"),
  },
  {
    name: "Prophecy",
    icon: BookOpen,
    description: "New Testament Prophecy",
    books: booksOfTheBible.filter((x) => x.division === "Prophecy"),
  },
];

export default function Page() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="blue-500 mb-4 text-4xl font-bold md:text-5xl">
          New Testament Books
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Explore the books of the New Testament, organized by their traditional
          divisions
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="relative w-full">
          {newTestamentDivisions.map((division) => {
            const IconComponent = division.icon;
            return (
              <div key={division.name} className="my-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                      {division.name}
                    </h2>
                    <p className="">{division.description}</p>
                  </div>
                  <span className="badge ml-auto">
                    {division.books.length} books
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {division.books.map((book) => (
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
              <div className="text-3xl font-bold text-slate-800">27</div>
              <div className="text-slate-600">Total Books</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">260</div>
              <div className="text-slate-600">Total Chapters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">4</div>
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
