import { booksOfTheBible, fakeBibkeBooks } from "~/data/BibleBooks";
import { type BibleBook } from "../types/biblebooks";
import { sampleSize, shuffle } from "lodash";
import { type Dispatch, type SetStateAction } from "react";

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

export function generateAllRandomOptions(
  correctBook: BibleBook,
  addFakeBooks: boolean,
) {
  const booksOfTheBiblewithoutAnswer = booksOfTheBible.filter(
    (x) => x.name !== correctBook.name,
  );

  if (addFakeBooks) {
    return [...booksOfTheBiblewithoutAnswer, ...fakeBibkeBooks];
  }

  return booksOfTheBiblewithoutAnswer;
}

export function getDisplayChoices(
  amount: number,
  correctBook: BibleBook,
  addFakeBooks: boolean,
) {
  const allWrongChoices = generateAllRandomOptions(correctBook, addFakeBooks);
  const wrongChoices = sampleSize(allWrongChoices, amount);
  const allChoicesWithCorrectChoice = shuffle([...wrongChoices, correctBook]);
  return allChoicesWithCorrectChoice;
}

export function trackScore(
  correctAnswer: BibleBook,
  selectedAnswer: BibleBook,
  score: number,
  setCurrentScore: Dispatch<SetStateAction<number>>,
) {
  if (correctAnswer.name === selectedAnswer.name) {
    //look into why score++ didnt work.
    setCurrentScore(score + 1);
  } else if (correctAnswer.name !== selectedAnswer.name) {
    setCurrentScore(0);
  }
}

export function newBookButtonCheckForAnswer(
  selectedAnswer: BibleBook | null,
  setCurrentScore: Dispatch<SetStateAction<number>>,
) {
  if (selectedAnswer === null) {
    setCurrentScore(0);
  }
}
