"use client";
import { useEffect, useState } from "react";
import { booksOfTheBible } from "~/data/BibleBooks";
import { generateOptions, getRandomBibleBookName } from "./helpers/gamehelper";

export default function HomePage() {
  const [book, setBook] = useState(getRandomBibleBookName());
  
  useEffect(() => {
    generateOptions(book);
  }, [book]);

  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-col items-center">
        <span className="mb-6 text-6xl">{book?.name}</span>
        <button
          className="w-fit rounded border"
          onClick={() => {
            setBook(getRandomBibleBookName());
          }}
        >
          Click for A new book
        </button>
      </div>
    </main>
  );
}
