import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardComponent } from '../shared/card/card.component';

export interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input() selected = false;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // selectUser = output<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
