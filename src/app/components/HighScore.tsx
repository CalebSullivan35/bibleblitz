interface HighScoreProps {
  score: number;
}

export const HighScore = ({ score }: HighScoreProps) => {
  return (
    <div className="absolute right-10 top-14 float-end flex flex-col">
      <span className="text-sm sm:text-base">Personal High Score</span>
      <span className="text-center">{score}</span>
    </div>
  );
};
