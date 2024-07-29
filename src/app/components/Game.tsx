import { useEffect, useState } from "react";
import { booksOfTheBible } from "~/data/BibleBooks";

// This component will take values in to handle dynamic generation of a bible game.
interface GameProps {
  GameTimer: number;
  FakeBooks: boolean;
  Testaments: "Old" | "New" | "Both";
}

export const Game = ({ GameTimer, FakeBooks, Testaments }: GameProps) => {
  //handle the timer.
  const [counter, setCounter] = useState(GameTimer);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      console.log("finished");
    }
  }, [counter]);

  //Get the books of the bible we want.
  const GameBooks = () => {
    if (Testaments === "Old") {
      return booksOfTheBible.filter((b) => b.Testament === "Old");
    } else if (Testaments === "New") {
      return booksOfTheBible.filter((b) => b.Testament === "New");
    }
    return booksOfTheBible;
  };

  

  return (
    <span className="countdown font-mono text-6xl">
      <span style={{ "--value": counter }}></span>
    </span>
  );
};
