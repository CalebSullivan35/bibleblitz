import { type BibleBook } from "../types/biblebooks";

interface GameFeedbackProps {
  selectedOption: BibleBook | null;
  correctBook: BibleBook | undefined;
}
export const GameFeedback = ({
  selectedOption,
  correctBook,
}: GameFeedbackProps) => {
  return selectedOption !== null ? (
    <span
      className={`${selectedOption === correctBook ? "text-green-400" : "text-red-500"} sm:text-xl`}
    >
      {selectedOption === correctBook ? "Correct!" : "Incorrect!"}
    </span>
  ) : (
    <span>&nbsp;</span>
  );
};
