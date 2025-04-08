import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
