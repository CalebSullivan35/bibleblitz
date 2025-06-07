import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { booksOfTheBible } from "~/data/BibleBooks";
import { handleUserHighScore } from "~/db/actions";
import {
  getDisplayChoices,
  getRandomBibleBook,
  getNextBook,
} from "~/helpers/gamehelper";
import { type BibleBook } from "~/types/biblebooks";

type GameStore = {
  currentScore: number;
  setCurrentScore: (newScore: number) => void;
  correctBook: BibleBook;
  setCorrectBook: (bibleBook: BibleBook) => void;
  currentBook: BibleBook;
  setCurrentBook: (BibleBook: BibleBook) => void;
  options: BibleBook[];
  setOptions: (bibleBook: BibleBook[]) => void;
  selectedOption: BibleBook | null;
  setSelectedOption: (BibleBook: BibleBook | null) => void;
  handleNewCorrectBook: () => void;
  selectOption: (book: BibleBook) => void;
  currentTimer: number;
  setTimer: (time: number) => void;
  gameStart: boolean;
  setGameStart: (bool: boolean) => void;
  gameOver: boolean;
  setGameOver: (bool: boolean) => void;
  correctCount: number;
  increaseCorrectCount: () => void;
  missedCount: number;
  increaseMissedCount: () => void;
  resetGame: () => void;
};
//TODO: Need to refactor and learn how to subscribe to events with Zustand properly, that way we can handle complex state changes inside of here and not rely upon useEffects.
export const useGameStore = create(
  subscribeWithSelector<GameStore>((set, get) => ({
    currentScore: 0,

    setCurrentScore: (newScore) => {
      handleUserHighScore(newScore)
        .then(() => {
          set(() => ({ currentScore: newScore }));
        })
        .catch((error) => {
          console.error("Error handling user high score:", error);
        });
    },

    correctBook: booksOfTheBible[1]!,
    setCorrectBook: (bibleBook) => set(() => ({ correctBook: bibleBook })),

    currentBook: booksOfTheBible[0]!,
    setCurrentBook: (bibleBook) => {
      set(() => ({ currentBook: bibleBook }));
    },

    options: getDisplayChoices(
      3,
      booksOfTheBible[1]!,
      true,
      booksOfTheBible[0]!,
    ),
    setOptions: (bibleBooks) => set(() => ({ options: bibleBooks })),

    selectedOption: null,
    setSelectedOption: (bibleBook) =>
      set(() => ({ selectedOption: bibleBook })),

    handleNewCorrectBook: () => {
      const newCurrentBook = getRandomBibleBook();
      const newCorrectBook = getNextBook(newCurrentBook);
      const newOptions = getDisplayChoices(
        3,
        newCorrectBook,
        true,
        newCurrentBook,
      );
      set({
        currentBook: newCurrentBook,
        correctBook: newCorrectBook,
        options: newOptions,
        selectedOption: null,
      });
    },

    selectOption: (book: BibleBook) => {
      const {
        correctBook,
        setSelectedOption,
        increaseCorrectCount,
        increaseMissedCount,
        gameStart,
        setGameStart,
        handleNewCorrectBook,
      } = get();
      setSelectedOption(book);
      //if game has not started then initate it,
      if (!gameStart) {
        setGameStart(true);
      }
      if (correctBook === book) {
        increaseCorrectCount();
        handleNewCorrectBook();
      } else {
        increaseMissedCount();
      }
    },

    //Time Clock
    currentTimer: 10,
    setTimer: (timer) => set(() => ({ currentTimer: timer })),

    //game started
    gameStart: false,
    setGameStart: (started: boolean) => set({ gameStart: started }),

    //game Over
    gameOver: false,
    setGameOver: (ended: boolean) => set({ gameOver: ended }),

    //correct Count
    correctCount: 0,
    increaseCorrectCount: () =>
      set((state) => ({ correctCount: state.correctCount + 1 })),

    // Missed Count
    missedCount: 0,
    increaseMissedCount: () =>
      set((state) => ({ missedCount: state.missedCount + 1 })),

    resetGame: () =>
      set(() => ({
        missedCount: 0,
        correctCount: 0,
        selectedOption: null,
        gameOver: false,
        gameStart: false,
        currentTimer: 60,
      })),
  })),
);
