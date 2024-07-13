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
    <div className=" mb-6 flex flex-row">
      {options.map((x, index) => (
        <span
          key={index}
          className={`mx-1 cursor-pointer text-xs min-[375px]:text-sm min-[450px]:text-base sm:mx-4 sm:text-2xl ${
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
