"use client";

import { useActionState } from "react";
import { submitFeedback } from "@/db/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeedbackForm() {
  const [state, formAction, pending] = useActionState(submitFeedback, null);

  if (state?.success) {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
        <h2 className="text-xl font-semibold text-primary">Thank you!</h2>
        <p className="mt-2 text-muted-foreground">
          Your feedback has been submitted. We appreciate you taking the time to
          help improve Bible Blitz.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state?.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What's on your mind?"
          rows={10}
          required
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={pending}
          className={cn(pending && "opacity-70")}
        >
          {pending ? "Submitting…" : "Send Feedback"}
        </Button>
      </div>
    </form>
  );
}
