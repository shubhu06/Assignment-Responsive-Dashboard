import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

  saveForm: FormGroup;

  // data:any = this._state.data;
  entries:number = 10;

  addData(){
    // console.table(this.saveForm.value);
    this._state.data.push(this.saveForm.value);
    this.saveForm.reset();
  }

  // addData(){
  //   alert('hello')
  // }

  constructor(public _state: StateService) { 
    this.saveForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      bNo: new FormControl(
        0,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      location: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      exp: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        ),
      cNo: new FormControl(
        0,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18)
        ]
        )
    })
   }

  ngOnInit(): void {
  }

}
