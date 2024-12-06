import { useInfiniteQuery } from "react-query";
import APICLIENT from "../services/apiClient";
import useGameQueryStore from "../store/store";

const apiClient = new APICLIENT<Game>('/games');
import Game from "../Entities/Game";
const useGames = ()  => {
    const gameQuery = useGameQueryStore(state => state.gameQuery);
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