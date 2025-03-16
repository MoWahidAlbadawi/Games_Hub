import axios, { AxiosRequestConfig } from "axios";

export const instanceAxios = axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key :  import.meta.env.VITE_RAWG_API_KEY,
    }
});

interface FetchResponse<T> {
    count : number,
    next : string | null,
    results : T[],
}

class APICLIENT<T> {
    endpoint : string;
    
    constructor (endpoint : string) {
        this.endpoint = endpoint;
    }
    getAll = (config : AxiosRequestConfig) => {
        return instanceAxios.get<FetchResponse<T>>(this.endpoint , config).then(res => res.data);
    }
} 
export default APICLIENT;