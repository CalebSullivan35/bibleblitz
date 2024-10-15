"use client";
import { useEffect } from "react";
import { getDisplayChoices, trackScore } from "../helpers/gamehelper";
import { useGameStore } from "../Stores/gameStore";

export const GameOptions = () => {
  const gameStore = useGameStore();

  useEffect(() => {
    gameStore.setOptions(
      getDisplayChoices(
        3,
        gameStore.correctBook!,
        true,
        gameStore.currentBook!,
      ),
    );
  }, [gameStore.correctBook, gameStore.currentBook]);

  return (
    <div className="mb-6 grid w-screen grid-cols-2 sm:w-fit sm:grid-cols-4">
      {gameStore.options!.map((bibleBook, index) => (
        <button
          key={index}
          className={`sm:text-md btn btn-neutral m-2 shadow-md sm:mx-4 sm:my-0 lg:text-lg xl:text-2xl ${
            gameStore.selectedOption
              ? bibleBook === gameStore.selectedOption
                ? bibleBook === gameStore.correctBook
                  ? "text-green-400"
                  : "text-red-500"
                : ""
              : ""
          }`}
          onClick={async () => {
            gameStore.setSelectedOption(bibleBook);
            await trackScore(
              gameStore.correctBook!,
              bibleBook,
              gameStore.currentScore,
              gameStore.setCurrentScore,
            );
          }}
        >
          {bibleBook.name}
        </button>
      ))}
    </div>
  );
};
