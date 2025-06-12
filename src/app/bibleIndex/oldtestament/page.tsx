"use client";
import { booksOfTheBible } from "~/data/BibleBooks";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const books = booksOfTheBible.filter((book) => book.Testament === "Old");

  //   const filteredBooks = booksOfTheBible.filter((book) => {
  //     const matchesSearch = book.name
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase());
  //     return matchesSearch;
  //   });

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="blue-500 text-center text-4xl font-bold sm:text-5xl">
          Old Testament Books
        </h1>
      </div>
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="relative w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {books.map((book) => (
              <Link
                key={book.name}
                href={`/${book.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-md transition-all hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="relative text-lg font-semibold text-gray-900">
                  {book.name}
                </h3>
                <p className="relative mt-2 text-sm text-gray-600">
                  Book Category: {book.Category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
