"use client";
import { useEffect, useState } from "react";
import {
  generateRandomOptionsWithCorrectAnswer,
  getNextBook,
  getRandomBibleBookName,
} from "./helpers/gamehelper";
import { booksOfTheBible } from "~/data/BibleBooks";
import { type BibleBook } from "./types/biblebooks";

export default function HomePage() {
  const [book, setBook] = useState(booksOfTheBible[0]!);
  const [correctBook, setCorrectBook] = useState<BibleBook>();
  const [options, setOptions] = useState<BibleBook[]>([]);
  const [selectedOption, setSelectedOption] = useState<BibleBook | null>(null);

  useEffect(() => {
    const nextBook = getNextBook(book);
    setCorrectBook(nextBook);
    setOptions(generateRandomOptionsWithCorrectAnswer(3, nextBook, true));
    setSelectedOption(null);
  }, [book]);

  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-b from-slate-600 to-slate-800 text-white">
      <div className="flex flex-col items-center">
        <span className=" text-6xl">{book.name}</span>
        <div className="mb-6 flex flex-col items-center justify-center">
          {" "}
          <span className="text-xl">What comes next?</span>
          {selectedOption !== null && (
            <span
              className={`${selectedOption === correctBook ? "text-green-400" : "text-red-500"}`}
            >
              {selectedOption === correctBook ? "Correct!" : "Wrong"}
            </span>
          )}
        </div>

        {options.length > 0 && (
          <div className="mb-6 flex flex-row">
            {options.map((x, index) => (
              <span
                key={index}
                className={`mx-4 cursor-pointer text-xl ${
                  selectedOption
                    ? x === selectedOption
                      ? x === correctBook
                        ? "text-green-400"
                        : "text-red-500"
                      : ""
                    : ""
                }`}
                onClick={() => setSelectedOption(x)}
              >
                {x.name}
              </span>
            ))}
          </div>
        )}
        <button
          className="rounded border bg-white p-2 text-black"
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
