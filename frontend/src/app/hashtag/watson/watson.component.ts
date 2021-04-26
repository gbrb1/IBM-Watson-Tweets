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
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //pegar o id do elemento que eu cliquei na lista
    if (id) {
      this.hashtagService.getById(id).subscribe(hashtag => { //se encontrar o id, chamada para pegar a hashtag na API
        this.hashtag = hashtag;
      });
    }
  }

  onSubmit() { //botão de salvar
    this.hashtagService.watson(this.hashtag).subscribe(responseWatson => { //chamada na API pro serviço do watson no backend
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
