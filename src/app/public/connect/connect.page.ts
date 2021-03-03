import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  get name() {
    return this.ContactForm.get('name');
  }
  get mobile_no() {
    return this.ContactForm.get('mobile_no');
  }
  get email() {
    return this.ContactForm.get('email');
  }
  get message() {
    return this.ContactForm.get('message');
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxLength', message: 'Name must not exceed 255 characters' },
    ],
    mobile_no: [
      { type: 'required', message: 'Mobile Number is required' },
      { type: 'minLength', message: 'Mobile Number must be atleast 6 characters.' },
      { type: 'maxLength', message: 'Mobile Number must not exceed 30 characters' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    message: [
      { type: 'required', message: 'Message is required' },
      { type: 'maxLength', message: 'Mobile Number must not exceed 500 characters' }
    ]
  };

  ContactForm = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]
    ],
    mobile_no: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.maxLength(500),
      ]
    ],
  });

  ngOnInit() {
  }
}
