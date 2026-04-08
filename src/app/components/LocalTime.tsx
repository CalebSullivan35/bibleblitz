"use client";

export function LocalTime({ date }: { date: Date }) {
  return (
    <time className="shrink-0 text-xs text-muted-foreground">
      {date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })}
    </time>
  );
}
