"use client";
import { useGameStore } from "~/Stores/gameStore";
import { GameOverScreen } from "./GameOverScreen";
import { GameScreen } from "./GameScreen";
import { GameToolbar } from "./GameToolbar";

export const BibleGame = () => {
  const gameStore = useGameStore();

  return (
    <div className="sm:mx-auto">
      <GameToolbar />
      <div className=" rounded-xl bg-white p-4 shadow-xl sm:h-[550px] sm:w-[600px] sm:p-8">
        {gameStore.gameOver ? <GameOverScreen /> : <GameScreen />}
      </div>
    </div>
  );
};
