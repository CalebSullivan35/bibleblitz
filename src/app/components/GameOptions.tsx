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
        <div className="mx-auto grid grid-cols-2 gap-4 sm:w-[400px]">
          {gameStore.options.map((bibleBook, index) => (
            <button
              disabled={gameStore.correctBook === gameStore.selectedOption}
              key={index}
              className={`flex h-20 items-center justify-center rounded-xl border-2 font-medium shadow-md transition-all hover:scale-[1.02] hover:shadow-lg ${
                gameStore.selectedOption
                  ? bibleBook === gameStore.selectedOption
                    ? bibleBook === gameStore.correctBook
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-red-500 bg-red-50 text-red-700"
                    : "border-gray-200 hover:border-blue-300"
                  : "border-gray-200 hover:border-blue-300"
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
