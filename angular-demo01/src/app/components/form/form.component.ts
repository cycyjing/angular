import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personInfo = {
    username: '',
    sex: '0',
    cityList: ['Auckland', 'Wellington', 'Christchurch'],
    city: 'Auckland',
    hobbies: [{
      title: 'eating',
      checked: true
    },
    {
      title: 'gaming',
      checked: false
    },
    {
      title: 'coding',
      checked: false
    }
    ],
    others: ''
  };

  constructor() { }

  ngOnInit() {
  }

  doSubmit() {
    console.log(this.personInfo)
  }
}
