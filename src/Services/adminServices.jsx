import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
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
        return axiosService.Post(`${apiUrl}api/Books`, data,false);

    }
    updateBooks(data){
        return axiosService.Put(`${apiUrl}api/Books`, data,false);

    }
    DeleteBooks(data){
        return axiosService.Delete(`${apiUrl}/api/Books/{bookId}`,data,false)
    }
}