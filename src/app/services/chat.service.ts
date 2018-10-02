import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ChatService {


  //initialized URI to for the user controller
  readonly baseURL = 'http://localhost:3000/api/';
  message: any;
  userData: any = {};
  constructor(private http: HttpClient) { }

  getUsersList(){
    return this.http.get(this.baseURL + 'users');
  }

  getUserInfo(username){
    const url = this.baseURL+'users/'+username;
    return this.http.get(url);
  }

  //post request for message to db from http client 
  postMessage(message:any){
      return this.http.post(this.baseURL + 'messages', message);
  }

  //get messages between two users from db
  getMessages(user1,user2){
    return this.http.post(this.baseURL + 'messages/getmessages', {user1, user2});
  }
}
