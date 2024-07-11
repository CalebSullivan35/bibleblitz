"use client";
import { useState, useEffect } from "react";
import { booksOfTheBible } from "~/data/BibleBooks";
import {
  getNextBook,
  getDisplayChoices,
  getRandomBibleBookName,
  newBookButtonCheckForAnswer,
} from "../helpers/gamehelper";
import { BibleBook } from "../types/biblebooks";
import { GameFeedback } from "./GameFeedback";
import { GameOptions } from "./GameOptions";

export const BibleGame = () => {
  const [book, setBook] = useState(booksOfTheBible[0]!);
  const [correctBook, setCorrectBook] = useState<BibleBook>();
  const [options, setOptions] = useState<BibleBook[]>([]);
  const [selectedOption, setSelectedOption] = useState<BibleBook | null>(null);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    const nextBook = getNextBook(book);
    setCorrectBook(nextBook);
    setOptions(getDisplayChoices(3, nextBook, true));
    setSelectedOption(null);
  }, [book]);

  return (
    <div className="flex flex-col items-center">
      <div className="absolute left-10 top-10 flex flex-col text-center sm:text-3xl">
        <span>Current Streak!</span>
        <span>{currentScore}</span>
      </div>
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
      <button
        className="rounded border bg-white p-2 text-black"
        onClick={() => {
          setBook(getRandomBibleBookName());
          setSelectedOption(null);
          newBookButtonCheckForAnswer(selectedOption, setCurrentScore);
        }}
      >
        Click for A new book
      </button>
    </div>
  );
};
