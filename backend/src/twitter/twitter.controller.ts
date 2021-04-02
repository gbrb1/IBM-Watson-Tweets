import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TwitterService } from './twitter.service';


@Controller("Twitter")
@ApiTags('Twitter')
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Get()
  getTwitter() {

    var Twit = require('twit')
 
    var T = new Twit({
      consumer_key:  process.env.API_KEY_TWITTER,
      consumer_secret:  process.env.API_KEY_SECRET_TWITTER,
      access_token:   process.env.ACESSO_TOKEN_TWITTER,
      access_token_secret: process.env.ACESSO_TOKEN_SECRET_TWITTER,
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
      strictSSL:            true,     // optional - requires SSL certificates to be valid.
    })
     
    //
    //  tweet 'hello world!'
    //
 //   T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {  
 //     console.log(data)
 //   })
     
    //
    //  search twitter for all tweets containing the word 'banana' since July 11, 2011
    //
    T.get('search/tweets', { q: 'covid19',   count: 100 }, function(err, data, response) {
    console.log(data)
 /*     data.statuses.map(twitter => {
          Logger.log("metadata:")         
          console.log(twitter.metadata)
          
          Logger.log("entities:")
          console.log(twitter.entities)

          Logger.log("user:")
          console.log(twitter.user)
          
          Logger.log("text:")
          console.log(twitter.text)
          
          Logger.log("retweeted_status:")
          console.log(twitter.retweeted_status)
      }) */

    })
     




    return this.twitterService.getHello();
  }
 
  
}
