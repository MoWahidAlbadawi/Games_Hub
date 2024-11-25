import { useQuery } from "react-query";
// import APICLIENT from "../services/apiClient";
import platforms from "../assets/data/platforms";
import { instanceAxios } from "../services/apiClient";

export interface Platform {
    id : number,
    name : string,
    slug : string,
}

// const apiClient = new APICLIENT<Platform>('/platforms/lists/parents');

interface FetchPlatforms {
    count : number,
    results : Platform[],
}
const usePlatforms = () => {
return useQuery('platforms' , () => instanceAxios.get<FetchPlatforms>('/platforms/lists/parents').then(res => res.data), {
    staleTime : 24 * 60 * 60 * 1000,
    initialData : {count : platforms.length , results : platforms},
});
}
export default usePlatforms;