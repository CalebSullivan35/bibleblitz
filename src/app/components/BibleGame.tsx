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
import { HighScore } from "./HighScore";

interface BibleGameProps {
  CurrentHighScore: number | undefined;
}

export const BibleGame = ({ CurrentHighScore }: BibleGameProps) => {
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
    <>
      <div className="h-full">
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
      </div>
      {CurrentHighScore ? (
        <div className="text-md m-10 flex w-full flex-row items-center justify-between px-10 text-base sm:w-fit ">
          <div className="flex flex-col text-center sm:mr-24 sm:text-3xl">
            <span>Current Streak</span>
            <span>{currentScore}</span>
          </div>
          {CurrentHighScore && <HighScore score={CurrentHighScore} />}
        </div>
      ) : (
        <div className=" m-10 px-10 text-base sm:w-fit ">
          <div className="flex flex-col text-center sm:text-3xl">
            <span>Current Streak</span>
            <span>{currentScore}</span>
          </div>
        </div>
      )}
    </>
  );
};
