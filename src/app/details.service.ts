import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public _http:HttpClient;
  
  constructor(private http: HttpClient) {
   
  }

   read_json(){
    return this.http.get("./assets/events.json");
  }

  read_user_detail(){
    return this.http.get("./assets/userDetails.json");
  }

}
