import Config from "../Configration/config";
import AxiosServices from "./axiosServices";

const axiosService = new AxiosServices();
const apiUrl = Config.url;
const token = 'Bearer '+localStorage.getItem('token');

export default class AdminService {
    GetAllBooks(){
        return axiosService.Get(`${apiUrl}api/Book`, false);

    }
    AddBook(data){
        return axiosService.Post(`${apiUrl}api/Book`, data,{ headers: {
          authorization: token
        }});

    }
    updateBooks(data){
        return axiosService.Put(`${apiUrl}api/Book/${data.BookId}`, data,{ headers: {
          authorization: token
        }});

    }
    DeleteBooks(BookId){
        return axiosService.Delete(`${apiUrl}api/Book/${BookId}`,{ headers: {
          authorization: token
        }});
    }
    UpdtaeBookImage(bookId,data){
      return axiosService.Put(`${apiUrl}api/Book/InsertImage/${bookId.bookId}`,data,{ headers: {
        authorization: token
      }});
  }
}
