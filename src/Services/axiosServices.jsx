import axios from 'axios';

export default class AxiosService{
    Post(url,data){
        
        return axios.post(url,data);
    }

    Get(url,isHeaderRequired){
        return axios.get(url,isHeaderRequired);
    }  
    Put(url,data,isHeaderRequired){
        
        return axios.put(url,data,isHeaderRequired);
    }  
    Delete(url,data,isHeaderRequired){
        
        return axios.delete(url,data,isHeaderRequired);
    }  
}