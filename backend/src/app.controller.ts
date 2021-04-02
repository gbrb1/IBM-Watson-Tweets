import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller("Exemplo")
@ApiTags('Exemplo1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/exemplo")
  getExemplo() {
    return this.appService.getExemplo();
  }
}
