import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

const porta = process.env.PORTA;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'*'
  });

  const config = new DocumentBuilder()
    .setTitle('Projeto Web3')
    .setDescription(
      'API para consumir simultaneamente recursos da API do tweeter e do Watson',
    )
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(porta);
  Logger.log(`Porta utilizada: ${porta}`);
}
bootstrap();
