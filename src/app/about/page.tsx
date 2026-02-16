import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">About Bible Blitz</h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-300">
        Bible Blitz is a hobby project that's still in development. The Bible is
        the most widely printed book in history, but it can feel pretty
        intimidating to approach, even for people who grew up in church. I
        wanted to build something that helps with that.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-white">The goal</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-300">
        Pretty simple, really. Two things:
      </p>

      <div className="mt-6 space-y-6">
        <div className="rounded-lg border border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-sky-400">
            Make the Bible easier to navigate
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            A clear, no-nonsense look at how Scripture is organized, what each
            book covers and how it all ties together as one continuous story.
          </p>
        </div>

        <div className="rounded-lg border border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-sky-400">
            Make learning it actually stick
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            Reading about the Bible is great, but retaining it takes repetition.
            I'm building interactive quizzes and challenges to turn that process
            into something you'd actually want to come back to. If you have
            ideas for new game modes, I'm all ears.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-semibold text-white">
        One more thing
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-300">
        This is just me building this in my free time. No team, no company. Some
        parts are further along than others, but I'm chipping away at it. Thanks
        for checking it out.
      </p>
      <div className="mt-16 flex gap-4">
        <Link
          href="/learn"
          className="rounded-md bg-sky-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-sky-600"
        >
          Try the Practice Tool
        </Link>
        <Link
          href="/bibleIndex"
          className="rounded-md border border-slate-600 px-6 py-3 font-semibold text-slate-300 hover:border-slate-400 hover:text-white"
        >
          Explore the Books
        </Link>
      </div>
    </div>
  );
}
