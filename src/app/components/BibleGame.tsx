"use client";
import { useState, useEffect } from "react";
import { booksOfTheBible } from "~/data/BibleBooks";
import {
  getNextBook,
  getDisplayChoices,
  getRandomBibleBookName,
  newBookButtonCheckForAnswer,
} from "../helpers/gamehelper";
import { type BibleBook } from "../types/biblebooks";
import { GameFeedback } from "./GameFeedback";
import { GameOptions } from "./GameOptions";
import { handleUserHighScore } from "../db/actions";

export const BibleGame = () => {
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

  useEffect(() => {
    handleUserHighScore;
  }, [currentScore]);

  return (
    <div className="flex flex-col items-center">
      <div className="fixed bottom-24  flex flex-col text-center sm:left-20 sm:top-20 sm:text-3xl">
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
        className={`sm:text-md ${selectedOption === correctBook ? "btn-primary" : "btn-error"}
 btn text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
        onClick={() => {
          setBook(getRandomBibleBookName());
          setSelectedOption(null);
          newBookButtonCheckForAnswer(selectedOption, setCurrentScore);
        }}
      >
        Click for a new book
      </button>
    </div>
  );
};
