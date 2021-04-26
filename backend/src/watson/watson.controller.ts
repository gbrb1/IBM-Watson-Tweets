import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IamAuthenticator } from 'ibm-watson/auth';
import { Response } from 'express';
import { TwitterService } from '../twitter/twitter.service';


@Controller('Watson')
@ApiTags('Watson')
export class WatsonController {
  constructor(private readonly twitterService: TwitterService) {}
  //url do serviço
  @Get('/Analise/:hashtag')
  @ApiOperation({ //tag de legenda do swagger
    summary: 'Inserir texto no parametro "url" e Pegar resposta dowatson',
  })
  async getResponseWatson( //função get 
    @Param('hashtag') hashtag: string, //parâmetro passado na url
    @Res() response: Response, //resposta do serviço padrão express
  ) {
    try {     //instanciando o natural language, da lib watson
      const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1'); 
        //setando uma nova variável do tipo natural language e instanciando com os parametros necessários
      const assistant = new NaturalLanguageUnderstandingV1({
        authenticator: new IamAuthenticator({
          apikey: process.env.API_KEY_WATSON,
        }),
        version: '2018-04-05',
        serviceUrl:
          'https://gateway.watsonplatform.net/natural-language-understanding/api',
      });

      //pegando todos os tweets com o nome == o parametro da hashtag
     const tweets = await this.twitterService.getTweets(hashtag)
    
     
     if (tweets.length <= 0) {
        response.sendStatus(404).send("Nenhum tweet encontrado")
     }
      //mapeando o array tweet e devolvendo um array de texto
     const texto = tweets.map(tweet =>{
       return tweet.text;
     })
     
     assistant
     .analyze({
       html: texto.join(), //concatenando todo o array de texto em uma string
       features: {
         keywords: {},
         sentiment: {}
       },
     })
        .then((res) => {
          response.json(res.result); //dados da resposta
        })
        .catch((err) => {
          response.json(err); //erro
        });
    } catch (e) {
      return e;
    }
  }
}
