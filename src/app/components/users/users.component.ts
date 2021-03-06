import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ChatService]
})
export class UsersComponent implements OnInit {

  users: any;
  searchText:string;
  p:number = 1;
  myPage: number =1;
  constructor(private chatService: ChatService, private httpClient: HttpClient)
 { }

  ngOnInit() {
    this.chatService.getUsersList().subscribe((response) => {
      this.users = response;
      
    });
  }
}
