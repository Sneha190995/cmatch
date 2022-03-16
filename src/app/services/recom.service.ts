import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecomService {
  loggedIn = false;
  constructor( private http : HttpClient) { }
  getUser() {
    return this.http.get("http://localhost:5000/users");

}

 //post 
 createUser = function( userForm ){
  console.log("Inside Service" ,userForm);
  this.http
  .post("http://localhost:5000/users" , userForm.value)
  .subscribe(data => {
    console.log( data);
  });
};


loginCustomer = function(loginForm){
  console.log("Inside Service" , loginForm);
  let info;
  this.http
  .post("http://localhost:5000/users" , loginForm.value)
  .subscribe(data => {
    info =data;
    console.log("asdfgg",info);
    if(info.id){
      console.log("Inside",true);
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  });
};

}
