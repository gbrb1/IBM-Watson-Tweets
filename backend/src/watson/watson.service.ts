import { Injectable } from '@nestjs/common';

@Injectable()
export class WatsonService {
  getHello(): string {
    return 'Hello World!';
  }
}