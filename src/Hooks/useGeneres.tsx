import { useQuery } from "react-query";
import APICLIENT from '../services/apiClient'
import genres from "../data/genres";
import Genre from "../Entities/Genre";

const apiClient = new APICLIENT<Genre>('/genres');
const useGeneres = () => {
return useQuery('generes' , apiClient.getAll ,{
    staleTime : 24 * 60 * 60 * 1000, //24h
    initialData : {count :genres.length , results : genres , next : null},

});
}
export default useGeneres;