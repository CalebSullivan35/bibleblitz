"use client";

import { useEffect, useState } from "react";
import { usePracticeToolStore } from "~/Stores/practiceToolStore";
export const GameOptions = () => {
  const practiceToolStore = usePracticeToolStore();
  //hydration issue that occurs due to random number generation
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated && (
        <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-4 px-4 sm:grid-cols-4">
          {practiceToolStore.options.map((bibleBook, index) => (
            <button
              disabled={
                practiceToolStore.correctBook ===
                practiceToolStore.selectedOption
              }
              key={index}
              className={`btn btn-neutral h-16 w-full min-w-0 text-sm shadow-md transition-all hover:scale-[1.02] hover:shadow-lg sm:h-20 sm:text-base lg:text-lg ${
                practiceToolStore.selectedOption
                  ? bibleBook === practiceToolStore.selectedOption
                    ? bibleBook === practiceToolStore.correctBook
                      ? "text-green-400"
                      : "text-red-500"
                    : ""
                  : ""
              }`}
              onClick={() => practiceToolStore.setSelectedOption(bibleBook)}
            >
              <span className="truncate">{bibleBook.name}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};
