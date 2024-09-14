import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateTask } from '../../../lib/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  
  @Input() username!: string;
  @Output() cancel = new EventEmitter()
  @Output() addTask = new EventEmitter<CreateTask>();

  newTask: CreateTask = {
    title: "",
    desc: "",
    isCompleted: false
  }

  handleCancel = () => { 
    this.cancel.emit()
  }

  handleAddTask = () => {
    if(this.newTask.title && this.newTask.desc) {
      this.newTask = { title: '', desc: '', isCompleted: false }; 
      return this.addTask.emit(this.newTask)
    }
  }
}
