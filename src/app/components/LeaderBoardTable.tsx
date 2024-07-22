import { getLeaderBoardRankings } from "../db/actions";

const LeaderBoardTable = async () => {
  const rankings = await getLeaderBoardRankings();
  return (
    <div className="mx-2">
      {rankings.length > 0 && (
        <table className=" table table-xs overflow-x-auto text-xs sm:table-md">
          <thead>
            <tr className="text-white">
              <th></th>
              <th>Rank</th>
              <th>Name</th>
              <th>Highscore</th>
              <th>Date Achieved</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rankings.map((ranking, index) => (
              <tr key={index}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle my-1 h-12 w-12">
                      <img src={ranking.userImage!} alt="User Avatar" />
                    </div>
                  </div>
                </td>
                <td>{index + 1}</td>
                <td>{ranking.userName}</td>
                <td>{ranking.score}</td>
                <td>{new Date(ranking.createdAt!).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaderBoardTable;
