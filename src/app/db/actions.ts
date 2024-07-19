"use server";

import { auth } from "@clerk/nextjs/server";
import { userHighScoreTable } from "./schema";
import { db } from ".";
import { eq } from "drizzle-orm";

export async function trackHighScore(score: number) {
  const { userId } = auth();
  if (!userId) throw new Error("User not found");
  await db.insert(userHighScoreTable).values({
    user_id: userId,
    score,
  });
}

export async function getUserHighScore() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("No Current User Signed In");
  }

  const userHighScore = await db
    .select()
    .from(userHighScoreTable)
    .where(eq(userHighScoreTable.user_id, userId));

  return userHighScore;
}
