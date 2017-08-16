import { Component } from '@angular/core';
import { GitdataService } from './gitdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	username = null;
	score = null;
	result;

	constructor(private _gitdataService: GitdataService){}

	onSubmit(){
		this.result = this._gitdataService.getUsername(this.username)
		if (this.result){
			this.result.then(user => {
				this.score = user.public_repos + user.followers;
			})
			.catch(errors => {
				this.score = "No results"
			})
		} else {
			this.score = "No results"
		}
	}
}
