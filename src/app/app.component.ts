import { Component } from '@angular/core';

import { type User } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(id: string) {
    const newUser = this.users.find((u) => {
      return u.id === id;
    });

    if (newUser) {
      this.selectedUser = newUser;
    }
  }
}
