import { useQuery } from "react-query";
import APICLIENT from "../services/apiClient";

interface GameTrailer {
    id : number ,
    name : string,
    preview : string,
    data : {480 : string , max : string},
}

const useGameTrailer = (gameId : number) => {
    const apiClient = new APICLIENT<GameTrailer>(`games/${gameId}/movies`);
    return useQuery(['gameTrailer',gameId],apiClient.getAll);
}
export default useGameTrailer;
