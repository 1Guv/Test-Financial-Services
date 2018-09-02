import {Component, OnInit} from '@angular/core';
import {Form} from './form';

@Component({
  selector: 'app-form-personal-information',
  templateUrl: './form-personal-information.component.html',
  styleUrls: ['./form-personal-information.component.scss']
})
export class FormPersonalInformationComponent implements OnInit {

  form = new Form();
  person$: Object;

  chosenTitle$: string;
  titles$: string[] = ['Mr', 'Mrs', 'Miss', 'Other'];

  constructor() {
  }

  ngOnInit() {
  }


  onSubmit(personalForm) {

    console.log(this.form);

    // if (!personalForm.valid) {
    //   return;
    // }

    this.person$ = this.form;
    console.log('P>', this.person$);

    alert("Form data: " + JSON.stringify((this.form)))
  }

}
