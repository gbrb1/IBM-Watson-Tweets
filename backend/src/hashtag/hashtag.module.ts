import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagController } from './hashtag.controller';
import { HashtagEntity } from './hashtag.entity';
import { HashtagService } from './hashtag.service';

@Module({
  controllers: [HashtagController],
  imports: [TypeOrmModule.forFeature([HashtagEntity])],
  providers: [HashtagService], //esse service pertence a esse modulo
})
export class HashtagModule {} //exportando modulo
