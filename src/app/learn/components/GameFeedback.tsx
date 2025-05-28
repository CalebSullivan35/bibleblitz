"use client";
import { useGameStore } from "~/Stores/gameStore";

export const GameFeedback = () => {
  const { selectedOption, correctBook } = useGameStore();
  return selectedOption !== null ? (
    <span
      className={`${selectedOption === correctBook ? "text-green-400" : "text-red-500"} sm:text-xl`}
    >
      {selectedOption === correctBook ? "Correct!" : "Incorrect!"}
    </span>
  ) : (
    <span>&nbsp;</span>
  );
};
