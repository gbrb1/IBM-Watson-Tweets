import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IamAuthenticator } from 'ibm-watson/auth';
//import  NaturalLanguageClassifierV1  from 'ibm-watson/natural-language-classifier/v1';
import { WatsonService } from './watson.service';
import { Response } from 'express';

@Controller('Watson')
@ApiTags('Watson')
export class WatsonController {
  constructor(
    private readonly configService: IamAuthenticator,
    private readonly watsonService: WatsonService,
  ) {}

  @Get('/Analise')
  @ApiOperation({
    summary: 'Inserir url da imagem e Pegar resposta do watson',
  })
  async getResponseWatson(
    @Param('url') urlMensagem: string,
    @Res() res: Response,
  ) {
    var NaturalLanguageClassifierV1 = require('ibm-watson/natural-language-classifier/v1');

    //const apiKey = `${this.configService.get('API_KEY')}`;

    var naturalLanguage = new NaturalLanguageClassifierV1({
      authenticator: new IamAuthenticator({ apikey: process.env.API_KEY_WATSON }),
      //version: '2018-03-19',
      
    });

    var url = urlMensagem;

    var params = {
      url: url,
    };

    naturalLanguage.classify(params, function (err, response) {
      if (err) {
        res.json(err);
      } else {
        res.json(response);
      }
    });
  }
}