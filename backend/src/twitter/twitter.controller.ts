import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { text } from 'express';
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

  @Get()
  async getTwitter() {
    const data = await this.twitterClient.tweets.search({
      q: '#covid19' + '-filter:retweets',
      lang:"pt",
      count: 100,
    });

    const response = data.statuses.map(tweet=>{
      return {
        id : tweet.id,
        userName: tweet.user.name,
        text:tweet.text
      }
    })

    return {dados:response, total:response.length}  
  }
}
