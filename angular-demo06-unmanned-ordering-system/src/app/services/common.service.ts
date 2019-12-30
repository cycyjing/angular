import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public domain: string = 'http://a.itying.com/';
  constructor(private httpClient: HttpClient) { }

  get(api) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.domain + api).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
