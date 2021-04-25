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
  hastag: Hashtag = new Hashtag();
  title: string = 'Nova Hashtag';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hashtagService: HashtagService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.hashtagService.getById(id).subscribe(hastag => {
        this.hastag = hastag;
        this.title = 'Alterando hastag';
      });
    }
  }

  onSubmit() {
    this.hashtagService.save(this.hastag).subscribe(hastag => {
      console.log(hastag);
      this.router.navigate(['']);
    });
  }
}
