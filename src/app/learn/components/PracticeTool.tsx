import { GameFeedback } from "~/app/components/GameFeedback";
import { usePracticeToolStore } from "~/Stores/practiceToolStore";
import { GameOptions } from "./GameOptions";

const PracticeTool = () => {
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
                    practiceToolStore.restartPracticeTool();
                  }}
                >
                  Restart
                </button>
                <button
                  className={`sm:text-md ${isRightBook ? "btn-primary" : "btn-error"}
            btn text-base [&:not(:hover)]:btn-outline lg:text-lg xl:text-2xl`}
                  onClick={() => {
                  practiceToolStore.handleNextBook();
                  
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
    )
}
export default PracticeTool
