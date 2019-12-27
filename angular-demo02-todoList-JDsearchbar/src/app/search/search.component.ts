import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyword: string;
  historyList: any[] = [];

  constructor(public storageService: StorageService) { }

  ngOnInit() {
    let searchList: any = this.storageService.get('searchList');
    if (searchList) {
      this.historyList = searchList;
    }
  }

  doSearch() {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword);
      this.storageService.set('searchList', this.historyList);
    }
    this.keyword = '';
  }
  delete(key) {
    console.log(key);
    this.historyList.splice(key, 1);
    // set new historyList after deleting
    this.storageService.set('searchList', this.historyList);
  }
}
