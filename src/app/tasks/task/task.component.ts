import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}

  completeTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
