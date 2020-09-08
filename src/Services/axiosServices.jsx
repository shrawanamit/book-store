import axios from 'axios';

export default class AxiosService{
    Post(url,data){
        console.log("login axios");
        return axios.post(url,data);
    }

    Get(url,isHeaderRequired){
        return axios.get(url,isHeaderRequired);
    }  
    Put(url,data,isHeaderRequired){
        
        return axios.put(url,data,isHeaderRequired);
    }  
}