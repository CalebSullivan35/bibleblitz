import { booksOfTheBible } from "~/data/BibleBooks";
import { BibleBook } from "../types/biblebooks";

export function getRandomBibleBookName() {
  const randomIndex = Math.floor(Math.random() * booksOfTheBible.length);
  const book = booksOfTheBible[randomIndex];
  return book;
}

export function generateOptions(book: BibleBook) {
  let correctAnswerIndex = 0;
  if (booksOfTheBible.indexOf(book) !== booksOfTheBible.length - 1) {
    correctAnswerIndex = booksOfTheBible.indexOf(book) + 1;
  }
  const correctBook = booksOfTheBible[correctAnswerIndex];
  return correctBook;
}
