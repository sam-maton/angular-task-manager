import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import {
  NewTaskComponent,
  type NewTaskData
} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  modalVisible = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  removeCompletedTask(taskId: string) {}

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }

  onAddTask(taskData: NewTaskData) {}
}
