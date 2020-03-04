import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(public $http: HttpService) { }

  ngOnInit(): void {
    this.$http.getBeer().subscribe((data) => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
