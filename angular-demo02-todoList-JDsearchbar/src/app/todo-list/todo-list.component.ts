import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  keyword: string;
  todoList: any[] = [];
  doing: number = 0;
  done: number = 0;

  constructor(public storageService: StorageService) { }

  ngOnInit() {
    let todo = this.storageService.get('todoList');
    if (todo) {
      this.todoList = todo;
    }
    this.count();
  }

  doAdd(e) {
    if (e.keyCode === 13) {
      if (!this.hasKeyword(e.target.value)) {
        this.todoList.push({
          title: e.target.value, status: 0
        });
        this.count();
      } else {
        alert('The data exist!');
      }
      this.keyword = '';
    }
  }
  delete(key) {
    this.todoList.splice(key, 1);
    this.count();
    this.storageService.set('todoList', this.todoList);
  }
  hasKeyword(keyword) {
    if (!keyword) { return false; }
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].title == keyword) {
        return true;
      }
    }
    return false;
  }
  count() {
    let doing: number = 0;
    let done: number = 0;
    console.log(this.todoList.length);
    this.todoList.forEach(element => {
      if (element.status == 0) {
        doing++;
      }
    });
    done = this.todoList.length - doing;
    this.doing = doing;
    this.done = done;
    doing = 0;
    done = 0;
    this.storageService.set('todoList', this.todoList);
  }
}
