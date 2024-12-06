import { useQuery } from "react-query"
import APICLIENT from "../services/apiClient";
interface screenshot {
    id : number,
    image : string,
}
const useGameScreenShots = (gameId : number) => {
    const apiClient = new APICLIENT<screenshot>(`/games/${gameId}/screenshots`);
    return useQuery(['gameScreenShot',gameId],apiClient.getAll);
}
export default useGameScreenShots;
