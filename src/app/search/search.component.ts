import { Component, OnInit } from '@angular/core';
import { GithubService } from 'app/github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText;
  public searchResults;
  public searchCount;

  constructor(private githubService: GithubService) { }
  ngOnInit() {
   
     
  }

  onKeyup(event){
    this.searchText= event.target.value;
  }

  getUsers(){
 
    this.githubService.getUser(this.searchText)
    .subscribe(res =>
      {this.searchResults =res;
        this.searchCount=res.total_count;
    }); 

  }

}
