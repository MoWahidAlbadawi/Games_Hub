import { useQuery } from "react-query";
import { instanceAxios } from "../services/apiClient";
import { Game } from "./useGames";

function fetchDetailGame (slug : string) {
    return instanceAxios.get<Game>(`/games/${slug}`).then((res) => res.data);
}

const useGame = (slug : string) => {
    return useQuery(['games',slug],() => fetchDetailGame(slug));
}

export default useGame;