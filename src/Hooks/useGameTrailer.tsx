import { useQuery } from "react-query";
import APICLIENT from "../services/apiClient";
import GameTrailer from "../Entities/GameTrailer";


const useGameTrailer = (gameId : number) => {
    const apiClient = new APICLIENT<GameTrailer>(`games/${gameId}/movies`);
    return useQuery(['gameTrailer',gameId],apiClient.getAll);
}
export default useGameTrailer;
