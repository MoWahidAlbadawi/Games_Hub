import { useQuery } from "react-query";
import apiClient from "../services/apiClient";
export interface Genre {
    id : number,
    name : string,
    slug : string,
    image_background : string,
}
interface FetchGeneres {
    count : number,
    results : Genre[]
}
const useGeneres = () => {
return useQuery('generes' , () => {
    return apiClient.get<FetchGeneres>('/genres');
},{
    select : (data) => {
        return data.data.results;
    }
});
}
export default useGeneres;