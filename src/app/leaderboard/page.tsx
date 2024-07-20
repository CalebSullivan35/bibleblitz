import LeaderBoardTable from "../components/LeaderBoardTable";
import { getLeaderBoardRankings } from "../db/actions";

export default async function Page() {
  const rankings = await getLeaderBoardRankings();
  return (
    <div className=" w-5/6 overflow-x-auto sm:w-auto">
      <LeaderBoardTable rankings={rankings} />
    </div>
  );
}
