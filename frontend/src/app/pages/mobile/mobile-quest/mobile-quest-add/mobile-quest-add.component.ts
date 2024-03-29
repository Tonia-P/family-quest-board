import { Component, Input } from '@angular/core';
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

  @Input() successFlag: boolean = false;
  @Input() failFlag: boolean = false;
  
  form: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksService,
    private socketService: SocketsService) {
     this.form = this.fb.group({
       title: ['', Validators.required],
       description: ['', Validators.required],
       type: ['Daily', Validators.required],
       difficulty: ['', Validators.required],
       reward: ['', Validators.required],
       deadline: ['', Validators.required],
       completed: [false, Validators.required]
     });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = {
        title: this.form.get('title')?.value,
        description: this.form.get('description')?.value,
        type: this.form.get('type')?.value.toLowerCase(),
        difficulty: this.form.get('difficulty')?.value,
        reward: this.form.get('reward')?.value,
        deadline: this.form.get('deadline')?.value,
        completed: this.form.get('completed')?.value,
        participants: []
      };

      this.createTask(data);
      console.log('Form is valid:', this.form.value);
      this.failFlag = false;
      this.successFlag = true
      document.location.href = 'http://localhost:59816/mobile/home';
     } else {
       console.log('Form is invalid:', this.form.errors);
       this.successFlag = false;
       this.failFlag = true;
       document.location.href = 'http://localhost:59816/mobile/home';
     }
  }

  setDifficulty(difficulty: number) {
    this.form?.get('difficulty')?.setValue(difficulty);
  }
  private createTask(task: any): void {
    this.tasksService.create(task).subscribe((result) => {
      console.log(result);
    });
  }
 
}
