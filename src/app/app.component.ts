import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addData } from './action.action';
import { model } from './model'
import { getFormData } from './selector.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formData: FormGroup;
  values: any;
  constructor(private store: Store<{ data: model }>, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      Name: [''],
      Description: [''],
      Price: [''],
      Offer: ['']
    })

  }
  onSubmit() {
    console.log(this.formData.value)
    this.store.dispatch(addData(this.formData.value));
    this.store.select(getFormData).subscribe((formValue) => {
      console.log(formValue);
      this.values = formValue
    })

  }
}
