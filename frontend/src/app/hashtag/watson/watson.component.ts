import { HashtagService } from '../shared/hashtag.service';
import { Component, OnInit } from '@angular/core';
import { Hashtag, Keyword, WatsonObject } from '../shared/hashtag';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.css']
})
export class WatsonComponent implements OnInit {
  hashtag: Hashtag = new Hashtag();
  title: string = 'Análise Watson';
  
  keyword = new Keyword
  responseWatson = new WatsonObject

  constructor(
    private activatedRoute: ActivatedRoute,
    private hashtagService: HashtagService
  ) { }

  ngOnInit() {
    this.responseWatson = null
    this.keyword = null
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.hashtagService.getById(id).subscribe(hashtag => {
        this.hashtag = hashtag;
        this.title = 'Análise Watson';
      });
    }
  }

  onSubmit() {
    this.hashtagService.watson(this.hashtag).subscribe(responseWatson => {
     this.responseWatson = responseWatson

     let maiorKeyword = 0 

      responseWatson.keywords.map(keyword => {
        keyword.count
        if(keyword.count > maiorKeyword){
          this.keyword = keyword
          maiorKeyword = keyword.count
        }
      })

    });
  }
}
