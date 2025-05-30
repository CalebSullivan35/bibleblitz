export interface BibleBook {
  name: string;
  Testament: "Old" | "New";
  Category:
    | "Law"
    | "History"
    | "Poetry"
    | "Major Prophet"
    | "Minor Prophet"
    | "Gospel Account"
    | "Letters";
}
