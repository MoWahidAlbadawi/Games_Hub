import { useInfiniteQuery } from "react-query";
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
return useInfiniteQuery({
    queryKey : ['games' , gameQuery],
    queryFn : ({pageParam = 1}) =>apiClient.getAll
        (
        {
            params : {
                genres : gameQuery.genreId,
                platforms : gameQuery.platformId,
                ordering : gameQuery.sortOrder,
                search : gameQuery.searchText,
                page : pageParam,
            }
        }
    ),
     getNextPageParam : (LastPage , AllPages) => {
        return LastPage.next ? AllPages.length + 1: undefined;
    },
    staleTime : 24 * 60 * 60 * 1000, //24h
});
}
export default useGames;