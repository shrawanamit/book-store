import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
export default class AdminService {
    Registration(data) {
        console.log("login registration");
        return axiosService.Post(`${apiUrl}api/Admin`, data);
        
      }
    Login(data) {
        console.log("login");
        return axiosService.Post(`${apiUrl}api/Admin/Login`, data);
      }
    ForgetPassword(data) {
        return axiosService.Post(`${apiUrl}api/Admin/ForgetPassword`, data,false);
      }
    ResetPassword(data) {
        return axiosService.Put(`${apiUrl}api/Admin/ResetPassword`, data,false);
      }
}