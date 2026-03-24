import type { Metadata } from "next";
import { AnimatedContent } from "@/app/components/AnimatedContent";
import { FeedbackForm } from "./FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback – Bible Blitz",
};

export default function FeedbackPage() {
  return (
    <AnimatedContent>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Have an idea, found a bug, or just want to say hi? We&apos;d love to
          hear from you.
        </p>

        <div className="mt-8">
          <FeedbackForm />
        </div>
      </div>
    </AnimatedContent>
  );
}
