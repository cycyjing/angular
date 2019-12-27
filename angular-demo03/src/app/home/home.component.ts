import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'home title-from father';
  // child to father
  @ViewChild('header', { static: false }) header: any;

  constructor() { }

  ngOnInit() {
  }

  homeRun() {
    alert('home msg');
  }

  getChildHeaderRun() {
    alert(this.header.header);
    this.header.headerRun();
  }

  run(e){
    console.log(e)
    console.log('object home---father')
  }
}
