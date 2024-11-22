import { useQuery } from "react-query";
import apiClient from "../services/apiClient";
import { GameQuery } from "../App";

export interface Platform {
    id : number,
    name : string,
    slug : string,
}
export interface Game {
    id : number,
    name : string,
    background_image : string,
    parent_platforms : {platform : Platform}[],
    metacritic : number,
    rating_top : number;
}
interface Fetchgames {
    count : number,
    results : Game[]
}
const useGames = (gameQuery : GameQuery)  => {
return useQuery('games' , () => {
    return apiClient.get<Fetchgames>('/games' , {params : {genres : gameQuery.genre?.id , platforms : gameQuery.platform?.id ,
         ordering : gameQuery.sortOrder , 
        search : gameQuery.searchText,
    }});
},{
    select : (data) => {
        return data.data.results;
    },
});
}
export default useGames;