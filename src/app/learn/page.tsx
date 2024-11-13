"use client";
import { booksOfTheBible } from "~/data/BibleBooks";
import {
  getNextBook,
  newBookButtonCheckForAnswer,
} from "../../helpers/gamehelper";
import { GameOptions } from "../components/GameOptions";
import { GameFeedback } from "../components/GameFeedback";
import { usePracticeToolStore } from "~/Stores/practiceToolStore";

export default function Page() {
  const practiceToolStore = usePracticeToolStore();
  const isRightBook =
    practiceToolStore.selectedOption === practiceToolStore.correctBook;

  return (
    <div className="mt-4 h-full sm:mt-24">
      <div className="flex flex-col items-center">
        <span className="text-4xl sm:text-6xl">
          {practiceToolStore.currentBook?.name}
        </span>
        <div className="mb-6 flex flex-col items-center justify-center">
          <span className="text-lg sm:text-xl">What comes next?</span>
          <GameFeedback />
        </div>
        <GameOptions />
        <div className="flex justify-center gap-10 pl-4 sm:w-[600px]">
          <button
            className={`sm:text-md btn btn-error text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
            onClick={() => {
              //TODO: Handle this in the store and pass it down instead of this.
              practiceToolStore.setCorrectBook(booksOfTheBible[0]!);
              practiceToolStore.setSelectedOption(null);
            }}
          >
            Restart
          </button>
          <button
            className={`sm:text-md ${isRightBook ? "btn-primary" : "btn-error"}
btn text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
            //TODO: See if we can change this to be handled all in the zustand store instead.
            onClick={async () => {
              await practiceToolStore.handleNextBook(),
                newBookButtonCheckForAnswer(
                  practiceToolStore.selectedOption,
                  practiceToolStore.setCurrentScore,
                );
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
