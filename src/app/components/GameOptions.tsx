"use client";

import { useEffect, useState } from "react";
import { useGameStore } from "~/Stores/gameStore";

export const GameOptions = () => {
  const gameStore = useGameStore();
  //hydration issue that occurs due to random number generation
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated && (
        <div className="mb-6 grid w-screen grid-cols-2 sm:w-fit sm:grid-cols-4">
          {gameStore.options.map((bibleBook, index) => (
            <button
              disabled={gameStore.correctBook === gameStore.selectedOption}
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
              onClick={() => gameStore.selectOption(bibleBook)}
            >
              {bibleBook.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
