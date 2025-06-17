"use client";
import { useGameStore } from "~/Stores/gameStore";

export const GameFeedback = () => {
  const { selectedOption, correctBook } = useGameStore();
  return (
    <div
      className={`${selectedOption === correctBook ? "text-green-400" : "text-red-500"} mb-2 flex justify-center sm:text-xl`}
    >
      {selectedOption !== null
        ? selectedOption === correctBook
          ? "Correct!"
          : "Incorrect"
        : "\u00A0"}
    </div>
  );
};
