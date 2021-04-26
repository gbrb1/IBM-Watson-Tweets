import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TweetEntity } from './twitter.entity';

@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(TweetEntity)
    //Instanciando o repositório de tweets que é igual a tabela do banco (TweetEntity)
    private tweetRespository: Repository<TweetEntity>,
  ) {}
  //Função para salvar tweets no banco
  async saveTweets(tweets: any, hashtag: string) {
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
 
  //Função pra pegar um array de tweets onde o nome da hashtag == hashtag passada como parametro
  async getTweets(hashtag: string): Promise <TweetEntity[]> {
   //retornando registros encontrados
    return await this.tweetRespository.find({ where: { hashtag: hashtag } })
  }


}
