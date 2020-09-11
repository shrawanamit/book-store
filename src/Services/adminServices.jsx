import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
const token = 'Bearer '+localStorage.getItem('token');

export default class AdminService {
    Registration(data) {
       
        return axiosService.Post(`${apiUrl}api/Admin`, data);
        
      }
    Login(data) {
        
        return axiosService.Post(`${apiUrl}api/Admin/Login`, data);
      }
    ForgetPassword(data) {

        return axiosService.Post(`${apiUrl}api/Admin/ForgetPassword`, data,false);
      }

    ResetPassword(data) {
        return axiosService.Put(`${apiUrl}api/Admin/ResetPassword`, data,false);
      }

    GetAllBooks(){
        return axiosService.Get(`${apiUrl}api/Books`, false);

    }
    AddBook(data){
        return axiosService.Post(`${apiUrl}api/Books`, data,{ headers: {
          authorization: token
        }});

    }
    updateBooks(data){
        return axiosService.Put(`${apiUrl}api/Books`, data,{ headers: {
          authorization: token
        }});

    }
    DeleteBooks(Id){
        return axiosService.Delete(`${apiUrl}api/Books/${Id}`,{ headers: {
          authorization: token
        }});
    }
}