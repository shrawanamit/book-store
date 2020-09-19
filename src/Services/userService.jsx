import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
const token = 'Bearer '+localStorage.getItem('token');

export default class Service {
  Registration(data) {
    return axiosService.Post(`${apiUrl}api/User/Registration`, data, false);
  }
  Login(data) {
    return axiosService.Post(`${apiUrl}api/User/Login`, data, false);
  }
  
  GetAllBooks() {
    return axiosService.Get(`${apiUrl}api/Book`, false);
  }
  AddtoCart(data) {
    return axiosService.Post(`${apiUrl}api/Cart?BookId=${data.BookId}&Quantity=${data.Quantity}`, data, { headers: {
      authorization: token
    }});
  }
  GetCart() {
    return axiosService.Get(`${apiUrl}api/Cart`, { headers: {
      authorization: token
    }});
  }
  DeleteCart(Id){
    return axiosService.Delete(`${apiUrl}api/Cart/${Id}`,{ headers: {
      authorization: token
    }});
  }
  FilterBookByPrice() {
    return axiosService.Get(`${apiUrl}api/Book/FilterByPrice`, { headers: {
      authorization: token
    }});
  }
  SearchBook(data){
    return axiosService.Get(`${apiUrl}api/Book/${data.Search}`, { headers: {
      authorization: token
    }});
  }

  AddtoWishList(data) {
    return axiosService.Post(`${apiUrl}api/WishList?BookId=${data.BookId}&Quantity=${data.Quantity}`, data, { headers: {
      authorization: token
    }});
  }
  GetWishList() {
    return axiosService.Get(`${apiUrl}api/WishList`, { headers: {
      authorization: token
    }});
  }
  DeleteWishList(Id){
    return axiosService.Delete(`${apiUrl}api/WishList/${Id}`,{ headers: {
      authorization: token
    }});
  }
  AddWishListToCart(Id){
    return axiosService.Post(`${apiUrl}api/Cart/WishListToCart/${Id}`,{ headers: {
      authorization: token
    }});
  }
}

