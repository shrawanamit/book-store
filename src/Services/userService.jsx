import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
export default class Service {
    Registration(data) {
        return axiosService.Post(`${apiUrl}/api/Users`, data,false);
      }
    Login(data) {
        return axiosService.Post(`${apiUrl}/api/Users/Login`, data,false);
      }
    ForgetPassword(data) {
        return axiosService.Post(`${apiUrl}/api/Users/ForgetPassword`, data,false);
      }
    ResetPassword(data) {
        return axiosService.Put(`${apiUrl}/api/Users/ResetPassword`, data,false);
      }
}