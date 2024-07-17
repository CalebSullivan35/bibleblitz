import { type Dispatch, type SetStateAction } from "react";
import { trackScore } from "../helpers/gamehelper";
import { type BibleBook } from "../types/biblebooks";
interface GameOptionsProps {
  options: BibleBook[];
  selectedOption: BibleBook | null;
  setSelectedOption: Dispatch<SetStateAction<BibleBook | null>>;
  correctBook: BibleBook | undefined;
  currentScore: number;
  setCurrentScore: Dispatch<SetStateAction<number>>;
}

export const GameOptions = ({
  options,
  selectedOption,
  setSelectedOption,
  correctBook,
  currentScore,
  setCurrentScore,
}: GameOptionsProps) => {
  return (
    <div className="mb-6 grid w-screen grid-cols-2 sm:w-fit sm:grid-cols-4">
      {options.map((x, index) => (
        <button
          key={index}
          className={`sm:text-md btn btn-neutral m-2 shadow-md sm:mx-4 sm:my-0 lg:text-lg xl:text-2xl ${
            selectedOption
              ? x === selectedOption
                ? x === correctBook
                  ? "text-green-400"
                  : "text-red-500"
                : ""
              : ""
          }`}
          onClick={() => {
            setSelectedOption(x);
            trackScore(correctBook!, x, currentScore, setCurrentScore);
          }}
        >
          {x.name}
        </button>
      ))}
    </div>
  );
};