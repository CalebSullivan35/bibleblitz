import { booksOfTheBible } from "~/data/BibleBooks";
import { getNextBook, getDisplayChoices } from "../helpers/gamehelper";
import { create } from "zustand";
import { type BibleBook } from "~/types/biblebooks";

type PracticeTool = {
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
  handleNextBook: () => void;
  restartPracticeTool: () => void;
};

export const usePracticeToolStore = create<PracticeTool>((set, get) => ({
  currentScore: 0,
  setCurrentScore: (newScore) => set(() => ({ currentScore: newScore })),
  correctBook: booksOfTheBible[1]!,
  setCorrectBook: (bibleBook) => set(() => ({ correctBook: bibleBook })),
  currentBook: booksOfTheBible[0]!,
  setCurrentBook: (bibleBook) => {
    set(() => ({ currentBook: bibleBook }));
  },
  options: getDisplayChoices(3, booksOfTheBible[1]!, true, booksOfTheBible[0]!),
  setOptions: (bibleBooks) => set(() => ({ options: bibleBooks })),
  selectedOption: null,
  setSelectedOption: (bibleBook) => set(() => ({ selectedOption: bibleBook })),

  handleNextBook: () => {
    const newCurrentBook = getNextBook(get().currentBook);
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

  restartPracticeTool: () => {
    set({
      currentBook: booksOfTheBible[0]!,
      correctBook: booksOfTheBible[1]!,
      options: getDisplayChoices(
        3,
        booksOfTheBible[1]!,
        true,
        booksOfTheBible[0]!,
      ),
      selectedOption: null,
    });
  },
}));
