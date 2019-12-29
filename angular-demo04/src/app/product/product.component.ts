import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toProductContent() {
    this.router.navigate(['/product-content', '1']);
  }
  toHome() {
    this.router.navigate(['/home']);
  }
  toNews() {
    let queryParams = {
      queryParams: { pid: 111 }
    };
    // or
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'session_id': '123' },
    //   fragment: 'anchor'
    // };
    this.router.navigate(['/news'], queryParams);
  }
}
