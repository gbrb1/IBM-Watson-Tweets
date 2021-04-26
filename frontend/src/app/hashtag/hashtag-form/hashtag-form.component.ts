import { HashtagService } from '../shared/hashtag.service';
import { Component, OnInit } from '@angular/core';
import { Hashtag } from '../shared/hashtag';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hashtag-form',
  templateUrl: './hashtag-form.component.html',
  styleUrls: ['./hashtag-form.component.css']
})
export class HashtagFormComponent implements OnInit {
  hashtag: Hashtag = new Hashtag();
  title: string = 'Nova Hashtag';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hashtagService: HashtagService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //pegar o id do elemento que eu cliquei na lista
    if (id) { //se o id existir, sobrescreva a hashtag
      this.hashtagService.getById(id).subscribe(hashtag => {
        this.hashtag = hashtag;
        this.title = 'Alterando hashtag';
      });
    }
  }

  onSubmit() { //submit do form, enviando o que foi escrito no formulario
    this.hashtagService.save(this.hashtag).subscribe(hashtag => {
      if(hashtag){
        alert("Sucesso")
      }
      this.router.navigate(['']);
    });
  }
}
