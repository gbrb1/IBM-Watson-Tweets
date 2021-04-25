import { HashtagService } from '../shared/hashtag.service';
import { Component, OnInit } from '@angular/core';
import { Hashtag } from '../shared/hashtag';

@Component({
  selector: 'app-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrls: ['./hashtag-list.component.css']
})
export class HashtagListComponent implements OnInit {
  hashtags: Hashtag[] = [];

  constructor(private hashtagService: HashtagService) { }

  ngOnInit() {
    this.hashtagService.getAll().subscribe(hashtags => { 
      this.hashtags = hashtags.dados;

      console.log(hashtags.dados)

    });
  }

  onHashtagDeleted(hashtag: Hashtag) {
    if (hashtag) {
      const index = this.hashtags.findIndex((hashtagItem) => hashtagItem.id == hashtag.id);
      this.hashtags.splice(index, 1);
    }
  }

  onHashtagTwitter(hashtag: Hashtag) {
    if (hashtag) {
    //to do (indicar que o serviço hashtagtwitter foi chamado)
    }
  }

}
