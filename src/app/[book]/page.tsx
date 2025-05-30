"use client";

import { booksOfTheBible } from "~/data/BibleBooks";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function BookPage({ params }: { params: { book: string } }) {
  const router = useRouter();
  const bookName = params.book
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const book = booksOfTheBible.find((b) => b.name === bookName);

  useEffect(() => {
    if (!book) {
      router.push("/bibleIndex");
    }
  }, [book, router]);

  if (!book) {
    return null;
  }

  return (
    <div className="min-h-screen   px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-500">{book.name}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {book.Testament} Testament
          </p>
        </div>

        {/* Book Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-white p-8 shadow-xl"
        >
          <div className="prose-lg prose mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900">
              About {book.name}
            </h2>
            <p className="mt-4 text-gray-600">
              Coming soon: Detailed information about {book.name} including its
              author, historical context, key themes, and major events.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
