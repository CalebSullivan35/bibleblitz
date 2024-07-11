import { Dispatch, SetStateAction, useEffect } from "react";
import { trackScore } from "../helpers/gamehelper";
import { BibleBook } from "../types/biblebooks";
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
    <div className="mx-2 mb-6 flex flex-row">
      {options.map((x, index) => (
        <span
          key={index}
          className={`mx-2 cursor-pointer text-sm sm:mx-4 sm:text-xl ${
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
        </span>
      ))}
    </div>
  );
};
