import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterService {
  getHello(): string {
    return 'Hello World!';
  }

  getExemplo() {
    return {mensagem:'Deus é fiel' }
  }



}
