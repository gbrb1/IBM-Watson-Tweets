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
  //Função para salvar tweets no banco
  async saveTweets(tweets: Tweet[], hashtag: string) {
    //Esperando todos os tweets serem salvos
    await Promise.all(
      //Percorrendo e salvando os tweets
      tweets.map(async (tweet) => {
        //Criando um registro na tabela tweet
        const insert = new TweetEntity({
          idTweet: tweet.id,
          userName: tweet.userName,
          text: tweet.text,
          hashtag: hashtag
        });
        //Salvando no banco
        await this.tweetRespository.save(insert);
      }),
    );
  }
 
 
  async getTweets(hashtag: string): Promise <TweetEntity[]> {
   return await this.tweetRespository.find({ where: { hashtag: hashtag } })
  }


}
