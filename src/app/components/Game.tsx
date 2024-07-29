import { useEffect, useState } from "react";

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

  return (
    <span className="countdown font-mono text-6xl">
      <span style={{ "--value": counter }}></span>
    </span>
  );
};
