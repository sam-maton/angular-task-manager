import { Injectable } from '@angular/core';
import { NewTaskData } from './new-task/new-task.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
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
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Update blog',
      summary: 'Prepare and publish a new blog article.',
      dueDate: '2024-06-15'
    }
  ];

  constructor() {
    const tasks = localStorage.getItem('storedTasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => {
      return task.userId === userId;
    });
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => {
      return t.id != taskId;
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
  }
}
