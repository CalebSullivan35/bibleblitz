import { BibleGame } from "./components/BibleGame";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-b from-slate-600 to-slate-800 text-white">
      <BibleGame />
    </main>
  );
}
