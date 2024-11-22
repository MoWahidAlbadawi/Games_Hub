import { useQuery } from "react-query";
import apiClient from "../services/apiClient";
import { Platform } from "./useGames";

interface FetchPlatforms {
    count : number,
    results : Platform[],
}

const usePlatforms = () => {
return useQuery('platforms' , () => {
    return apiClient.get<FetchPlatforms>('/platforms/lists/parents');
},{
    select : (data) => {
        return data.data.results;
    }
});
}
export default usePlatforms;