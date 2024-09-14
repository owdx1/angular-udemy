import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../lib/constants/dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from '../lib/types';

@Component({ // ts feature called decorator, adds metadata to the thing it's attached to.
  selector: 'app-root', // html will be understand this tag under the hood. It will look for <app-root></app-root> and replace it with component's template.
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'angular-max';  
  users = DUMMY_USERS;
  
  selectedUserId?: string = "u1"

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId) 
  }

  onSelectUser(id: string) {
    if(this.selectedUserId !== id) {
      this.selectedUserId = id;
      return
    }
    this.selectedUserId = ""
  }

  
}

// seomething called zone.js listens all possible change events, and update the ui if there is an occurence
// other option is using signals, some sort of mechanism that tells angular when they change.