import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TwitterClient } from 'twitter-api-client';
import { TwitterService } from './twitter.service';

//Definindo os endpoints dos serviços do twitter

@Controller('Twitter')
@ApiTags('Twitter')
export class TwitterController {
  //Declarando objeto da lib TwitterClient para fazer as requisiçoes a api do Twitter
  private twitterClient: TwitterClient;

  constructor(private readonly twitterService: TwitterService) {
    // Instanciando objeto com todas as chaves da api
    this.twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY_TWITTER,
      apiSecret: process.env.API_KEY_SECRET_TWITTER,
      accessToken: process.env.ACESSO_TOKEN_TWITTER,
      accessTokenSecret: process.env.ACESSO_TOKEN_SECRET_TWITTER,
    });
  }

  //endpoint pegar tweets da api do twitter
  @Get('/tweets')
  @ApiOperation({
    summary:
      'Retornar Json com principais dados do Tweet + Armazenar no Banco Tweet encontrados',
  })
  async getTwitter() {
    //constante data com resposta da api
    const data = await this.twitterClient.tweets.search({
      q: '#covid19' + '-filter:retweets',
      lang: 'pt',
      count: 100,
    });

    //map para criar um array com elementos que contenham apenas campos necessarios
    const response = data.statuses.map((tweet) => {
      return {
        id: tweet.id,
        userName: tweet.user.name,
        text: tweet.text,
      };
    });

    //Armazendo Tweets no banco de dados
    await this.twitterService.saveTweets(response);

    //Retornando dados e total
    return { dados: response, total: response.length };
  }
}
