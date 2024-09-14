import { Component, Input } from '@angular/core';
import { CreateTask, Task, User } from '../../lib/types';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() user?: User;

  addTaskFormOpen: boolean = true;


  onTaskDelete(taskId: string) {
    if(!this.user) return    
    if(!this.user.tasks) return

    return this.user.tasks = this.user.tasks.filter((task) => task.id !== taskId)
  }

  onTaskAdd(newTask: CreateTask) {
    if(!this.user) return;

    if (!this.user.tasks) {
      this.user.tasks = [];
    }

    const task: Task = {
      ...newTask,
      id: `task${ (this.user.tasks?.length || 0) + 1 } ${ this.user.id }`
    }

    this.user.tasks?.push(task)
  }

}
