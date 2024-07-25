interface HighScoreProps {
  score: number;
}

export const HighScore = ({ score }: HighScoreProps) => {
  return (
    <div className="flex flex-col text-center sm:text-3xl">
      <span className="sm:text-3xl">High Score</span>
      <span>{score}</span>
    </div>
  );
};
