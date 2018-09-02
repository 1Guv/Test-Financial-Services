import { Component, OnInit } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'app-form-personal-information',
  templateUrl: './form-personal-information.component.html',
  styleUrls: ['./form-personal-information.component.scss']
})
export class FormPersonalInformationComponent implements OnInit {

  form = new Form();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(personalInfoForm) {

    if (!personalInfoForm.valid) {
      return;
    }

    alert("Form data: " + JSON.stringify((this.form)))
  }

}
