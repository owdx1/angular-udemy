import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../lib/types';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { // all of the properties defined in class is useable in templateURL.
  // if property's access modifier is private, it then can only be used inside of the class, not in templateURL.

  // user = input.required<User>()
  // imagePath = computed(() => `users/${this.user().avatar}`)

  constructor() {} 

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>()
  

  get imagePath() { 
    return `users/${this.user.avatar}`
  }

  handleClick() { 
    this.select.emit(this.user.id);
  }
}


