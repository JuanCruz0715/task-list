import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [
    { description: 'Tarea 1', completed: false },
    { description: 'Tarea 2', completed: true },
    { description: 'Tarea 3', completed: false }
    
  ];

  filterType: string = 'all';
  newTask: string = '';

  get filteredTasks(): Task[] {
    if (this.filterType === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filterType === 'incomplete') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ description: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  editTask(task: Task) {
    const newDescription = prompt('Editar tarea', task.description);
    if (newDescription !== null && newDescription.trim() !== '') {
      task.description = newDescription;
    }
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    
    }
  }

}
