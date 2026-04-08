import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getFeedback } from "@/db/actions";
import { AnimatedContent } from "@/app/components/AnimatedContent";
import { LocalTime } from "@/app/components/LocalTime";

export const metadata: Metadata = {
  title: "Admin – Bible Blitz",
};

export default async function AdminPage() {
  const user = await currentUser();

  if (user?.publicMetadata?.role !== "admin") {
    redirect("/");
  }

  const feedback = await getFeedback();

  return (
    <AnimatedContent>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
        <p className="mt-2 text-muted-foreground">
          {feedback.length} {feedback.length === 1 ? "submission" : "submissions"}
        </p>

        {feedback.length === 0 ? (
          <p className="mt-8 text-muted-foreground">No feedback yet.</p>
        ) : (
          <div className="mt-8 space-y-4">
            {feedback.map((entry) => (
              <div
                key={entry.id}
                className="rounded-lg border bg-card p-4 text-card-foreground"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">{entry.name}</span>
                  {entry.createdAt && (
                    <LocalTime date={entry.createdAt} />
                  )}
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedContent>
  );
}
