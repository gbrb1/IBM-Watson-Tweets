import { BadRequestException, Controller, Get, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IamAuthenticator } from 'ibm-watson/auth';
import { Response } from 'express';
import { TwitterService } from '../twitter/twitter.service';


@Controller('Watson')
@ApiTags('Watson')
export class WatsonController {
  constructor(private readonly twitterService: TwitterService) {}

  @Get('/Analise/:hashtag')
  @ApiOperation({
    summary: 'Inserir texto no parametro "url" e Pegar resposta dowatson',
  })
  async getResponseWatson(
    @Param('hashtag') hashtag: string,
    @Res() response: Response,
  ) {
    try {
      const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');

      const assistant = new NaturalLanguageUnderstandingV1({
        authenticator: new IamAuthenticator({
          apikey: process.env.API_KEY_WATSON,
        }),
        version: '2018-04-05',
        serviceUrl:
          'https://gateway.watsonplatform.net/natural-language-understanding/api',
      });

    
     const tweets = await this.twitterService.getTweets(hashtag)

     if(tweets.total <= 0){
      throw new BadRequestException('Nenhum tweet encontrado.')
     }
      
     const texto = tweets.dados.map(tweet =>{
       return tweet.text;
     })

      assistant
        .analyze({
          html: texto.join(),
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
    } catch (e) {
      return e;
    }
  }
}
