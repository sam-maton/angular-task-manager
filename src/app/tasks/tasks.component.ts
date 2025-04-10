import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';
import { TaskComponent } from './task/task.component';
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
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    }
  ];

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => {
      return task.userId === this.user.id;
    });
  }

  removeCompletedTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((t) => {
      return t.id != taskId;
    });
  }

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.dummyTasks.unshift({
      id: new Date().getTime.toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.user.id
    });
  }
}
