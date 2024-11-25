import axios, { AxiosRequestConfig } from "axios";

const instanceAxios = axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '5316c4dbffbc4faea1e8d0b131faf386',
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