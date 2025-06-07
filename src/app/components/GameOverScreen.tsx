import { motion } from "framer-motion";
import { useGameStore } from "~/Stores/gameStore";

export const GameOverScreen = () => {
  const gameStore = useGameStore();
  const finalPercent =
    gameStore.correctCount + gameStore.missedCount === 0
      ? 0
      : parseFloat(
          (
            (gameStore.correctCount /
              (gameStore.correctCount + gameStore.missedCount)) *
            100
          ).toFixed(2),
        );

  return (
    <div className=" flex h-full flex-col">
      <div className=" mb-4 text-center text-6xl font-bold text-blue-600">
        Game Over!
      </div>
      <div className="flex flex-row justify-evenly">
        <div
          className=" radial-progress m-4 mb-8 text-xl text-primary"
          style={
            {
              "--value": finalPercent,
              "--size": "8rem",
            } as React.CSSProperties
          }
          aria-valuenow={0}
          role="progressbar"
        >
          {finalPercent}%
        </div>

        <div className=" flex flex-col justify-center text-4xl">
          <p className="mb-2 text-green-700">
            {gameStore.correctCount} Correct
          </p>
          <p className="mb-2 text-red-700">{gameStore.missedCount} incorrect</p>
        </div>
      </div>

      {/* make a custom button for this dude */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto rounded-lg bg-blue-600 py-3 text-4xl font-semibold text-white transition-colors"
        onClick={() => {
          gameStore.resetGame();
        }}
      >
        Restart
      </motion.button>
    </div>
  );
};
