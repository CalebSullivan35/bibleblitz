"use client";
import { useState, useEffect } from "react";
import { booksOfTheBible } from "~/data/BibleBooks";
import {
  getNextBook,
  getDisplayChoices,
  newBookButtonCheckForAnswer,
} from "../helpers/gamehelper";
import { type BibleBook } from "../types/biblebooks";
import { GameOptions } from "../components/GameOptions";
import { GameFeedback } from "../components/GameFeedback";

export default function Page() {
  const [book, setBook] = useState(booksOfTheBible[0]!);
  const [correctBook, setCorrectBook] = useState<BibleBook>();
  const [options, setOptions] = useState<BibleBook[]>([]);
  const [selectedOption, setSelectedOption] = useState<BibleBook | null>(null);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    const nextBook = getNextBook(book);
    setCorrectBook(nextBook);
    setOptions(getDisplayChoices(3, nextBook, true, book));
    setSelectedOption(null);
  }, [book]);

  return (
    <>
      <div className="mt-4 h-full sm:mt-24">
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-6xl">{book.name}</span>
          <div className="mb-6 flex flex-col items-center justify-center">
            <span className="text-lg sm:text-xl">What comes next?</span>
            <GameFeedback
              selectedOption={selectedOption}
              correctBook={correctBook}
            />
          </div>
          <GameOptions
            options={options}
            correctBook={correctBook}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
          />
          <div className="flex justify-center gap-10 pl-4 sm:w-[600px]">
            <button
              className={`sm:text-md btn btn-error  text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
              onClick={() => {
                setBook(booksOfTheBible[0]!);
                setSelectedOption(null);
              }}
            >
              Restart
            </button>
            <button
              className={`sm:text-md ${selectedOption === correctBook ? "btn-primary" : "btn-error"}
btn text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
              onClick={() => {
                setBook(getNextBook(book));
                setSelectedOption(null);
                newBookButtonCheckForAnswer(selectedOption, setCurrentScore);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
