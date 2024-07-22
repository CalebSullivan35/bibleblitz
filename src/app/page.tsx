import { auth } from "@clerk/nextjs/server";
import { BibleGame } from "./components/BibleGame";
import { getUserHighScore } from "./db/actions";

async function getServerSideProps() {
  const { userId } = auth();
  let score = null;
  if (userId) {
    score = await getUserHighScore(userId);
  }
  return score?.score;
}

export default async function HomePage() {
  const highScore = await getServerSideProps();
  return (
    <>
      <BibleGame CurrentHighScore={highScore} />
    </>
  );
}
