import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() private xxx = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendFather() {
    this.xxx.emit('send to father from child---footer');
  }
}
