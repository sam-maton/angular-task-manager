import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();

  // selectUser = output<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.selectUser.emit(this.id);
  }
}
