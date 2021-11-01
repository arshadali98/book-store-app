import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiName = "https://localhost:44332/api/books/";

  constructor(private http: HttpClient) { }

  getBooks(): any{
    console.log("inside serivices");
    return this.http.get(this.apiName)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
        
      }));
  }

  getBookById(bookId: string | null): any{
    console.log("inside serivices");
    let bookIdUrl = this.apiName+bookId;
    return this.http.get(bookIdUrl)
      .pipe(map((res: any)=>{
        console.log(res);
        return res;
      }));
  }


}
