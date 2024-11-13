import LeaderBoardTable from "./LeaderBoardTable";

export default async function Page() {
  return (
    <div className=" w-5/6 overflow-x-auto sm:w-auto">
      <LeaderBoardTable />
    </div>
  );
}
