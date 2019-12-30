import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  domain: string = '';
  list: any[] = [];

  constructor(public activatedRoute: ActivatedRoute, public commonService: CommonService) {
    this.domain = this.commonService.domain;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      this.requestDetail(data.id);
    });
  }

  requestDetail(id) {
    // request data  http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
    this.commonService.get('api/productcontent?id=' + id).then((data: any) => {
      console.log(data.result[0]);
      this.list = data.result[0];
    });
  }
}
