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
  DeleteCart(CartId){
    return axiosService.Delete(`${apiUrl}api/Cart/${CartId}`,{ headers: {
      authorization: token
    }});
  }
  sortBookByColumn(data) {
    return axiosService.Get(`${apiUrl}api/Book/Sorting?columnName=${data.columnName}&order=${data.order}`, { headers: {
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
  DeleteWishList(data){
    return axiosService.Delete(`${apiUrl}api/WishList/${data.wishListId}`,{ headers: {
      authorization: token
    }});
  }
  AddWishListToCart(data){
    return axiosService.Post(`${apiUrl}api/Cart/WishListToCart/${data.wishListId}`,{},{ headers: {
      authorization: token
    }});
  }
  Order(data){
    return axiosService.Post(`${apiUrl}api/Order/${data.cartId}`,{},{ headers: {
      authorization: token
    }});
  }
  OrderPlace(data){
    return axiosService.Post(`${apiUrl}api/Order/OrderPlace?cartId=${data.cartId}&Address=${data.address}&City=${data.city}&PinCode=${data.pinCode}`,{},{ headers: {
      authorization: token
    }});
  }
  getOrder(){
    return axiosService.Get(`${apiUrl}api/Order`,{ headers: {
      authorization: token
    }});
  }

}

