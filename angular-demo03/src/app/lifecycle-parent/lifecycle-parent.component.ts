import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './lifecycle-parent.component.html',
  styleUrls: ['./lifecycle-parent.component.scss']
})
export class LifecycleParentComponent implements OnInit {
  title = 'angulardemo';
  public flag: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeTilte() {
    this.title = "改变后的title";
  }

  changeFlag() {
    this.flag = !this.flag;
  }

}
