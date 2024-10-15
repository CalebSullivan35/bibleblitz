"use client";
import { newBookButtonCheckForAnswer } from "../helpers/gamehelper";
import { GameFeedback } from "./GameFeedback";
import { GameOptions } from "./GameOptions";
import { HighScore } from "./HighScore";
import { useGameStore } from "../Stores/gameStore";

interface BibleGameProps {
  CurrentHighScore: number | undefined;
}

export const BibleGame = ({ CurrentHighScore }: BibleGameProps) => {
  const gameStore = useGameStore();

  return (
    <>
      <div className="mt-4 h-full sm:mt-24">
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-6xl">
            {gameStore.currentBook?.name}
          </span>
          <div className="mb-6 flex flex-col items-center justify-center">
            <span className="text-lg sm:text-xl">What comes next?</span>
            <GameFeedback />
          </div>
          <GameOptions />
          <button
            className={`sm:text-md ${gameStore.selectedOption === gameStore.correctBook ? "btn-primary" : "btn-error"}
 btn text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
            onClick={() => {
              gameStore.handleNewCorrectBook();
              newBookButtonCheckForAnswer(
                gameStore.selectedOption,
                gameStore.setCurrentScore,
              );
            }}
          >
            Click for a new book
          </button>
        </div>
      </div>
      {CurrentHighScore ? (
        <div className="mt-10 flex justify-center gap-20  pr-6 text-base sm:w-[600px] sm:pr-10">
          <div className="flex flex-col text-center sm:text-3xl">
            <span>Current Streak</span>
            <span>{gameStore.currentScore}</span>
          </div>
          {CurrentHighScore && <HighScore score={CurrentHighScore} />}
        </div>
      ) : (
        <div className="m-10 px-10 text-base sm:w-fit ">
          <div className="flex flex-col text-center sm:text-3xl">
            <span>Current Streak</span>
            <span>{gameStore.currentScore}</span>
          </div>
        </div>
      )}
    </>
  );
};
