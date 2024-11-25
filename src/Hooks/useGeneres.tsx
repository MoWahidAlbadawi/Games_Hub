import { useQuery } from "react-query";
import APICLIENT from '../services/apiClient'
import genres from "../assets/data/genres";
export interface Genre {
    id : number,
    name : string,
    slug : string,
    image_background : string,
}

const apiClient = new APICLIENT<Genre>('/genres');

const useGeneres = () => {
return useQuery('generes' , apiClient.getAll ,{
    staleTime : 24 * 60 * 60 * 1000,
    initialData : {count :genres.length , results : genres},

});
}
export default useGeneres;