import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userHighScoreTable = pgTable("user_high_score", {
  user_id: text("user_id").primaryKey().notNull(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
  score: integer("score").notNull(),
});

export type UserHighScore = typeof userHighScoreTable.$inferInsert;
export type newUserHighScore = typeof userHighScoreTable.$inferInsert;
