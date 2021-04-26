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
    this.hashtagService.getAll().subscribe(hashtags => { //batendo na API e pegando as hashtags cadastradas no banco
      this.hashtags = hashtags.dados;

      console.log(hashtags.dados) //debugando

    });
  }

  onHashtagDeleted(hashtag: Hashtag) { //evento que é disparado na exclusão
    if (hashtag) {
      const index = this.hashtags.findIndex((hashtagItem) => hashtagItem.id == hashtag.id); //procurando o indice da hashtag no array
      this.hashtags.splice(index, 1); //sobrescreve 1 elemento a partir do selecionado
    }
  }

}
