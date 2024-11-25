import { useQuery } from "react-query";
// import APICLIENT from '../services/apiClient'
import genres from "../assets/data/genres";
import { instanceAxios } from "../services/apiClient";
export interface Genre {
    id : number,
    name : string,
    slug : string,
    image_background : string,
}

// const apiClient = new APICLIENT<Genre>('/genres');
interface  FetchGenres {
    count : number ,
    results : Genre[],
}

const useGeneres = () => {
return useQuery('generes' ,() => instanceAxios.get<FetchGenres>('/genres').then(res => res.data) ,{
    staleTime : 24 * 60 * 60 * 1000,
    initialData : {count :genres.length , results : genres},

});
}
export default useGeneres;