import { create } from "zustand";
import { BibleBook } from "../types/biblebooks";
import { booksOfTheBible } from "~/data/BibleBooks";
import { handleUserHighScore } from "../db/actions";
import {
  getDisplayChoices,
  getNextBook,
  getRandomBibleBook,
} from "../helpers/gamehelper";

type GameStore = {
  currentScore: number;
  setCurrentScore: (newScore: number) => void;
  correctBook: BibleBook | undefined;
  setCorrectBook: (bibleBook: BibleBook) => void;
  currentBook: BibleBook | undefined;
  setCurrentBook: (BibleBook: BibleBook) => void;
  options: BibleBook[] | undefined;
  setOptions: (bibleBook: BibleBook[]) => void;
  selectedOption: BibleBook | null;
  setSelectedOption: (BibleBook: BibleBook) => void;
  handleNewCorrectBook: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  currentScore: 0,
  setCurrentScore: async (newScore) => {
    await handleUserHighScore(newScore);
    set(() => ({ currentScore: newScore }));
  },
  correctBook: booksOfTheBible[1],
  setCorrectBook: (bibleBook) => set(() => ({ correctBook: bibleBook })),
  currentBook: booksOfTheBible[0],
  setCurrentBook: (bibleBook) => {
    set(() => ({ currentBook: bibleBook }));
  },
  options: [],
  setOptions: (bibleBooks) => set(() => ({ options: bibleBooks })),
  selectedOption: null,
  setSelectedOption: (bibleBook) => set(() => ({ selectedOption: bibleBook })),
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
}));
