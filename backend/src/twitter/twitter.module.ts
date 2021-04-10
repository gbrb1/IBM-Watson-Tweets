import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterController } from './twitter.controller';
import { TweetEntity } from './twitter.entity';
import { TwitterService } from './twitter.service';

@Module({
  imports: [TypeOrmModule.forFeature([TweetEntity])],
  controllers: [TwitterController],
  providers: [TwitterService],
  exports:[TwitterService]
})
export class TwitterModule {}
