import { booksOfTheBible } from "~/data/BibleBooks";
import { getNextBook, getDisplayChoices } from "../helpers/gamehelper";
import { BibleBook } from "../../types/biblebooks";
import { create } from "zustand";

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
  options: [],
  setOptions: (bibleBooks) => set(() => ({ options: bibleBooks })),
  selectedOption: null,
  setSelectedOption: (bibleBook) => set(() => ({ selectedOption: bibleBook })),
  handleNextBook: () => {
    const newCurrentBook = getNextBook(get().currentBook);
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
