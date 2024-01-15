import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { TasksService } from 'src/app/global/services/tasks/tasks.service';
import { TaskModel } from 'src/app/global/models/tasks/task.model';

@Component({
  selector: 'app-mobile-quest-add',
  templateUrl: './mobile-quest-add.component.html',
  styleUrls: ['./mobile-quest-add.component.scss']
})
export class MobileQuestAddComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksService,
    private socketService: SocketsService) {
     this.form = this.fb.group({
       type: ['Daily', Validators.required],
       title: ['', Validators.required],
       description: ['', Validators.required],
       deadline: ['', Validators.required],
       difficulty: ['', Validators.required],
       reward: ['', Validators.required],
     });

  }
 
  onSubmit() {
     if (this.form.valid) {
      const data = new TaskModel(this.form);
      data.participants = [];

      this.createTask(data);
      console.log('Form is valid:', this.form.value);
     } else {
       console.log('Form is invalid:', this.form.errors);
     }
  }

  private createTask(task: TaskModel): void {
    this.tasksService.create(task).subscribe((result) => {
      console.log(result);
    });
  }
 
}
