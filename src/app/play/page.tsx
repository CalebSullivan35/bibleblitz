import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Play – Bible Blitz",
};

export default function PlayPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Play</h1>
      <p className="mt-1 text-muted-foreground">
        Test your knowledge with fast-paced drills
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card className="cursor-not-allowed opacity-50">
          <CardHeader className="items-center text-center">
            <Gamepad2 className="mb-1 size-8 text-muted-foreground" />
            <CardTitle>Books Drill</CardTitle>
            <CardDescription>Coming soon</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
