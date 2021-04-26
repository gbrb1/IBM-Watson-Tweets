import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TweetEntity } from './twitter.entity';

@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(TweetEntity)
    private tweetRespository: Repository<TweetEntity>,
  ) {}
 
  async saveTweets(tweets: any, hashtag: string) {
 
    await Promise.all(
   
      tweets.map(async (tweet) => {
     
        const insert = new TweetEntity({
          idTweet: tweet.id,
          userName: tweet.userName,
          text: tweet.text,
          hashtag: hashtag
        });
       
        await this.tweetRespository.save(insert);
      }),
    );
  }
 
 
  async getTweets(hashtag: string): Promise <TweetEntity[]> {
   return await this.tweetRespository.find({ where: { hashtag: hashtag } })
  }


}
