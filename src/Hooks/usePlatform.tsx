import { useQuery } from "react-query";
import APICLIENT from "../services/apiClient";
import platforms from "../data/platforms";

export interface Platform {
    id : number,
    name : string,
    slug : string,
}

const apiClient = new APICLIENT<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
return useQuery('platforms' , apiClient.getAll, {
    staleTime : 24 * 60 * 60 * 1000, //24h
    initialData : {count : platforms.length , results : platforms , next : null},
});
}
export default usePlatforms;