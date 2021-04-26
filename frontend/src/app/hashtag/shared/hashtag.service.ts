import { environment } from '../../../environments/environment';
import { Hashtag, ListHashtags, ListTweets, WatsonObject } from './hashtag';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//o service no front mapeia as chamadas na API
@Injectable({
  providedIn: 'root'
})
export class HashtagService {
  
  constructor(private http: HttpClient) { }

  getAll() {           //ListaHastags = tipo de valor de retorno da chamada                  
    return this.http.get<ListHashtags>(`${environment.api}/hashtag`);
  }

  getById(id: string) {                 //environment = localhost/3000/hashatag
    return this.http.get<Hashtag>(`${environment.api}/hashtag/${id}`);
  }

  save(hashtag: Hashtag) { //cadastrar e atualizar
    const hashtagBody = {
      nome: hashtag.nome,
      descricao: hashtag.descricao
    };

    if (hashtag.id) { //se existir, atualizar, se nao, cadastrar
      return this.http.put<Hashtag>(`${environment.api}/hashtag/${hashtag.id}`, hashtagBody);
    } else {
      return this.http.post<Hashtag>(`${environment.api}/hashtag`, hashtagBody);
    }
  }

  delete(id: string) {
    return this.http.delete(`${environment.api}/hashtag/${id}`);
  }
  
   tweets(hashtag: Hashtag) { //Retornar Json com principais dados do Tweet + Armazenar no Banco Tweet encontrados

    return this.http.get<ListTweets>(`${environment.api}/Twitter/tweets/${hashtag.nome}`);
  }
  
  watson(hashtag: Hashtag) { //Pegar resposta no watson da hashtag passada

    return this.http.get<WatsonObject>(`${environment.api}/Watson/Analise/${hashtag.nome}`);
  }

}
