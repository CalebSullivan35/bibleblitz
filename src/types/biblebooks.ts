export interface BibleBook {
  name: string;
  testament: "Old" | "New";
  division:
    | "Law"
    | "History"
    | "Poetry"
    | "Major Prophet"
    | "Minor Prophet"
    | "Gospel Account"
    | "Church History"
    | "Pauline Epistle"
    | "General Epistle"
    | "Prophecy";
  chapters: number;
}
