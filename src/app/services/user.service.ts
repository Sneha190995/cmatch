import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }
  //for upcoming matches
  getData()
  {
    let URL = "https://cricapi.com/api/matches";
    let APIKEY ="Slhuyhx2nCgnqMDz0XTAh13pLUn1";
    return this.http.post(URL,{"apikey" : APIKEY}
    )
  }

//for old matches
  getOldMatch()
  {
    let URL = "https://cricapi.com/api/cricket";
    let APIKEY ="Slhuyhx2nCgnqMDz0XTAh13pLUn1";
    return this.http.post(URL,{"apikey" : APIKEY}
    )
  }
} 


