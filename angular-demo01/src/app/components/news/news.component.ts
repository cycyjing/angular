import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title: string = 'news component'
  public msg: string = 'news msg'
  private name: string = 'private'
  public writerinfo: object = {
    name: 'yang',
    age: 30
  }
  public value: string
  public content = '<h2>binding html</h2>'
  array = ['aaa', 'bbb', 'ccc']
  arr: any[] = ['aaa', 'bbb', 'ccc']
  userList: any[] = [{
    username: 'alice',
    age: 20
  },
  {
    username: 'yu',
    age: 21
  },
  {
    username: 'amy',
    age: 22
  },
  {
    username: 'ted',
    age: 23
  }]
  cars: any[] = [{
    car: 'a',
    list: [{
      title: 'a1',
      price: 10000
    },
    {
      title: 'a2',
      price: 20000
    },
    {
      title: 'a3',
      price: 30000
    }]
  },
  {
    car: 'b',
    list: [{
      title: 'b1',
      price: 40000
    },
    {
      title: 'b2',
      price: 50000
    },
    {
      title: 'b3',
      price: 60000
    }]
  },
  {
    car: 'c',
    list: [{
      title: 'c1',
      price: 70000
    },
    {
      title: 'c2',
      price: 80000
    },
    {
      title: 'c3',
      price: 90000
    }]
  }]
  constructor() {
    this.value = 'give the des in the constructor'
    console.log(this.msg)
    this.msg = 'after change'
  }

  ngOnInit() {
  }

}
