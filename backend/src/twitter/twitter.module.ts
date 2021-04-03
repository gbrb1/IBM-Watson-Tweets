import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterController } from './twitter.controller';
import { Tweet } from './twitter.entity';
import { TwitterService } from './twitter.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Tweet])],
  controllers: [TwitterController],
  providers: [TwitterService],
})
export class TwitterModule {}
