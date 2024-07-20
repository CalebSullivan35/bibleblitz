interface HighScoreProps {
  score: number;
}

export const HighScore = ({ score }: HighScoreProps) => {
  return (
    <div className="flex flex-col sm:text-3xl">
      <span className="text-center sm:text-3xl">Personal High Score</span>
      <span className="text-center">{score}</span>
    </div>
  );
};
