import { motion } from "framer-motion";
import { useEffect } from "react";
import { useGameStore } from "~/Stores/gameStore";
import GameSettingsModal from "../learn/components/GameSettings";

export const GameToolbar = () => {
  const gameStore = useGameStore();

  useEffect(() => {
    if (!gameStore.gameStart || gameStore.gameOver) return;
    const interval = setInterval(() => {
      if (gameStore.currentTimer <= 1) {
        clearInterval(interval);
        gameStore.setGameOver(true);
        gameStore.setTimer(0);
      } else {
        gameStore.setTimer(gameStore.currentTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStore.gameOver, gameStore.currentTimer, gameStore.gameStart]);

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold text-red-600">
          ⏳ Time Left: {gameStore.currentTimer}
          <GameSettingsModal />
        </div>
      </div>
      {gameStore.currentScore > 3 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="rounded-full bg-green-100 px-4 py-2 text-green-700"
        >
          🔥 {gameStore.currentScore} Streak!
        </motion.div>
      )}
    </div>
  );
};
