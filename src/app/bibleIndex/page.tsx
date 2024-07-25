import { booksOfTheBible } from "~/data/BibleBooks";

export default async function Page() {
  return (
    <div className="h-[600px]  overflow-y-scroll text-xl">
      {booksOfTheBible.map((book, index) => (
        <p key={index}>{book.name}</p>
      ))}
    </div>
  );
}
