import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Gamepad2 } from "lucide-react";
import { AnimatedContent } from "@/app/components/AnimatedContent";

export default function HomePage() {
  return (
    <AnimatedContent>
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Bible Blitz
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Learn the books of the Bible
          </p>
        </div>

        <div className="mt-10 grid w-full max-w-md grid-cols-2 gap-4">
          <Card className="cursor-not-allowed opacity-50">
            <CardHeader className="items-center text-center">
              <Gamepad2 className="mb-1 size-8 text-muted-foreground" />
              <CardTitle>Play</CardTitle>
              <CardDescription>Coming soon</CardDescription>
            </CardHeader>
          </Card>

          <Link href="/explore">
            <Card className="border-l-2 border-l-primary transition-all hover:scale-[1.02] hover:bg-muted/50">
              <CardHeader className="items-center text-center">
                <BookOpen className="mb-1 size-8 text-primary" />
                <CardTitle>Explore</CardTitle>
                <CardDescription>Browse the books</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="mt-16 max-w-lg space-y-6 text-center">
          <p className="text-muted-foreground leading-relaxed">
            66 books. Two testaments. Thousands of years of history, poetry,
            prophecy, and letters — all pointing somewhere. Bible Blitz exists to
            help you actually understand how it all fits together.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Not just memorize names and order (though that helps), but get a real
            sense of what each book is, where it sits, and why it matters. Browse
            at your own pace or drill yourself until it sticks.
          </p>
        </div>
      </div>
    </AnimatedContent>
  );
}
