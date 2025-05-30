import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { booksOfTheBible } from "~/data/BibleBooks";
import { handleUserHighScore } from "~/db/actions";
import {
  getDisplayChoices,
  getRandomBibleBook,
  getNextBook,
  trackScore,
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
      const { correctBook, currentScore, setSelectedOption, setCurrentScore } =
        get();
      setSelectedOption(book);
      void trackScore(correctBook, book, currentScore, setCurrentScore);
    },
  })),
);
