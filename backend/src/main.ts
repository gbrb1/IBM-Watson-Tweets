import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';

const porta = process.env.PORTA;
async function bootstrap() { 
  const app = await NestFactory.create(AppModule);

  app.enableCors({ //aceitando acesso de qualquer lugar (por ex, qualquer ponto da internet)
    origin:'*'
  });

  const config = new DocumentBuilder() //setando a configuração da documentação do swagger
    .setTitle('Projeto Web3')
    .setDescription(
      'API para consumir simultaneamente recursos da API do tweeter e do Watson',
    )
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config); //criando a configuração
  SwaggerModule.setup('api', app, document); //passando a rota da documentação

  await app.listen(porta);
  Logger.log(`Porta utilizada: ${porta}`); //logger só aparece no console
}
bootstrap();
