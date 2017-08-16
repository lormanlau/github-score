import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/operator/toPromise.js';

@Injectable()
export class GitdataService {

  constructor(private _http: Http) { }

  getUsername(username){
  	return this._http.get('https://api.github.com/users/' + username)
  	.map(data => data.json())
  	.toPromise();
  }
}
