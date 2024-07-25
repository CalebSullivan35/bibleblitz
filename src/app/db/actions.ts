"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { userHighScoreTable } from "./schema";
import { db } from ".";
import { desc, eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function getUserHighScore(userId: string) {
  const userHighScore = await db
    .select()
    .from(userHighScoreTable)
    .where(eq(userHighScoreTable.userId, userId));

  if (userHighScore.length > 1) {
    throw Error("Found Too Many High Scores");
  }
  return userHighScore[0];
}

export async function createNewUserHighScore(userId: string, score: number) {
  const userInfo = await clerkClient.users.getUser(userId);
  await db.insert(userHighScoreTable).values({
    userId,
    score,
    userName: userInfo.username,
    userImage: userInfo.imageUrl,
  });
}

export async function updateUserHighScore(userId: string, score: number) {
  return db
    .update(userHighScoreTable)
    .set({
      score,
    })
    .where(eq(userHighScoreTable.userId, userId))
    .returning();
}

export async function handleUserHighScore(score: number) {
  const { userId } = auth();
  if (!userId) {
    return;
  }
  const currentHighScore = await getUserHighScore(userId);
  if (!currentHighScore) {
    await createNewUserHighScore(userId, score);
  } else {
    if (score > currentHighScore.score) {
      await updateUserHighScore(userId, score);
    }
  }
}

export async function getLeaderBoardRankings() {
  const rankings = await db
    .select()
    .from(userHighScoreTable)
    .orderBy(desc(userHighScoreTable.score));
  revalidateTag("rankings");
  return rankings;
}
