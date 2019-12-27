import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgUrl: string = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  public list: any[] = [{
    title: 'info1'
  },
  {
    title: 'info2'
  },
  {
    title: 'info3'
  }]
  public flag: boolean = false
  public switchStatus: number = 3
  public fontColor: string = 'orange'
  constructor() { }

  ngOnInit() {
  }

  keyUp(e) {
    console.log(e)
    // get the DOM object
    let dom: any = e.target
    dom.style.color = 'red'

    if (e.keyCode == 13) {
      console.log(e.target.value)
      console.log('press the ENTER!!!')
    }
  }
}
