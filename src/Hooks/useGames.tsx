import { useQuery } from "react-query";
import APICLIENT from "../services/apiClient";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";

export interface Game {
    id : number,
    name : string,
    background_image : string,
    parent_platforms : {platform : Platform}[],
    metacritic : number,
    rating_top : number;
}
const apiClient = new APICLIENT<Game>('/games');

const useGames = (gameQuery : GameQuery)  => {
return useQuery({
    queryKey : ['games' , gameQuery],
    queryFn : () => apiClient.getAll
        (
        {
            params : {
                genres : gameQuery.genre?.id,
                platforms : gameQuery.platform?.id,
                ordering : gameQuery.sortOrder,
                search : gameQuery.searchText,
            }
        }
    )
});
}
export default useGames;