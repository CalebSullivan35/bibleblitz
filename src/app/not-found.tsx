// app/not-found.tsx
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <Image
        src="/GorillaBible.png"
        alt="Sasquatch reading the Bible"
        width={400}
        height={400}
        className="mb-6 rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg">
        Sorry, we couldn't find what you were looking for.
      </p>
      <a href="/" className="mt-6 text-blue-600 underline">
        Go back home
      </a>
    </div>
  );
}
