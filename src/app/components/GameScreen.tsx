import { AnimatePresence, motion } from "framer-motion";
import { newBookButtonCheckForAnswer } from "~/helpers/gamehelper";
import { GameFeedback } from "./GameFeedback";
import { GameOptions } from "./GameOptions";
import { useGameStore } from "~/Stores/gameStore";

export const GameScreen = () => {
  const gameStore = useGameStore();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gameStore.currentBook?.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex flex-col items-center"
      >
        {/* Current Book Display */}
        <div className="mb-8 w-full rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-8">
          <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-blue-600">
            Current Book
          </h2>
          <h1 className="text-center text-4xl font-bold text-gray-900">
            {gameStore.currentBook?.name}
          </h1>
        </div>
        {/* Game Options */}
        <div className="w-full">
          <h3 className="text-center text-xl font-medium text-gray-600">
            What comes next?
          </h3>
          <GameFeedback />
          <GameOptions />
        </div>
        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={gameStore.selectedOption === null}
          className={`mt-8 rounded-lg px-8 py-3 text-lg font-semibold transition-colors ${
            gameStore.selectedOption === gameStore.correctBook
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => {
            gameStore.handleNewCorrectBook();
            newBookButtonCheckForAnswer(
              gameStore.selectedOption,
              gameStore.setCurrentScore,
            );
          }}
        >
          Next Book
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};
