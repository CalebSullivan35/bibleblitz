import { integer, pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const userHighScoreTable = pgTable("user_high_score", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  score: integer("score").notNull(),
});

export type UserHighScore = typeof userHighScoreTable.$inferSelect;
export type newUserHighScore = typeof userHighScoreTable.$inferInsert;
