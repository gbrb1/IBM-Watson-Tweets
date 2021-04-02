import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getExemplo() {
    return {mensagem:'Deus é fiel' }
  }



}
