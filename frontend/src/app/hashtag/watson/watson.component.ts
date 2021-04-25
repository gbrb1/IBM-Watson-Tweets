import { HashtagService } from '../shared/hashtag.service';
import { Component, OnInit } from '@angular/core';
import { Hashtag, WatsonObject } from '../shared/hashtag';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.css']
})
export class WatsonComponent implements OnInit {
  hashtag: Hashtag = new Hashtag();
  title: string = 'Análise Watson';
  
  responseWatson = new WatsonObject

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hashtagService: HashtagService
  ) { }

  ngOnInit() {
    this.responseWatson = null
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
    });
  }
}
