import { booksOfTheBible, fakeBibkeBooks } from "~/data/BibleBooks";
import { type BibleBook } from "../types/biblebooks";

export function getRandomBibleBookName() {
  const randomIndex = Math.floor(Math.random() * booksOfTheBible.length);
  const book = booksOfTheBible[randomIndex]!;
  return book;
}

export function getNextBook(book: BibleBook) {
  let correctAnswerIndex = 0;
  if (booksOfTheBible.indexOf(book) !== booksOfTheBible.length - 1) {
    correctAnswerIndex = booksOfTheBible.indexOf(book) + 1;
  }
  const correctBook = booksOfTheBible[correctAnswerIndex]!;
  return correctBook;
}

export function generateRandomOptionsWithCorrectAnswer(
  amount: number,
  correctBook: BibleBook,
  addFakeBooks: boolean,
) {
  const randomOptions: BibleBook[] = [];
  let possibleOptions: BibleBook[] = [];
  if (!addFakeBooks) {
    possibleOptions = booksOfTheBible.filter(
      (x) => x.name !== correctBook.name,
    );
  } else if (addFakeBooks) {
    possibleOptions = [...booksOfTheBible, ...fakeBibkeBooks].filter(
      (x) => x.name !== correctBook.name,
    );
  }

  while (randomOptions.length < amount) {
    const randomIndex = Math.floor(Math.random() * booksOfTheBible.length);
    const [option] = possibleOptions.splice(randomIndex, 1);
    if (option) {
      randomOptions.push(option as BibleBook);
    }
  }
  const randomArrayIndex = Math.floor(Math.random() * randomOptions.length);
  randomOptions.splice(randomArrayIndex, 0, correctBook);
  return randomOptions;
}
