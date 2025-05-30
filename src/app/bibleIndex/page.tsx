"use client";
import { booksOfTheBible } from "~/data/BibleBooks";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTestament, setSelectedTestament] = useState<
    "All" | "Old" | "New"
  >("All");

  const oldTestamentBooks = booksOfTheBible.filter(
    (book) => book.Testament === "Old",
  );
  const newTestamentBooks = booksOfTheBible.filter(
    (book) => book.Testament === "New",
  );

  const filteredBooks = booksOfTheBible.filter((book) => {
    const matchesSearch = book.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTestament =
      selectedTestament === "All" || book.Testament === selectedTestament;
    return matchesSearch && matchesTestament;
  });

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <h1 className="blue-500 text-center text-4xl font-bold sm:text-5xl">
          Bible Books
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          Explore the books of the Bible and start your learning journey
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mx-auto mt-8 max-w-3xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            {(["All", "Old", "New"] as const).map((testament) => (
              <button
                key={testament}
                onClick={() => setSelectedTestament(testament)}
                className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                  selectedTestament === testament
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {testament} Testament
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="mx-auto mt-8 max-w-7xl">
        <div className="relative w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {selectedTestament === "All" ? (
              <>
                <div className="col-span-full mb-6">
                  <h2 className="text-grey-800 text-4xl font-bold">
                    Old Testament
                  </h2>
                </div>
                {oldTestamentBooks.map((book) => (
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
                      Old Testament
                    </p>
                    <p className="relative mt-2 text-sm text-gray-600">
                      Book Category: {book.Category}
                    </p>
                  </Link>
                ))}
                <div className="col-span-full mb-6 mt-12">
                  <h2 className="text-grey-800 text-4xl font-bold">
                    New Testament
                  </h2>
                </div>
                {newTestamentBooks.map((book) => (
                  <Link
                    key={book.name}
                    href={`/learn/${book.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <h3 className="relative text-lg font-semibold text-gray-900">
                      {book.name}
                    </h3>
                    <p className="relative mt-2 text-sm text-gray-600">
                      New Testament
                    </p>
                  </Link>
                ))}
              </>
            ) : (
              <>
                <div className="col-span-full mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedTestament} Testament
                  </h2>
                </div>
                {filteredBooks.map((book) => (
                  <Link
                    key={book.name}
                    href={`/learn/${book.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <h3 className="relative text-lg font-semibold text-gray-900">
                      {book.name}
                    </h3>
                    <p className="relative mt-2 text-sm text-gray-600">
                      {book.Testament} Testament
                    </p>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
