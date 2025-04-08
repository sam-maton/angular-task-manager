import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() setCompleted = new EventEmitter<string>();

  completeTask() {
    this.setCompleted.emit(this.task.id);
  }
}
