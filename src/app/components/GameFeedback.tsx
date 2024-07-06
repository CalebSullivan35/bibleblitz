import { BibleBook } from "../types/biblebooks";

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
      className={`${selectedOption === correctBook ? "text-green-400" : "text-red-500"}`}
    >
      {selectedOption === correctBook ? "Correct!" : "Wrong"}
    </span>
  ) : (
    <span>&nbsp;</span>
  );
};
