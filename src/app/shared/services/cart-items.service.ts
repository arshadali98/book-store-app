import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  apiNameCart = "https://localhost:44332/api/carts/";
  apiNameWishList = "https://localhost:44332/api/Wishlist/";
  
//Step 1: Have the default card items
  // We will normally load this from REST API
  // but now mocking it with static data
  

  //Step 2: Create BehaviourSubject with defaultCartItems
  // Lets make this data subscribable
  // inorder to make the above data subscribable, we need to create an Observable with defaultCartitems
//  private cartItemslist = new BehaviorSubject(this.defaultCartItems);

//  //Step 3: Make the above as Observable so that any comp can subscribe to it.
//  latestCartItemsList: Observable<any> = this.cartItemslist.asObservable();
//  // the above latestCartItemsList is now subscribable from any comp

//  private wishItemslist = new BehaviorSubject(this.defaultWishItems);
//  latestWishItemsList: Observable<any> = this.wishItemslist.asObservable();


  constructor( private http :HttpClient) { 
    this.http.get(this.apiNameCart)
      .pipe(map((res: any)=>{
        console.log(res);
        //return res;
      }));
  }

  getWishList():any{
    let userId = localStorage.getItem('Id');
   return this.http.get(this.apiNameWishList)
      .pipe(map((res: any)=>{
        console.log(res);
        
        return res;
      }));
  }

  getCart():any{
   let userId = localStorage.getItem('Id');
   return this.http.get(this.apiNameCart)
      .pipe(map((res: any)=>{
        console.log(res);
        
        return res;
      }));
  }

  updateCart(cart: any): any{        //must add new book if not exist in cart else increment quantity
    //console.log(book);
    //Let's update the cart items
    // this.latestCartItemsList.pipe(take(1)).subscribe((cartItems: any) => {    
    //   //console.log(cartItems); //Array
    //   const newCartItemsArr = [...cartItems,cart];
    //  // console.log(newCartItemsArr);
    //   this.cartItemslist.next(newCartItemsArr);
    // });
    console.log(cart);
     return this.http.post(this.apiNameCart,cart)
      .pipe(map((res : any) =>{
        console.log(res);
        return res;
      }))

  }

  removeCart(book: any): void{    //must remove book from cart

  }

  removeWishlist(book:any): void{   //must remove book from wishlist

  }



  updateWishlist(wishlist: any): any{      //must only add once
    // this.latestWishItemsList.pipe(take(1)).subscribe((wishItems: any) => {
    //   const newWishItemsArr = [...wishItems,book];
    //   this.wishItemslist.next(newWishItemsArr);
    // })
    console.log(wishlist);
     return this.http.post(this.apiNameWishList,wishlist)
      .pipe(map((res : any) =>{
        console.log(res);
        return res;
      }))
  }
}
