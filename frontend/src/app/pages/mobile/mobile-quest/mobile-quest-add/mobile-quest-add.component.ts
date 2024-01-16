import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-quest-add',
  templateUrl: './mobile-quest-add.component.html',
  styleUrls: ['./mobile-quest-add.component.scss']
})
export class MobileQuestAddComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['Daily', Validators.required],
      difficulty: ['', Validators.required],
      reward: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form is valid:', this.form.value);
    } else {
      console.log('Form is invalid:', this.form.errors);
    }
  }

  setDifficulty(difficulty: number) {
      this.form?.get('difficulty')?.setValue(difficulty);
  }

}
