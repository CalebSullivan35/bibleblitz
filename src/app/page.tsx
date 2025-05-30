import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Master the Bible with{" "}
              <span className="text-sky-400">Bible Blitz</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Transform your Bible study into an engaging adventure. Learn,
              practice, and master scripture through interactive challenges and
              personalized learning paths.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/bibleIndex"
                className="rounded-md bg-sky-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Start Learning
              </Link>
              <Link
                href="/learn"
                className="text-lg font-semibold leading-6 text-white hover:text-sky-400"
              >
                Try Practice Tool <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">
            Learn Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to master scripture
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Bible Blitz combines modern learning techniques with interactive
            tools to help you understand and remember scripture more
            effectively.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="text-sky-40∏ h-5 w-5 flex-none"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* CTA Section */}
      <div className="px-6 py-32 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to begin your journey?{" "}
          </h2>{" "}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Join thousands of learners who are already mastering scripture with
            Bible Blitz. Start your free learning journey today.
          </p>
          <div className="flexÍ mt-10 items-center justify-center gap-x-6">
            <Link
              href="/bibleIndex"
              className="rounded-md bg-sky-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    name: "Interactive Learning",
    description:
      "Engage with scripture through interactive challenges and quizzes designed to reinforce your understanding and retention.",
    icon: function AcademicCapIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          {...props}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      );
    },
  },
  {
    name: "Personalized Progress",
    description:
      "Track your learning journey with detailed progress metrics and personalized recommendations based on your performance.",
    icon: function ChartBarIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          {...props}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      );
    },
  },
  {
    name: "Comprehensive Coverage",
    description:
      "Access a complete library of scripture organized by books, chapters, and themes, making it easy to focus on specific areas of study.",
    icon: function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          {...props}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      );
    },
  },
];
