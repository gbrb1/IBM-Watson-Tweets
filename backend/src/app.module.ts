import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterModule } from './twitter/twitter.module';
import { WatsonModule } from './watson/watson.module';
import { HashtagModule } from './hashtag/hashtag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TwitterModule,
    WatsonModule,
    HashtagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
