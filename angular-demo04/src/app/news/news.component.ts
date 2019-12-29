import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  list: any[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      this.list.push('news ' + i);
    }
  }

}
