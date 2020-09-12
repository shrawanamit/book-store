import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
const token = 'Bearer '+localStorage.getItem('token');

export default class Service {
  Registration(data) {
    return axiosService.Post(`${apiUrl}api/Users`, data, false);
  }
  Login(data) {
    return axiosService.Post(`${apiUrl}api/Users/Login`, data, false);
  }
  ForgetPassword(data) {
    return axiosService.Post(`${apiUrl}api/Users/ForgetPassword`, data, false);
  }
  ResetPassword(data) {
    return axiosService.Put(`${apiUrl}api/Users/ResetPassword`, data, false);
  }
  GetAllBooks() {
    return axiosService.Get(`${apiUrl}api/Books`, false);
  }
  AddtoCart(data) {
    return axiosService.Post(`${apiUrl}api/Cart`, data, { headers: {
      authorization: token
    }});
  }
  GetCart() {
    return axiosService.Get(`${apiUrl}api/Cart`, { headers: {
      authorization: token
    }});
  }
  DeleteCart(Id){
    return axiosService.Delete(`${apiUrl}api/Books/${Id}`,{ headers: {
      authorization: token
    }});
  }
}