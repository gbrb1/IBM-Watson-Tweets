
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import "dotenv/config";
import { Logger } from '@nestjs/common';

const porta = process.env.PORTA
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(bodyParser.json({ limit: '50mb' }));
  
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  const config = new DocumentBuilder()
    .setTitle('Projeto Web3')
    .setDescription('API para consumir simultaneamente recursos da API do tweeter e do google maps')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(porta);
  Logger.log  (`Porta utilizada: ${porta}`,);
}
bootstrap();
