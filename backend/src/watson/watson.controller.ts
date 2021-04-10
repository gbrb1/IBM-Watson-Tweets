import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IamAuthenticator } from 'ibm-watson/auth';
import { WatsonService } from './watson.service';
import { Response } from 'express';

@Controller('Watson')
@ApiTags('Watson')
export class WatsonController {
  constructor(private readonly watsonService: WatsonService) {}

  @Get('/Analise/:url')
  @ApiOperation({
    summary: 'Inserir texto no parametro "url" e Pegar resposta dowatson',
  })
  async getResponseWatson(
    @Param('url') urlMensagem: string,
    @Res() response: Response,
  ) {
    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');

    const assistant = new NaturalLanguageUnderstandingV1({
      authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY_WATSON,
      }),
      version: '2018-04-05',
      serviceUrl:
        'https://gateway.watsonplatform.net/natural-language-understanding/api',
    });

    assistant
      .analyze({
        html: urlMensagem,
        features: {
          concepts: {},
          keywords: {},
        },
      })
      .then((res) => {
        response.json(res.result);
      })
      .catch((err) => {
        response.json(err);
      });
  }
}
