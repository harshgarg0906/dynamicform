import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamicform';

  dynamicForm:FormGroup
  constructor(private formBuilder:FormBuilder){}

  ngOnInit()
  {
    this.dynamicForm=this.formBuilder.group(
      {
        email:'',
        phones:this.formBuilder.array([])
      }
    )
  }

  get phoneForm()
  {
    return this.dynamicForm.get('phones') as FormArray;
  }

  addPhone()
  {
    const data=this.formBuilder.group(
      {
        area:[],
        prefix:[],
        line:[]
      }
    )
    this.phoneForm.push(data);
  }

  removePhone(i)
  {
   this.phoneForm.removeAt(i);
  }

  onSubmit()
  {
    console.log('in the submit function')
    console.log(this.dynamicForm.value)
  }
}
