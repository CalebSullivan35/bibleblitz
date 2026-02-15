import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-4 flex min-h-screen flex-col items-center text-center">
      <Image
        src="/statssasquatch.png"
        alt="Sasquatch reading the Bible"
        width={400}
        height={400}
        className="mb-6 rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg">Future Stats page....</p>
      <a href="/" className="mt-6 text-blue-600 underline">
        Go back home
      </a>
    </div>
  );
}
