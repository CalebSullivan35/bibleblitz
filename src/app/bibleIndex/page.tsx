"Use Client";
import { booksOfTheBible } from "~/data/BibleBooks";

export default function Page() {
  const oldTestimentBooksInOrder = booksOfTheBible.filter(
    (book) => book.Testament === "Old",
  );
  const newTestimentBooksInOrder = booksOfTheBible.filter(
    (book) => book.Testament === "New",
  );

  return (
    <div className="flex h-[90vh] w-[90vw] flex-col text-sm sm:w-[50vw] sm:text-base">
      <div className="bold mb-3 text-xl underline sm:text-3xl">
        Old Testament
      </div>
      <div className="mb-6 ml-5 columns-2 md:columns-3 lg:columns-4 xl:text-xl">
        {oldTestimentBooksInOrder.map((book, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex w-full justify-start">{book.name}</div>
          </div>
        ))}
      </div>
      <div className="bold mb-3 text-xl underline sm:text-3xl">
        New Testament
      </div>
      <div className="ml-5 columns-2 md:columns-3 lg:columns-4 xl:text-xl">
        {newTestimentBooksInOrder.map((book, index) => (
          <div key={index}>
            <div>{book.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
