import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  nid;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // get
    // this.activatedRoute.queryParams.subscribe((data) => {
    //   console.log(data.nid);
    //   this.nid = data.nid;
    // });
    // dynamic route
    this.activatedRoute.params.subscribe((data) => {
      console.log(data.nid);
      this.nid = data.nid;
    });
  }

}
