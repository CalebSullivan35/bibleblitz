"use client";
import { useGameStore } from "~/Stores/gameStore";
import { newBookButtonCheckForAnswer } from "../../helpers/gamehelper";
import { GameFeedback } from "./GameFeedback";
import { GameOptions } from "./GameOptions";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton, useUser } from "@clerk/nextjs";
import { getUserHighScore } from "~/db/actions";
import { useEffect, useState } from "react";

export const BibleGame = () => {
  const gameStore = useGameStore();
  const { isLoaded, isSignedIn, user } = useUser();
  const [highScore, setHighScore] = useState<number | null>(null);

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      const fetchHighScore = async () => {
        const score = await getUserHighScore(user.id);
        setHighScore(score?.score ?? null);
      };

      void fetchHighScore();
    }
  }, [isLoaded, isSignedIn, user]);

  return (
    <div className=" min-w-[340px] sm:mx-auto">
      {/* Score Display */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {highScore ? (
            <div className="rounded-lg bg-white p-4 shadow-md">
              <span className="block text-sm text-gray-600">
                Current High Score
              </span>
              <span className="text-2xl font-bold text-blue-600">
                {highScore}
              </span>
            </div>
          ) : (
            <SignInButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-48 rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Track Your High Score!
              </motion.button>
            </SignInButton>
          )}
        </div>
        {gameStore.currentScore > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="rounded-full bg-green-100 px-4 py-2 text-green-700"
          >
            🔥 {gameStore.currentScore} Streak!
          </motion.div>
        )}
      </div>
      {/* Game Area */}
      <div className="rounded-xl bg-white p-4 shadow-xl sm:p-8">
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
              <h3 className="mb-4 text-center text-xl font-medium text-gray-600">
                What comes next?
              </h3>
              <div className="mb-4 text-center">
                <GameFeedback />
              </div>
              <GameOptions />
            </div>
            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-8 w-48 rounded-lg px-8 py-3 text-lg font-semibold transition-colors ${
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
      </div>
    </div>
  );
};
