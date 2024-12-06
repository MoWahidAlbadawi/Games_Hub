import { useQuery } from "react-query"
import APICLIENT from "../services/apiClient";
import GameScreenShot from "../Entities/GameScreenShot";

const useGameScreenShots = (gameId : number) => {
    const apiClient = new APICLIENT<GameScreenShot>(`/games/${gameId}/screenshots`);
    return useQuery(['gameScreenShot',gameId],apiClient.getAll);
}
export default useGameScreenShots;
