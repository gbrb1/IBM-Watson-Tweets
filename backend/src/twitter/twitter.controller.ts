import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TwitterClient } from 'twitter-api-client';
import { TwitterService } from './twitter.service';



@Controller('Twitter')
@ApiTags('Twitter')
export class TwitterController {

  private twitterClient: TwitterClient;

  constructor(private readonly twitterService: TwitterService) {
 
    this.twitterClient = new TwitterClient({
      apiKey: process.env.API_KEY_TWITTER,
      apiSecret: process.env.API_KEY_SECRET_TWITTER,
      accessToken: process.env.ACESSO_TOKEN_TWITTER,
      accessTokenSecret: process.env.ACESSO_TOKEN_SECRET_TWITTER,
    });
  }

  
  @Get('/tweets/:tweet')
  @ApiOperation({
    summary:
      'Retornar Json com principais dados do Tweet + Armazenar no Banco Tweet encontrados',
  })
  async getTwitter(@Param('tweet') parametro: string) {
    try {
     
      const data = await this.twitterClient.tweets.search({
        q: '#' + parametro + '-filter:retweets',
        lang: 'pt',
        count: 100,
      });

     
      const response = data.statuses.map((tweet) => {
        return {
          id: tweet.id,
          userName: tweet.user.name,
          text: tweet.text,
        };
      });

     
      await this.twitterService.saveTweets(response, parametro);

    
      return { dados: response, total: response.length };
    } catch (e) {
      return e;
    }
  }
}