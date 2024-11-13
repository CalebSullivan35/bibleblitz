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
import { BibleBook } from "~/types/biblebooks";

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
    setCurrentScore: async (newScore) => {
      await handleUserHighScore(newScore);
      set(() => ({ currentScore: newScore }));
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
      set({ currentBook: newCurrentBook });
      const newCorrectBook = getNextBook(newCurrentBook);
      set({ correctBook: newCorrectBook });
      const newOptions = getDisplayChoices(
        3,
        newCorrectBook,
        true,
        newCurrentBook,
      );
      set({ options: newOptions });
      set({ selectedOption: null });
    },
    selectOption: async (book: BibleBook) => {
      const { correctBook, currentScore, setSelectedOption, setCurrentScore } =
        get();
      setSelectedOption(book);
      await trackScore(correctBook!, book, currentScore, setCurrentScore);
    },
  })),
);
