import { environment } from '../../../environments/environment';
import { Hashtag, ListHashtags, ListTweets, WatsonObject } from './hashtag';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ListHashtags>(`${environment.api}/hashtag`);
  }

  getById(id: string) {
    return this.http.get<Hashtag>(`${environment.api}/hashtag/${id}`);
  }

  save(hashtag: Hashtag) {
    const hashtagBody = {
      nome: hashtag.nome,
      descricao: hashtag.descricao
    };

    if (hashtag.id) {
      return this.http.put<Hashtag>(`${environment.api}/hashtag/${hashtag.id}`, hashtagBody);
    } else {
      return this.http.post<Hashtag>(`${environment.api}/hashtag`, hashtagBody);
    }
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/hashtag/${id}`);
  }
  
   tweets(hashtag: Hashtag) {

    return this.http.get<ListTweets>(`${environment.api}/Twitter/tweets/${hashtag.nome}`);
  }
  
  watson(hashtag: Hashtag) {

    return this.http.get<WatsonObject>(`${environment.api}/Watson/Analise/${hashtag.nome}`);
  }

}
