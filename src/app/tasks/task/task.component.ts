import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../lib/types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  @Output() delete = new EventEmitter<string>();

  handleCompleteTask = () => {
    this.task.isCompleted = true
  }

  handleDeleteTask = () => {
    this.delete.emit(this.task.id)
  } 


}
