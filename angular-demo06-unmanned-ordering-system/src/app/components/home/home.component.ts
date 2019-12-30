import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any[] = [];
  domain: string = '';
  constructor(public commonService: CommonService) {
    this.domain = this.commonService.domain;
  }

  ngOnInit() {
    const api = 'api/productlist';
    this.commonService.get(api).then((data: any) => {
      console.log(data);
      this.results = data.result;
    });
  }

}
