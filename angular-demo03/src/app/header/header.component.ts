import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // father to child
  @Input('title') title;
  @Input('method') method;
  @Input('home') home: any;
  // child to father
  header = 'header---from child';

  constructor() { }

  ngOnInit() {
  }

  headerRun() {
    alert('header msg');
  }
  getFatherRun() {
    this.method();
    console.log(this.home.title);
  }
}
